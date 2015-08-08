"use strict"

const
	createServer = require('http-server').createServer,
	gulp = require('gulp'),
	jade = require('gulp-jade'),
	mason = require('gulp-mason'),
	plumber = require('gulp-plumber'),
	sourceMaps = require('gulp-sourcemaps'),
	stylus = require('gulp-stylus'),
	watch = require('gulp-watch')

gulp.task('default', [ 'view', 'style', 'sound', 'script', 'lib', 'serve' ])

const watchStream = name => {
	const glob = `assets/${name}/**/*`
	return gulp.src(glob)
	.pipe(watch(glob, { verbose: true }))
	.pipe(plumber())
}

const simple = (name, stream, outName) => {
	if (outName === undefined)
		outName = name
	let _ = watchStream(name)
	if (stream)
		_ = _.pipe(stream)
	return _.pipe(gulp.dest(`public/${outName}`))
}

gulp.task('view', () => simple('view', jade(), ''))

gulp.task('style', () => simple('style', stylus()))

gulp.task('sound', () => simple('sound'))

gulp.task('script', () =>
	watchStream('script')
	.pipe(sourceMaps.init())
	// TODO: module style option: amdefine, amd, commonjs
	.pipe(mason({ forceNonLazyModule: true, includeAmdefine: false }))
	.pipe(sourceMaps.write('.'))
	.pipe(gulp.dest('public/script')))

gulp.task('lib', () =>
	gulp.src('bower_components/**/*')
	.pipe(gulp.dest('public/lib')))

gulp.task('serve', () => { createServer({ root: 'public' }).listen(8000) })
