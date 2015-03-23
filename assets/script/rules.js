// Given 3 cards, tell whether they form a set.
export function isSet(c1, c2, c3) {
	const d1 = c1.data, d2 = c2.data, d3 = c3.data
	// For each attribute the cards can have:
	for (let attr = 0; attr < 4; attr = attr + 1)
		// Must be all same or all different.
		if (!attrOk(d1[attr], d2[attr], d3[attr]))
			return false
	return true
}

export function errorDescription(c1, c2, c3) {
	const d1 = c1.data, d2 = c2.data, d3 = c3.data
	let s = ''
	for (let attr = 0; attr < 4; attr = attr + 1)
		if (!attrOk(d1[attr], d2[attr], d3[attr]))
			if (s === '')
				s = ['shape', 'color', 'shading', 'number'][attr]
			else
				s = s + ', ' + ['shape', 'color', 'shading', 'number'][attr]
	return s
}

const
	attrOk = (a1, a2, a3) => eq3(a1, a2, a3) || neq3(a1, a2, a3),
	eq3 = (a, b, c) => a === b && b === c,
	neq3 = (a, b, c) => a !== b && a !== c && b !== c

