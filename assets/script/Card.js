"use strict"

var $ = require("jquery")

function Card(cell, row, col) {
	this.cell = cell
	this.data = [ 0, 0, 0, 0 ] // Set in CardTable#reset
	this.selected = false
	this.highlighted = false
	this.row = row
	this.col = col
}
module.exports = Card
Card.prototype = {
	toString: function() {
		return this.row + ":" + this.col + "[" + this.data + " ]"
	},

	resize: function(width, height) {
		//$(this.cell).width(width)
		//$(this.cell).height(height)
		this.width = width
		this.height = height
		this.draw()
	},

	minSize: function() { return Math.min(this.width, this.height) },

	shapeId: function () { return this.data[0] },
	colorId: function() { return this.data[1] },
	shadeId: function () { return this.data[2] },
	nShapes: function () { return this.data[3] + 1 },

	randomize: function() {
		for (var i = 0; i < this.data.length; i++)
			this.data[i] = Math.floor(Math.random() * 3)
		this.draw()
	},

	setSelected: function(selected) {
		this.selected = selected
		this.draw()
	},

	setHighlight: function(highlight) {
		this.highlighted = highlight
		this.draw()
	},

	draw: function() {
		$(this.cell).empty().append(this._canvas()) //see carddrawer.js
	},

	_canvas: function() {
		var canvas = document.createElement('canvas')
		canvas.width = this.width
		canvas.height = this.height
		var c = canvas.getContext('2d')

		this._drawBorder(c)

		c.lineWidth = this.minSize() / 24
		c.lineJoin = 'round' //Rounded lines

		var shapeRegions = this._shapeRegions()
		var stripeColor = this._setStrokeAndGetStripeColor(c)
		var shadowOffset = this.minSize() / 48
		c.shadowOffsetX = c.shadowOffsetY = shadowOffset
		c.shadowBlur = shadowOffset / 2
		this._doShade(c, shapeRegions, stripeColor)
		return canvas
	},

	_drawBorder: function(c) {
		c.lineWidth = this.minSize() / 24
		c.shadowOffsetX = c.shadowOffsetY = c.lineWidth
		c.shadowBlur = c.lineWidth/2
		var margin = c.lineWidth*2
		var corner = (this.minSize() - margin * 2) * 0.33 //Corner is rad of rounding
		if (this.selected) {
			//Selected card; highlight it
			c.fillStyle = '#044'
			c.strokeStyle = '#f80'
			c.shadowColor= 'rgba(255,128,0,0.5)'
		}
		else if (this.highlighted) {
			c.fillStyle = '#202'
			c.strokeStyle = '#80f'
			c.shadowColor = 'rgba(128,0,255,0.5)'
		} else { //Normal card
			var g = c.createLinearGradient(0, 0, this.width, this.height)
			g.addColorStop(0,  'rgba(255, 255, 128, 0.2)')
			g.addColorStop(1,  'rgba(128, 255, 255, 0.2)')
			c.fillStyle = g
			c.strokeStyle = '#000'
			c.shadowColor= 'rgba(0,0,0,0.5)'
		}
		c.beginPath()
		pencilRoundRect(c, margin, margin, this.width - margin, this.height - margin, corner)
		c.closePath()
		c.stroke()
		c.fill() //Fill AFTER stroke so it will show up over stroke shadow.
	},

	_shapeRegions: function() {
		//var minx = tr[0], miny = tr[1], maxx = tr[2], maxy = tr[3]


		//Margin for shapes, not card border.
		var minSize = this.minSize()
		var margin = minSize * 0.10
		var centerX = this.width / 2, centerY = this.height / 2
		switch (this.nShapes()) {
			case 1:
				var size = (minSize - margin * 2) * 0.8 //A little smaller to look better.
				return [ {
					minx: centerX - size/2,
					miny: centerY - size/2,
					maxx: centerX + size/2,
					maxy: centerY + size/2
				} ]
			case 2:
				//Remember, is margin from top and bottom and btwMargin between them.
				var wide = this.width > this.height
				var maxSize = wide ? Math.min(this.width * 2, this.height) : Math.min(this.width, this.height * 2)
				var btwMargin = maxSize * 0.10
				var size = (maxSize - 2 * margin - btwMargin) / 2 //The size of one shape.
				return wide ? [
					{
						minx: centerX - btwMargin/2 - size,
						miny: centerY - size/2,
						maxx: centerX - btwMargin/2,
						maxy: centerY + size/2
					},
					{
						minx: centerX + btwMargin/2,
						miny: centerY - size/2,
						maxx: centerX + btwMargin/2 + size,
						maxy: centerY + size/2
					}
				] : [
					{
						minx: centerX - size/2,
						miny: centerY - btwMargin/2 - size,
						maxx: centerX + size/2,
						maxy: centerY - btwMargin/2
					},
					{
						minx: centerX - size/2,
						miny: centerY + btwMargin/2,
						maxx: centerX + size/2,
						maxy: centerY + btwMargin/2 + size
					}
				]
			case 3:
				var size = (minSize - margin * 2) * 0.33
				var rad = size * .80
				centerY += rad * 0.20 //Moved a little down for balance.
				var points = [
					[centerX, centerY - rad],
					[centerX - Math.sqrt(3)/2 * rad, centerY + rad/2],
					[centerX + Math.sqrt(3)/2 * rad, centerY + rad/2]
				]
				//points is an array of the centers; now expand them into shapes.
				var shapeRegions = []
				var halfSize = size / 2
				for (var i = 0; i < points.length; i++) {
					var p = points[i]
					shapeRegions.push({
						minx: p[0] - halfSize,
						miny: p[1] - halfSize,
						maxx: p[0] + halfSize,
						maxy: p[1] + halfSize
					})
				}
				return shapeRegions
			default: throw new Error('Unexpected nShapes')
		}
	},

	_setStrokeAndGetStripeColor: function(c) {
		var shadowAlpha = '0.2'
		switch (this.colorId()) {
			case 0: // Orange
				c.strokeStyle = c.fillStyle = '#ea0'
				c.shadowColor = 'rgba(255, 255, 0, '+shadowAlpha+')'
				return '#ff8'
			case 1: // Green
				c.strokeStyle = c.fillStyle = '#280'
				c.shadowColor = 'rgba(0, 255, 0, '+shadowAlpha+')'
				return '#8f8'
			case 2: // Pink
				c.strokeStyle = c.fillStyle = '#a0a'
				c.shadowColor = 'rgba(255, 0, 255, '+shadowAlpha+')'
				return '#f8f'
			default: throw new Error('Weird colorId')
		}
	},

	_doShade: function(c, shapeRegions, stripeColor) {
		this._pencil(c, shapeRegions)
		switch (this.shadeId()) { //SHADING
			case 0: // EMPTY
				c.stroke()
				break
			case 1: // STRIPED
				c.save() //Save unclipped state.
				c.clip() //Restricts region to the shape.
				var stripeWidth = this.minSize() / 32
				c.lineWidth = stripeWidth
				c.strokeStyle = stripeColor
				pencilLines(c, this.width, this.height, stripeWidth * 2)
				c.stroke() //Draw the stripes
				c.restore() //Undo clipping and different style and line width.
				this._pencil(c, shapeRegions)
				c.stroke() // Draw outline.
				break
			case 2: // FILLED
				c.fill()
				break
			default: throw new Error('Weird card data 2')
		}
	},

	_pencil: function(c, shapeRegions) {
		c.globalCompositeOperation = 'source-over'
		c.beginPath()
		for (var i = 0; i < shapeRegions.length; i++) {
			var _ = shapeRegions[i]
			switch (this.shapeId()) {
				case 0: pencilTri(c, _.minx, _.miny, _.maxx, _.maxy); break
				case 1: pencilSquare(c, _.minx, _.miny, _.maxx, _.maxy); break
				case 2: pencilCircle(c, _.minx, _.miny, _.maxx, _.maxy); break
				default: throw new Error("Unexpected shapeId")
			}
		}
		c.closePath()
	}
}

