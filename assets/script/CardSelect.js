"use strict"

var
	$ = require("jquery"),
	isSet = require("./rules").isSet,
	errorDescription = require("./rules").errorDescription
var
	getSet = new Audio("sound/getSet.wav"),
	badSet = new Audio("sound/badSet.wav")


function CardSelect(game) {
	this.game = game
	this.reset()
	var self = this
	$('#game').on('contextmenu', function() { return self.contextMenu() })
	this.game.table.cards.forEach(function(card) {
		$(card.cell).click(function() { self.cardClicked(card) })
	})
}
module.exports = CardSelect
CardSelect.prototype = {
	reset: function() {
		this.selectedCards = []
		this.hintCards = []
	},

	cardClicked: function(card) {
		if (!this.game.isPlaying())
			return

		if (card.selected)
			this.deselectCard(card)
		else
			this.selectCard(card)
	},

	selectCard: function(card) {
		this.selectedCards.push(card)
		card.setSelected(true)
		this.checkForSet()
	},

	checkForSet: function() {
		if (this.selectedCards.length === 3) {
			if (isSet(this.selectedCards[0], this.selectedCards[1], this.selectedCards[2]))
				this.onSet()
			else {
				//alert(
				//	'Not a valid group - error in attribute(s) ' +
				//	errorDescription(this.selectedCards[0], this.selectedCards[1], this.selectedCards[2]))
				badSet.play()
				this.deselectAll()
			}
		}
	},

	onSet: function() {
		getSet.play()
		this.game.table.resetCards(this.selectedCards)
		this.deselectAll()
		this.hintCards.forEach(function(card) { card.setHighlight(false) })
		this.game.onSet()
	},

	deselectAll: function() {
		while (this.selectedCards.length > 0)
			this.deselectCard(this.selectedCards[0])
	},

	deselectCard: function(card) {
		removeFromArray(this.selectedCards, card)
		card.setSelected(false)
	},

	contextMenu: function() {
		if (this.selectedCards.length > 0) {
			this.deselectAll()
			return false
		}
		else return true //Let menu show if nothing to deselect.
	},

	showHint: function(hintCards) {
		this.deselectAll()
		this.hintCards = hintCards
		this.hintCards.forEach(function(card) { card.setHighlight(true) })
	}
}

function removeFromArray(arr, em) {
	for (var i = 0; i < arr.length; i++)
		if (arr[i] === em) {
			arr.splice(i, 1)
			return
		}
	throw new Error(em + " is not in " + arr)
}
