import
	msl.@.Seq.Array fill
	msl.math.random random-int-upto
	.context2d-util pencil-circle! pencil-lines! pencil-square! pencil-round-rect! pencil-tri!
	.dom new-node set-content!

Card. class
	construct .cell
		| Set in .randomize!
		.data := [0 0 0 0]
		.selected? := false
		.highlighted? := false

	resize! !\width height
		.width := width
		.height := height
		.draw!()

	min-size \
		Math.min .width .height

	shape-id \
		.data[0]
	color-id \
		.data[1]
	shade-id \
		.data[2]
	n-shapes \
		+ 1 .data[3]

	randomize! !\
		.data := fill 4 \
			random-int-upto 3
		.draw!()

	set-selected! !\selected?
		.selected? := selected?
		.draw!()

	set-highlight! !\highlighted?
		.highlighted? := highlighted?
		.draw!()

	draw! !\
		set-content! .cell .canvas()

	my canvas \
		with new-node 'canvas
			_.width := .width
			_.height := .height

			c = _.getContext "2d"

			.draw-border! c

			c.lineWidth := / .min-size() 24
			c.lineJoin := 'round

			stripe-color = set-stroke-and-get-stripe-color! c .color-id()
			shadow-offset = / .min-size() 48

			c.shadowOffsetX := shadow-offset
			c.shadowOffsetY := shadow-offset
			c.shadowBlur := / shadow-offset 2

			.-do-shade! c .shape-regions() stripe-color

	my draw-border! !\c
		line-width = / .min-size() 24
		c.lineWidth := line-width
		c.shadowOffsetX := line-width
		c.shadowOffsetY := line-width
		c.shadowBlur := / line-width 2
		margin = * 2 line-width
		|| radius of rounding
		corner = * 0.33 - .min-size() * 2 margin

		case
			.selected?
				c.fillStyle := "\#044"
				c.strokeStyle := "\#f80"
				c.shadowColor := "rgba(255,128,0,0.5)"
			.highlighted?
				c.fillStyle := "\#202"
				c.strokeStyle := "\#80f"
				c.shadowColor := "rgba(128,0,255,0.5)"
			else
				c.fillStyle := with c.createLinearGradient 0 0 .width .height
					_.addColorStop 0 "rgba(255, 255, 128, 0.2)"
					_.addColorStop 1 "rgba(128, 255, 255, 0.2)"
				c.strokeStyle := "\#000"
				c.shadowColor := "rgba(0,0,0,0.5)"

		pencil-round-rect! c margin margin (- .width margin) (- .height margin) corner
		c.stroke()
		|| Fill after stroke so it will show up over stroke shadow.
		c.fill()

	my shape-regions \
		| Margin for shapes, not card border.
		min-size = .min-size()
		margin = * min-size 0.1
		center-x = / .width 2
		center-y = / .height 2

		switch .n-shapes()
			1
				size = * min-size 0.32
				.
					min-x. - center-x size
					min-y. - center-y size
					max-x. + center-x size
					max-y. + center-y size
			2
				wide? = <? .height .width
				max-size = case
					wide?
						Math.min .height * 2 .width
					else
						Math.min .width * 2 .height
				|| Space in between the two shapes.
				between-margin = * max-size 0.1

				total-margin = + between-margin * 2 margin
				|| The size of one shape.
				size = / (- max-size total-margin) 2

				dist-from-center = + size / between-margin 2
				half-size = / size 2
				half-between = / between-margin 2

				case
					wide?
						.
							min-x. - center-x dist-from-center
							min-y. - center-y half-size
							max-x. - center-x half-between
							max-y. + center-y half-size
						.
							min-x. + center-x half-between
							min-y. - center-y half-size
							max-x. + center-x dist-from-center
							max-y. + center-y half-size
					else
						.
							min-x. - center-x half-size
							min-y. - center-y dist-from-center
							max-x. + center-x half-size
							max-y. - center-y half-between
						.
							min-x. - center-x half-size
							min-y. + center-y half-between
							max-x. + center-x half-size
							max-y. + center-y dist-from-center
			3
				size = * 0.33 - min-size * 2 margin
				|| Centers of shapes are this far from (center-x, middle-y)
				rad = * size 0.8
				|| Moved a little down for balance.
				middle-y = + center-y * rad 0.2
				half-rad = / rad 2
				x-rad = * half-rad (Math.sqrt 3)
				|| Array of centers
				points =
					.
						x. center-x
						y. - middle-y rad
					.
						x. - center-x x-rad
						y. + middle-y half-rad
					.
						x. + center-x x-rad
						y. + middle-y half-rad

				half-size = / size 2
				@for points
					todo SYNTAX pattern in @for: `@for {x y} of points`
					{x y} = _
					.
						min-x. - x half-size
						min-y. - y half-size
						max-x. + x half-size
						max-y. + y half-size

	-do-shade! !\c shape-regions stripe-color
		pencil! c shape-regions .shape-id()
		switch .shade-id()
			0
				c.stroke()
			1
				c.save()
				c.clip()
				stripe-width = / .min-size() 32
				c.lineWidth := stripe-width
				c.stroke-style := stripe-color
				pencil-lines! c .width .height * 2 stripe-width
				c.stroke()
				c.restore()
				pencil! c shape-regions .shape-id()
				c.stroke()
			2
				c.fill()

set-stroke-and-get-stripe-color! = \c color-id
	shadow-alpha = 0.2
	switch color-id
		0
			|| Orange
			c.strokeStyle := "\#ea0"
			c.fillStyle := "\#ea0"
			c.shadowColor := "rgba(255, 255, 0, #shadow-alpha)"
			"\#ff8"
		1
			|| Green
			c.strokeStyle := "\#280"
			c.fillStyle := "\#280"
			c.shadowColor := "rgba(0, 255, 0, #shadow-alpha)"
			"\#8f8"
		2
			|| Pink
			c.strokeStyle := "\#a0a"
			c.fillStyle := "\#a0a"
			c.shadowColor := "rgba(255, 0, 255, #shadow-alpha)"
			"\#f8f"


pencil! = \c shape-regions shape-id
	c.globalCompositeOperation := 'source-over
	c.beginPath()
	for shape-regions
		switch shape-id
			0
				pencil-tri! c _.min-x _.min-y _.max-x _.max-y
			1
				pencil-square! c _.min-x _.min-y _.max-x _.max-y
			2
				pencil-circle! c _.min-x _.min-y _.max-x _.max-y
	c.closePath()
