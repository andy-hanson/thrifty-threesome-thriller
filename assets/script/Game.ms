import
	global window
	howler Howl
	msl.io.time $sleep
	.CardSelect
	.CardTable
	.dom elem on

times-up = new Howl {src. "sound/times-up.wav"}
GameTime = 180

Game. class
	construct
		.table := new CardTable
		.card-select := new CardSelect this

		on 'resize window .&resize!
		on 'click (elem 'hint) .&hint!
		on 'click (elem 'game) .&clicked!

	is-playing? \
		=? .state 'playing

	clicked! !\
		if =? .state 'waiting
			.reset!()

	reset! !\
		.resize!()
		.table.reset!()
		.card-select.reset!()
		.state := 'playing
		.setScore 0
		.time := GameTime
		.clock()

	clock $!\
		show-time! = !\
			(elem 'time).textContent := .time
		show-time!()

		for
			$ $sleep 1000
			.time := - .time 1
			show-time!()
			if =? .time 0
				times-up.play()
				.state := 'frozen
				$ $sleep 5000
				.state := 'waiting
				break

	onSet !\
		.setScore + 1 .score

	setScore !\new-score
		.score := new-score
		(elem 'score).textContent := .score

	resize! !\
		main = elem 'main
		game = elem 'game
		width = game.offsetWidth
		height = - main.offsetHeight (elem 'hud).offsetHeight

		game.style.borderRadius :=
			size = Math.min width height
			"#(* size 0.1)px"

		.table.resize! width height

	hint! !\
		unless .card-select.is-hinting?()
			.setScore - .score 1
			.card-select.show-hint! .table.find-set()
