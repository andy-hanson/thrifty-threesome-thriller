use
	global document
	.Card
	.dom elem set-content!
	.is-threesome?

N-Rows = 3
N-Cols = 4
N-Cards = * N-Rows N-Cols

CardTable. class
	construct!
		set-content! (elem "game") .-make-table()

	"draw" !|
		for! .cards
			_.draw!()

	"find-set" |
		| TODO:SYNTAX Loop labels
		res ::= null
		done ::= false

		for! i1 in new Range 0 N-Cards
			c1 = .cards[i1]
			for! i2 in new Range (+ 1 i1) N-Cards
				c2 = .cards[i2]
				for! i3 in new Range (+ 1 i2) N-Cards
					c3 = .cards[i3]
					if! is-threesome? c1 c2 c3
						res := [c1 c2 c3]
						done := true
						break!
				if! done
					break!
			if! done
				break!

		res

	"reset!" !|
		.reset-cards! .cards

	"reset-cards!" !|cards-to-reset
		for!
			for! cards-to-reset
				_.randomize!()
			if! .-board-ok?()
				break!

	"resize!" !|width height
		card-width = / width N-Cols
		card-height = / height N-Rows
		for! .cards
			_.resize! card-width card-height

	"-make-table" |
		with document.createElement "table"
			_.id = "cardtable"
			.cards = []
			for! r in new Range 0 N-Rows
				row = _.insertRow r
				for! c in new Range 0 N-Cols
					.cards.push new Card (row.insertCell c)

	"-is-repeat-on-board?" |
		| TODO:SYNTAX Loop labels
		res ::= false

		for! i1 in new Range 0 N-Cards
			for! i2 in new Range (+ i1 1) N-Cards
				if! =? .cards[i1].data .cards[i2].data
					res := [.cards[i1] .cards[i2]]
					break!
			if! res
				break!

		res

	"-is-set-on-board?" |
		not =? null .find-set()

	"-board-ok?" |
		and .-is-set-on-board?() (not .-is-repeat-on-board?())
