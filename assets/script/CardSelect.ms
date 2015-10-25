import
	howler Howl
	msl.io.time $sleep
	msl.Promise $do
	.dom elem on
	.is-threesome?

get-set = new Howl {src. "sound/get-set.wav"}
bad-set = new Howl {src. "sound/bad-set.wav"}

CardSelect. class
	construct .game
		.selected-cards := []
		.hint-cards := []
		(elem 'game).oncontextmenu := .&context-menu!
		for .game.table.cards
			on 'click _.cell .&card-clicked![_]

	reset! !\
		for .selected-cards
			_.set-selected! false
		for .hint-cards
			_.set-highlight! false
		.select-on := true
		.selected-cards := []
		.hint-cards := []

	is-hinting? \
		not empty? .hint-cards

	show-hint! !\hint-cards
		.deselect-all!()
		.hint-cards := hint-cards
		for .hint-cards
			_.set-highlight! true

	my card-clicked! !\_
		if and .game.is-playing?() .select-on
			cond _.selected? .deselect-card!_ .select-card!_

	my select-card! !\_
		.selected-cards.push _
		_.set-selected! true
		if =? (count .selected-cards) 3
			.check-for-set!()

	my deselect-card! !\card
		-! .selected-cards card
		card.set-selected! false

	my check-for-set! !\
		ok? = is-threesome? ...(.selected-cards)
		(cond ok? get-set bad-set).play()
		$do $!\
			.select-on := false
			$ $sleep 600
			.select-on := true
			cond ok? .on-set!() .deselect-all!()

	my on-set! !\
		.game.table.reset-cards! .selected-cards
		.deselect-all!()
		.game.onSet()

	my deselect-all! !\
		for .selected-cards
			_.set-selected! false
		empty! .selected-cards
		for .hint-cards
			_.set-highlight! false
		empty! .hint-cards

	my context-menu! \
		with not and (not empty? .selected-cards) .select-on
			unless _
				.-deselect-all!()
