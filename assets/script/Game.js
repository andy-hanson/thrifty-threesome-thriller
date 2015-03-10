var
	$ = require("jquery"),
	CardTable = require("./CardTable"),
	CardSelect = require("./CardSelect")
var
	timesUp = new Audio("sound/timesUp.wav")

function Game() {
	this.table = new CardTable()
	this.cardSelect = new CardSelect(this)

	var self = this
	$(window).resize(function() { self.resize() })
	$("#hint").click(function() { self.hint() })
	$("#game").click(function() { self.clicked() })

	var cardSelect = this.cardSelect
	this.reset()
	// Fix bug in Chrome where it resizes wrong the first time
	window.setTimeout(function() { self.resize() }, 1)
}
module.exports = Game
Game.prototype = {
	GAME_TIME: 120,

	isPlaying: function() {
		return this.state === "playing"
	},

	clicked: function() {
		switch (this.state) {
			case "playing":
				break
			case "waiting":
				this.reset()
			case "frozen":
				break // Must wait for unfreeze
			default: throw new Error()
		}
	},

	reset: function() {
		this.resize()
		this.table.reset()
		this.state = "playing"
		this.setScore(0)
		this.time = this.GAME_TIME
		this.clock()
	},

	clock: function() {
		this.time -= 1
		$('#time').text(this.time)
		var self = this
		if (this.time == 0) {
			//Game over!
			timesUp.play()
			this.state = "frozen"
			window.setTimeout(function() { self.state = "waiting" }, 5000)
		}
		else
			window.setTimeout(function() { self.clock() }, 1000)
	},

	onSet: function() {
		this.setScore(this.score + 1)
	},

	setScore: function(newScore) {
		this.score = newScore
		$("#score").text(this.score)
	},

	resize: function() {
		var g = $("#game")
		this.table.resize(g.width(), g.height())
	},

	hint: function() {
		this.setScore(this.score - 1)
		this.cardSelect.showHint(this.table.findSet())
	}
}
