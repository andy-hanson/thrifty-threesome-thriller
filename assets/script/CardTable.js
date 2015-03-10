"use strict"

var
	$ = require("jquery"),
	Card = require("./Card"),
	isSet = require("./rules").isSet

function CardTable() {
	this.cards = []
	this.makeTable()
	$('#tableDiv').append(this.table)
}
module.exports = CardTable
CardTable.prototype = {
	nRows: 3,
	nCols: 4,

	reset: function() {
		this.resetCards(this.cards)
	},

	draw: function() {
		this.cards.forEach(function(_) { _.draw() })
	},

	makeTable: function() {
		this.table = document.createElement('table')
		this.table.id = 'cardtable'
		for (var r=0; r < this.nRows; r++) {
			var row = this.table.insertRow(r)
			for (var c=0; c < this.nCols; c++) {
				var cell = row.insertCell(c)
				cell.card = new Card(cell, r, c)
			}
		}

		// Card order goes down then right
		this.cards = []
		for (var c = 0; c < this.nCols; c++)
			for (var r = 0; r < this.nRows; r++)
				this.cards.push(this.table.rows[r].cells[c].card)
	},

	isRepeatOnBoard: function() {
		for (var i1 = 0; i1 < this.cards.length; i1++)
			for (var i2 = i1 + 1; i2 < this.cards.length; i2++)
				if (arrEq(this.cards[i1].data, this.cards[i2].data))
					return true
		return false
	},

	isSetOnBoard: function() {
		return this.findSet() !== null
	},

	findSet: function() {
		for (var i1 = 0; i1 < this.cards.length; i1++)
			for (var i2 = i1 + 1; i2 < this.cards.length; i2++)
				for (var i3 = i2 + 1; i3 < this.cards.length; i3++)
					if (isSet(this.cards[i1], this.cards[i2], this.cards[i3]))
						return [ this.cards[i1], this.cards[i2], this.cards[i3] ]
		return null
	},

	boardOk: function() {
		return !this.isRepeatOnBoard() && this.isSetOnBoard()
	},

	resetCards: function(cardsToReset) {
		do
			cardsToReset.forEach(function(_) { _.randomize() })
		while (!this.boardOk())
	},

	resize: function(width, height) {
		var br = Math.min(width, height) * 0.10
		$("#tableDiv").css('border-radius', br + 'px')
		var cardWidth = width / this.nCols
		var cardHeight = height / this.nRows
		this.cards.forEach(function(card) {
			card.resize(cardWidth, cardHeight)
		})
	}
}

function arrEq(a, b) {
	if (a.length !== b.length)
		return false
	for (var i = 0; i < a.length; i++)
		if (a[i] !== b[i])
			return false
	return true
}
