import $ from 'jquery'
import assert from 'assert'

export default class Card {
	constructor(cell, row, col) {
		this.cell = cell
		// Set in CardTable#reset
		this.data = [ 0, 0, 0, 0 ]
		this.selected = false
		this.highlighted = false
		this.row = row
		this.col = col
	}

	resize(width, height) {
		this.width = width
		this.height = height
		this.draw()
	}

	minSize() { return Math.min(this.width, this.height) }

	shapeId() { return this.data[0] }
	colorId() { return this.data[1] }
	shadeId() { return this.data[2] }
	nShapes() { return this.data[3] + 1 }

	randomize() {
		for (let i = 0; i < this.data.length; i = i + 1)
			this.data[i] = Math.floor(Math.random() * 3)
		this.draw()
	}

	setSelected(selected) {
		this.selected = selected
		this.draw()
	}

	setHighlight(highlight) {
		this.highlighted = highlight
		this.draw()
	}

	draw() {
		$(this.cell).empty().append(this._canvas())
	}

	_canvas() {
		const canvas = document.createElement('canvas')
		canvas.width = this.width
		canvas.height = this.height
		const c = canvas.getContext('2d')

		this._drawBorder(c)

		c.lineWidth = this.minSize() / 24
		// Rounded lines
		c.lineJoin = 'round'

		const shapeRegions = this._shapeRegions()
		const stripeColor = this._setStrokeAndGetStripeColor(c)
		const shadowOffset = this.minSize() / 48
		c.shadowOffsetX = c.shadowOffsetY = shadowOffset
		c.shadowBlur = shadowOffset / 2
		this._doShade(c, shapeRegions, stripeColor)
		return canvas
	}

	_drawBorder(c) {
		c.lineWidth = this.minSize() / 24
		c.shadowOffsetX = c.shadowOffsetY = c.lineWidth
		c.shadowBlur = c.lineWidth / 2
		const margin = c.lineWidth * 2
		// Corner is rad of rounding
		const corner = (this.minSize() - margin * 2) * 0.33
		if (this.selected) {
			// Selected card; highlight it
			c.fillStyle = '#044'
			c.strokeStyle = '#f80'
			c.shadowColor = 'rgba(255,128,0,0.5)'
		}
		else if (this.highlighted) {
			c.fillStyle = '#202'
			c.strokeStyle = '#80f'
			c.shadowColor = 'rgba(128,0,255,0.5)'
		} else {
			// Normal card
			const g = c.createLinearGradient(0, 0, this.width, this.height)
			g.addColorStop(0, 'rgba(255, 255, 128, 0.2)')
			g.addColorStop(1, 'rgba(128, 255, 255, 0.2)')
			c.fillStyle = g
			c.strokeStyle = '#000'
			c.shadowColor = 'rgba(0,0,0,0.5)'
		}
		pencilRoundRect(c, margin, margin, this.width - margin, this.height - margin, corner)
		c.stroke()
		// Fill after stroke so it will show up over stroke shadow.
		c.fill()
	}

	_shapeRegions() {
		// Margin for shapes, not card border.
		const minSize = this.minSize()
		const margin = minSize * 0.10
		const centerX = this.width / 2, centerY = this.height / 2
		switch (this.nShapes()) {
			case 1: {
				const size = (minSize - margin * 2) * 0.8
				// A little smaller to look better.
				return [ {
					minx: centerX - size / 2,
					miny: centerY - size / 2,
					maxx: centerX + size / 2,
					maxy: centerY + size / 2
				} ]
			}
			case 2: {
				// Remember, is margin from top and bottom and btwMargin between them.
				const wide = this.width > this.height
				const maxSize = wide ?
					Math.min(this.width * 2, this.height) :
					Math.min(this.width, this.height * 2)
				const btwMargin = maxSize * 0.10
				// The size of one shape.
				const size = (maxSize - 2 * margin - btwMargin) / 2
				return wide ? [
					{
						minx: centerX - btwMargin / 2 - size,
						miny: centerY - size / 2,
						maxx: centerX - btwMargin / 2,
						maxy: centerY + size / 2
					},
					{
						minx: centerX + btwMargin / 2,
						miny: centerY - size / 2,
						maxx: centerX + btwMargin / 2 + size,
						maxy: centerY + size / 2
					}
				] : [
					{
						minx: centerX - size / 2,
						miny: centerY - btwMargin / 2 - size,
						maxx: centerX + size / 2,
						maxy: centerY - btwMargin / 2
					},
					{
						minx: centerX - size / 2,
						miny: centerY + btwMargin / 2,
						maxx: centerX + size / 2,
						maxy: centerY + btwMargin / 2 + size
					}
				]
			}
			case 3: {
				const size = (minSize - margin * 2) * 0.33
				const rad = size * 0.80
				// Moved a little down for balance.
				const middleY = centerY + rad * 0.20
				const points = [
					[centerX, middleY - rad],
					[centerX - Math.sqrt(3) / 2 * rad, middleY + rad / 2],
					[centerX + Math.sqrt(3) / 2 * rad, middleY + rad / 2]
				]
				// points is an array of the centers; now expand them into shapes.
				const shapeRegions = []
				const halfSize = size / 2
				for (let i = 0; i < points.length; i = i + 1) {
					const p = points[i]
					shapeRegions.push({
						minx: p[0] - halfSize,
						miny: p[1] - halfSize,
						maxx: p[0] + halfSize,
						maxy: p[1] + halfSize
					})
				}
				return shapeRegions
			}
			default: throw new Error('Unexpected nShapes')
		}
	}

