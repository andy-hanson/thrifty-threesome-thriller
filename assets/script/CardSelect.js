import $ from 'jquery'
import { isSet, errorDescription } from './rules'
const
	getSet = new global.Howl({ src: 'sound/getSet.wav' }),
	badSet = new global.Howl({ src: 'sound/badSet.wav' })

export default class CardSelect {
	constructor(game) {
		this.game = game
		this.reset()
		const self = this
		$('#game').on('contextmenu', function() { return self._contextMenu() })
		this.game.table.cards.forEach(function(card) {
			$(card.cell).click(function() { self._cardClicked(card) })
		})
	}

	reset() {
		this.selectOn = true
		this.selectedCards = []
		this.hintCards = []
	}

	showHint(hintCards) {
		this._deselectAll()
		this.hintCards = hintCards
		this.hintCards.forEach(function(card) { card.setHighlight(true) })
	}

	_cardClicked(card) {
		if (this.game.isPlaying() && this.selectOn)
			if (card.selected)
				this._deselectCard(card)
			else
				this._selectCard(card)
	}

	_selectCard(card) {
		this.selectedCards.push(card)
		card.setSelected(true)
		this._checkForSet()
	}

	_checkForSet() {
		if (this.selectedCards.length === 3) {
			const ok = isSet(this.selectedCards[0], this.selectedCards[1], this.selectedCards[2])
			if (ok)
				getSet.play()
			else
				badSet.play()

			this.selectOn = false
			const self = this
			window.setTimeout(function() {
				self.selectOn = true
				if (ok)
					self._onSet()
				else
					self._deselectAll()
			}, 600)
		}
	}

	_onSet() {
		this.game.table.resetCards(this.selectedCards)
		this._deselectAll()
		this.hintCards.forEach(function(card) { card.setHighlight(false) })
		this.game.onSet()
	}

	_deselectAll() {
		while (this.selectedCards.length > 0)
			this._deselectCard(this.selectedCards[0])
	}

	_deselectCard(card) {
		removeFromArray(this.selectedCards, card)
		card.setSelected(false)
	}

	_contextMenu() {
		if (this.selectedCards.length > 0 && this.selectOn) {
			this._deselectAll()
			return false
		}
		// Let menu show if nothing to deselect.
		else return true
	}
}

function removeFromArray(arr, em) {
	for (let i = 0; i < arr.length; i = i + 1)
		if (arr[i] === em) {
			arr.splice(i, 1)
			return
		}
	throw new Error(`${em} is not in ${arr}`)
}
