import { Howler } from 'howler'
import $ from 'jquery'
import 'jquery.scrollTo'
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
		Howler.mute(muted)
		$(this).attr('class', `fa fa-volume-${muted ? 'off' : 'up'}`)
	})
})
