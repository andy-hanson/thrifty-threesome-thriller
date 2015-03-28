var
	babel = require('gulp-babel'),
	createServer = require('http-server').createServer,
	eslint = require('gulp-eslint'),
	gulp = require('gulp'),
	jade = require('gulp-jade'),
	sourceMaps = require('gulp-sourcemaps'),
	stylus = require('gulp-stylus'),
	watch = require('gulp-watch')

gulp.task('default', [ 'view', 'style', 'sound', 'lint', 'lib', 'script', 'serve' ])

function watchStream(name) {
	var glob = 'assets/' + name + '/**/*'
	return gulp.src(glob).pipe(watch(glob, { verbose: true }))
}

function simple(name, stream, outName) {
	if (outName === undefined)
		outName = name
	var _ = watchStream(name)
	if (stream)
		_ = _.pipe(stream)
	return _.pipe(gulp.dest('public/' + outName))
}

gulp.task('view', function() { return simple('view', jade(), '') })

gulp.task('style', function() { return simple('style', stylus()) })

gulp.task('sound', function() { return simple('sound') })

gulp.task('lib', function() { return simple('lib') })

gulp.task('script', function() {
	return watchStream('script')
	.pipe(sourceMaps.init())
	.pipe(babel({ modules: 'amd' }))
	.pipe(sourceMaps.write('.'))
	.pipe(gulp.dest('public/script'))
})

gulp.task('lint', function() {
	return gulp.src('assets/script/**/*.js')
	.pipe(eslint())
	.pipe(eslint.format())
	.pipe(eslint.failOnError())
})

gulp.task('serve', function() {
	var port = 8000
	createServer({ root: 'public' }).listen(port)
	console.log('Serving at localhost:' + port + '/')
})
