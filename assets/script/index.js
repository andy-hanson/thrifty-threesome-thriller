// TODO: NPM version (once 2.0 is available)
import './howler.core.min.js'
import $ from 'jquery'
import 'jquery.scrollto'
import Game from './Game'

$(function() {
	new Game().reset()

	const about = $('#about')
	about.hide()
	$('#help').click(function() {
		about.toggle()
		if (about.is(':visible'))
			$(window).scrollTo(about)
	})

	let muted = false
	$('#mute').click(function() {
		muted = !muted
		global.Howler.mute(muted)
		$(this).attr('class', `fa fa-volume-${muted ? 'off' : 'up'}`)
	})
})
