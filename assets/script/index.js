"use strict"

require("./howler.core.min.js") // TODO: NPM version (once 2.0 is available)
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

	var muted = false
	$("#mute").click(function() {
		muted = !muted
		Howler.mute(muted)
		$(this).attr("class", "fa fa-volume-" + (muted ? "off" : "up"))
	})
})
