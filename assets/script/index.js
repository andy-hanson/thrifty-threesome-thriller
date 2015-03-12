"use strict"

var
	$ = require("jquery"),
	Game = require("./Game")
require("jquery.scrollto")

$(function() {
	new Game()

	var about = $("#about")
	about.hide()
	$("#help").click(function() {
		about.toggle()
		if (about.is(":visible"))
			$(window).scrollTo(about)
	})
})
