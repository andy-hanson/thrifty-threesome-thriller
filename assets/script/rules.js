"use strict"

//Given 3 cards, tell whether they form a set.
module.exports = {
	isSet: function(c1, c2, c3) {
		var d1 = c1.data, d2 = c2.data, d3 = c3.data
		for (var attr = 0; attr < 4; attr++) // For each attribute the cards can have:
			// Must be all same or all different
			if (!attrOk(d1[attr], d2[attr], d3[attr]))
				return false
		return true
	},

	errorDescription: function(c1, c2, c3) {
		var d1 = c1.data, d2 = c2.data, d3 = c3.data
		var s = ''
		for (var attr = 0; attr < 4; attr++) { //For each attribute the cards can have
			if (!attrOk(d1[attr], d2[attr], d3[attr])) {
				if (s == '')
					s = ['shape', 'color', 'shading', 'number'][attr]
				else
					s += ', ' + ['shape', 'color', 'shading', 'number'][attr]
			}
		}
		return s
	}
}

function attrOk(a1, a2, a3) {
	return eq3(a1, a2, a3) || neq3(a1, a2, a3)
}
function eq3(a, b, c) {
	return a === b && b === c
}
function neq3(a, b, c) {
	return a !== b && a !== c && b !== c
}
