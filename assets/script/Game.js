import $ from 'jquery'
import CardSelect from './CardSelect'
import CardTable from './CardTable'
const
	timesUp = new global.Howl({ src: 'sound/timesUp.wav' })
const
	GameTime = 180

module.exports = class Game {
	constructor() {
		this.table = new CardTable()
		this.cardSelect = new CardSelect(this)

		$(window).resize(() => this.resize())
		$('#hint').click(() => this.hint())
		$('#game').click(() => this.clicked())

		// Fix bug in Chrome where it resizes wrong the first time
		window.setTimeout(() => this.resize(), 100)
	}

	isPlaying() {
		return this.state === 'playing'
	}

	clicked() {
		switch (this.state) {
			case 'playing':
				break
			case 'waiting':
				this.reset()
			case 'frozen':
				// Must wait for unfreeze
				break
			default: throw new Error()
		}
	}

	reset() {
		this.resize()
		this.table.reset()
		this.state = 'playing'
		this.setScore(0)
		this.time = GameTime
		this.clock()
	}

	clock() {
		this.time = this.time - 1
		$('#time').text(this.time)
		if (this.time === 0) {
			timesUp.play()
			this.state = 'frozen'
			window.setTimeout(() => this.state = 'waiting', 5000)
		}
		else
			window.setTimeout(() => this.clock(), 1000)
	}

	onSet() {
		this.setScore(this.score + 1)
	}

	setScore(newScore) {
		this.score = newScore
		$('#score').text(this.score)
	}

	resize() {
		const main = $('#main')
		const game = $('#game')
		const width = game.width()
		const height = main.height() - $('#hud').outerHeight()
		game.css('border-radius', (Math.min(width, height) * 0.10) + 'px')
		this.table.resize(width, height)
	}

	hint() {
		this.setScore(this.score - 1)
		this.cardSelect.showHint(this.table.findSet())
	}
}
