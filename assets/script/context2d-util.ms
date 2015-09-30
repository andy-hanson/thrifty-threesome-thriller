import
	msl.math.Number mid

pencil-circle!. |c min-x min-y max-x max-y
	rad = / (Math.min (- max-x min-x) (- max-y min-y)) 2
	center-x = mid min-x max-x
	center-y = mid min-y max-y
	c.moveTo (+ center-x rad) center-y
	c.arc center-x center-y rad 0 (* 2 Math.PI) false

pencil-lines!. !|c width height spacing
	| Draws stripes through the whole rectangle.
	tilt = * width 0.33
	for! y in new Range (+ (neg tilt) 0.5) height spacing
		c.moveTo 0 (+ y tilt)
		c.lineTo width y

pencil-round-rect!. !|c min-x min-y max-x max-y rad
	assert! <? rad (/ (- max-x min-x) 2)
	assert! <? rad (/ (- max-y min-y) 2)

	left = + min-x rad
	up = + min-y rad
	down = - max-y rad
	right = - max-x rad

	c.beginPath()

	c.moveTo left min-y
	c.arc left up rad (* Math.PI 1.5) Math.PI true

	c.lineTo min-x down
	c.arc left down rad Math.PI (/ Math.PI 2) true

	c.lineTo right max-y
	c.arc right down rad (/ Math.PI 2) 0 true

	c.lineTo max-x up
	c.arc right up rad 0 (neg (/ Math.PI 2)) true

	|| Will close shape so we don't need to redo first arc.
	c.lineTo left min-y

	c.closePath()

pencil-square!. |c min-x min-y max-x max-y
	c.moveTo min-x min-y
	c.lineTo max-x min-y
	c.lineTo max-x max-y
	c.lineTo min-x max-y
	c.lineTo min-x min-y
	c.lineTo max-x min-y

pencil-tri!. |c min-x min-y max-x max-y
	center-x = mid min-x max-x
	c.moveTo center-x min-y
	c.lineTo min-x max-y
	c.lineTo max-x max-y
	c.lineTo center-x min-y
	c.lineTo min-x max-y
