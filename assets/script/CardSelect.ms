use
	howler Howl
	msl.io.time $after-time
	msl.$ $done
	.dom elem on
	.is-threesome?

get-set = new Howl (src. "sound/get-set.wav")
bad-set = new Howl (src. "sound/bad-set.wav")

CardSelect. class
	construct! .game
		.selectedCards ::= []
		.hintCards ::= []

		(elem "game").oncontextmenu := |
			.-context-menu!()

		for! .game.table.cards
			on "click" _.cell !|
				.-card-clicked! _

	"reset!" !|
		for! .selectedCards
			_.set-selected! false
		for! .hintCards
			_.set-highlight! false

		.selectOn := true
		.selectedCards := []
		.hintCards := []

	"show-hint!" !|hint-cards
		.-deselect-all!()
		.hintCards := hint-cards
		for! .hintCards
			_.set-highlight! true

	"-card-clicked!" !|card
		if! and .game.isPlaying() .selectOn
			case!
				card.selected?
					.-deselect-card! card
				else
					.-select-card! card

	"-select-card!" !|card
		.selectedCards.push card
		card.set-selected! true
		.-check-for-set!()

	"-check-for-set!" !|
		if! =? .selectedCards.length 3
			todo ...(.selectedCards)
			ok? = is-threesome? .selectedCards[0] .selectedCards[1] .selectedCards[2]
			(cond ok? get-set bad-set).play()

			.selectOn := false
			$done ($after-time 600 !|
				.selectOn := true
				case!
					ok?
						.-on-set!()
					else
						.-deselect-all!()

	"-on-set!" !|
		.game.table.reset-cards! .selectedCards
		.-deselect-all!()
		for! .hintCards
			_.set-highlight! false
		.game.onSet()

	"-deselect-all!" !|
		for! .selectedCards
			_.set-selected! false
		empty! .selectedCards

	"-deselect-card!" !|card
		-! .selectedCards card
		card.set-selected! false

	"-context-menu!" |
		any-selected-cards? = and (not empty? .selectedCards) .selectOn
		if! any-selected-cards?
			.-deselect-all!()
		not any-selected-cards?
