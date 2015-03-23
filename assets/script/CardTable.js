import $ from 'jquery'
import Card from './Card'
import { isSet } from './rules'
const
	NRows = 3,
	NCols = 4

export default class CardTable {
	constructor() {
		this.cards = []
		this._makeTable()
		$('#game').append(this.table)
	}

	draw() {
		this.cards.forEach(function(_) { _.draw() })
	}

	findSet() {
		for (let i1 = 0; i1 < this.cards.length; i1 = i1 + 1)
			for (let i2 = i1 + 1; i2 < this.cards.length; i2 = i2 + 1)
				for (let i3 = i2 + 1; i3 < this.cards.length; i3 = i3 + 1)
					if (isSet(this.cards[i1], this.cards[i2], this.cards[i3]))
						return [ this.cards[i1], this.cards[i2], this.cards[i3] ]
		return null
	}

	reset() {
		this.resetCards(this.cards)
	}

	resetCards(cardsToReset) {
		do
			cardsToReset.forEach(function(_) { _.randomize() })
		while (!this._boardOk())
	}

	resize(width, height) {
		const cardWidth = width / NCols, cardHeight = height / NRows
		this.cards.forEach(function(card) { card.resize(cardWidth, cardHeight) })
	}

	_makeTable() {
		this.table = document.createElement('table')
		this.table.id = 'cardtable'
		this.cards = []
		for (let r = 0; r < NRows; r = r + 1) {
			const row = this.table.insertRow(r)
			for (let c = 0; c < NCols; c = c + 1)
				this.cards.push(new Card(row.insertCell(c), r, c))
		}
	}

	_isRepeatOnBoard() {
		for (let i1 = 0; i1 < this.cards.length; i1 = i1 + 1)
			for (let i2 = i1 + 1; i2 < this.cards.length; i2 = i2 + 1)
				if (arrEq(this.cards[i1].data, this.cards[i2].data))
					return true
		return false
	}

	_isSetOnBoard() {
		return this.findSet() !== null
	}

	_boardOk() {
		return !this._isRepeatOnBoard() && this._isSetOnBoard()
	}
}

function arrEq(a, b) {
	if (a.length !== b.length)
		return false
	for (let i = 0; i < a.length; i = i + 1)
		if (a[i] !== b[i])
			return false
	return true
}
