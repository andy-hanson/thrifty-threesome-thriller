window.requirejs.config({
	baseUrl: './script',
	paths: {
		howler: '../lib/howler/howler.min',
		jquery: '../lib/jquery/dist/jquery.min',
		'jquery.scrollTo': '../lib/jquery.scrollTo/jquery.scrollTo.min'
	}
})

require([ './main' ], () => { }, err => { throw err })
