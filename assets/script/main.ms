import
	howler Howler
	.dom elem hide! toggle-visibility! on
	.Game

(new Game).reset!()

about = elem "about"
hide! about

on "click" (elem "help") !|
	if! toggle-visibility! about
		about.scrollIntoView()

muted ::= false
on "click" (elem "mute") .!|
	muted := not muted
	Howler.mute muted
	.className := "fa fa-volume-{cond muted "off" "up"}"