	_setStrokeAndGetStripeColor(c) {
		const shadowAlpha = '0.2'
		switch (this.colorId()) {
			case 0:
				// Orange
				c.strokeStyle = c.fillStyle = '#ea0'
				c.shadowColor = 'rgba(255, 255, 0, ' + shadowAlpha + ')'
				return '#ff8'
			case 1:
				// Green
				c.strokeStyle = c.fillStyle = '#280'
				c.shadowColor = 'rgba(0, 255, 0, ' + shadowAlpha + ')'
				return '#8f8'
			case 2:
				// Pink
				c.strokeStyle = c.fillStyle = '#a0a'
				c.shadowColor = 'rgba(255, 0, 255, ' + shadowAlpha + ')'
				return '#f8f'
			default: throw new Error('Weird colorId')
		}
	}

	_doShade(c, shapeRegions, stripeColor) {
		this._pencil(c, shapeRegions)
		switch (this.shadeId()) {
			case 0:
				c.stroke()
				break
			case 1:
				c.save()
				c.clip()
				const stripeWidth = this.minSize() / 32
				c.lineWidth = stripeWidth
				c.strokeStyle = stripeColor
				pencilLines(c, this.width, this.height, stripeWidth * 2)
				c.stroke()
				c.restore()
				this._pencil(c, shapeRegions)
				c.stroke()
				break
			case 2:
				c.fill()
				break
			default: throw new Error('Weird card data 2')
		}
	}

	_pencil(c, shapeRegions) {
		c.globalCompositeOperation = 'source-over'
		c.beginPath()
		for (let i = 0; i < shapeRegions.length; i = i + 1) {
			const _ = shapeRegions[i]
			switch (this.shapeId()) {
				case 0: pencilTri(c, _.minx, _.miny, _.maxx, _.maxy); break
				case 1: pencilSquare(c, _.minx, _.miny, _.maxx, _.maxy); break
				case 2: pencilCircle(c, _.minx, _.miny, _.maxx, _.maxy); break
				default: throw new Error('Unexpected shapeId')
			}
		}
		c.closePath()
	}
}

function pencilTri(c, minx, miny, maxx, maxy) {
	const centerX = (minx + maxx) / 2
	c.moveTo(centerX, miny)
	c.lineTo(minx, maxy)
	c.lineTo(maxx, maxy)
	c.lineTo(centerX, miny)
	c.lineTo(minx, maxy)
}
function pencilSquare(c, minx, miny, maxx, maxy) {
	c.moveTo(minx, miny)
	c.lineTo(maxx, miny)
	c.lineTo(maxx, maxy)
	c.lineTo(minx, maxy)
	c.lineTo(minx, miny)
	c.lineTo(maxx, miny)
}
function pencilCircle(c, minx, miny, maxx, maxy) {
	const rad = Math.min(maxx - minx, maxy - miny) / 2
	const center = [ (minx + maxx) / 2, (miny + maxy) / 2 ]
	c.moveTo(center[0] + rad, center[1])
	c.arc(center[0], center[1], rad, 0, Math.PI * 2, false)
}

// Draws stripes through the whole rectangle.
function pencilLines(c, width, height, spacing) {
	const tilt = width * 0.33
	for (let y = -tilt + 0.5; y < height; y = y + spacing) {
		c.moveTo(0, y + tilt)
		c.lineTo(width, y)
	}
}

function pencilRoundRect(c, minx, miny, maxx, maxy, rad) {
	assert(rad < (maxx - minx) / 2)
	assert(rad < (maxy - miny) / 2)
	c.beginPath()
	c.moveTo(minx + rad, miny)
	c.arc(minx + rad, miny + rad, rad, Math.PI * 3 / 2, Math.PI, true)
	c.lineTo(minx, maxy - rad)
	c.arc(minx + rad, maxy - rad, rad, Math.PI, Math.PI / 2, true)
	c.lineTo(maxx - rad, maxy)
	c.arc(maxx - rad, maxy - rad, rad, Math.PI / 2, 0, true)
	c.lineTo(maxx, miny + rad)
	c.arc(maxx - rad, miny + rad, rad, 0, -Math.PI / 2, true)
	// Will close shape so we don't need to redo first arc.
	c.lineTo(minx + rad, miny)
	c.closePath()
}