// TODO
var stripeLineWidth = 4 //Stripe is for in-between empty and full shading

//Drawing functions
function pencilTri(c, minx, miny, maxx, maxy) {
	c.moveTo((minx+maxx) / 2, miny) //Top
	c.lineTo(minx, maxy) //Bottom-left corner
	c.lineTo(maxx, maxy) //Bottom-right corner
	c.lineTo((minx + maxx) / 2, miny) //Back to top
	c.lineTo(minx, maxy) //Back to bottom-left - makes fancy line edges work right
}
function pencilSquare(c, minx, miny, maxx, maxy) {
	c.moveTo(minx, miny)
	c.lineTo(maxx, miny)
	c.lineTo(maxx, maxy)
	c.lineTo(minx, maxy)
	c.lineTo(minx, miny) //Back to start
	c.lineTo(maxx, miny) //Back to right - makes fancy line edges work right
}
function pencilCircle(c, minx, miny, maxx, maxy) {
	var rad = Math.min(maxx - minx, maxy - miny) / 2
	var center = [ (minx + maxx) / 2, (miny + maxy) / 2 ]
	c.moveTo(center[0] + rad, center[1]) // The right side of the circle.
	c.arc(center[0], center[1], rad, 0, Math.PI * 2, false)
}

//Draws stripes through the whole rectangle.
function pencilLines(c, width, height, spacing) {
	var tilt = width * 0.33
	for (var y = -tilt + 0.5; y < height; y += spacing) {
		c.moveTo(0, y + tilt)
		c.lineTo(width, y)
	}
}

function pencilRoundRect(c, minx, miny, maxx, maxy, rad) {
	//Pre: rad < width/2
	c.moveTo(minx + rad, miny)
	c.arc(minx + rad, miny + rad, rad, 3*Math.PI/2, Math.PI, true)
	c.lineTo(minx, maxy - rad)
	c.arc(minx + rad, maxy - rad, rad, Math.PI, Math.PI/2, true)
	c.lineTo(maxx - rad, maxy)
	c.arc(maxx - rad,maxy - rad, rad, Math.PI/2, 0, true)
	c.lineTo(maxx, miny + rad)
	c.arc(maxx - rad, miny + rad, rad, 0, -Math.PI/2, true)
	c.lineTo(minx + rad, miny) //Will close shape so don't need to redo first arc
}
