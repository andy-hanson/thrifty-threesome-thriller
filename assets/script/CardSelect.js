"use strict"

var
	$ = require("jquery"),
	isSet = require("./rules").isSet,
	errorDescription = require("./rules").errorDescription
var
	getSet = new Howl({ src: "sound/getSet.wav" }),
	badSet = new Howl({ src: "sound/badSet.wav" })

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
		this.selectOn = true
		this.selectedCards = []
		this.hintCards = []
	},

	cardClicked: function(card) {
		if (this.game.isPlaying() && this.selectOn) {
			if (card.selected)
				this.deselectCard(card)
			else
				this.selectCard(card)
		}
	},

	selectCard: function(card) {
		this.selectedCards.push(card)
		card.setSelected(true)
		this.checkForSet()
	},

	checkForSet: function() {
		if (this.selectedCards.length === 3) {
			this.selectOn = false
			var ok = isSet(this.selectedCards[0], this.selectedCards[1], this.selectedCards[2])
			if (ok)
				getSet.play()
			else
				badSet.play()
			var self = this
			window.setTimeout(function() {
				self.selectOn = true
				if (ok) self.onSet(); else self.deselectAll()
			}, 600)
		}
	},

	onSet: function() {
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
		if (this.selectedCards.length > 0 && this.selectOn) {
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
