import
	howler Howl
	msl.io.time $after-time
	msl.$ $done
	.dom elem on
	.is-threesome?

get-set = new Howl (src. "sound/get-set.wav")
bad-set = new Howl (src. "sound/bad-set.wav")

CardSelect. class
	construct! .game
		.selected-cards ::= []
		.hint-cards ::= []

		(elem "game").oncontextmenu := |
			.-context-menu!()

		for! .game.table.cards
			on "click" _.cell !|
				.-card-clicked! _

	"reset!" !|
		for! .selected-cards
			_.set-selected! false
		for! .hint-cards
			_.set-highlight! false

		.select-on := true
		.selected-ards := []
		.hint-cards := []

	"is-hinting?" |
		not empty? .hint-cards

	"show-hint!" !|hint-cards
		.-deselect-all!()
		.hint-cards := hint-cards
		for! .hint-cards
			_.set-highlight! true

	"-card-clicked!" !|card
		if! and .game.isPlaying() .select-on
			case!
				card.selected?
					.-deselect-card! card
				else
					.-select-card! card

	"-select-card!" !|card
		.selected-cards.push card
		card.set-selected! true
		.-check-for-set!()

	"-check-for-set!" !|
		if! =? .selected-cards.length 3
			todo ...(.selected-cards)
			ok? = is-threesome? .selected-cards[0] .selected-cards[1] .selected-cards[2]
			(cond ok? get-set bad-set).play()

			.select-on := false
			$done ($after-time 600 !|
				.select-on := true
				case!
					ok?
						.-on-set!()
					else
						.-deselect-all!()

	"-on-set!" !|
		.game.table.reset-cards! .selected-cards
		.-deselect-all!()
		.game.onSet()

	"-deselect-all!" !|
		for! .selected-cards
			_.set-selected! false
		empty! .selected-cards
		for! .hint-cards
			_.set-highlight! false
		empty! .hint-cards

	"-deselect-card!" !|card
		-! .selected-cards card
		card.set-selected! false

	"-context-menu!" |
		any-selected-cards? = and (not empty? .selected-cards) .select-on
		if! any-selected-cards?
			.-deselect-all!()
		not any-selected-cards?
