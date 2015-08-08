all-attributes = new Range 0 4

attribute-ok? = |a b c
	or (all-same? a b c) (all-different? a b c)
all-same? = |a b c
	and (=? a b) (=? b c)
all-different? = |a b c
	not or (=? a b) (=? a c) (=? b c)

|card-1 card-2 card-3
	data-1 = card-1.data
	data-2 = card-2.data
	data-3 = card-3.data

	all? all-attributes |attr
		attribute-ok? data-1[attr] data-2[attr] data-3[attr]
