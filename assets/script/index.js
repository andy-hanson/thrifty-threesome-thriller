window.requirejs.config({
	baseUrl: './script',
	paths: {
		howler: '../lib/howler.core.min',
		jquery: '//code.jquery.com/jquery-2.1.3.min',
		'jquery.scrollTo': '//cdn.jsdelivr.net/jquery.scrollto/2.1.0/jquery.scrollTo.min'
	}
})

require([ './main' ], () => { }, err => { throw err })
