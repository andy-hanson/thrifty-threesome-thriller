is-threesome?. \card-1 card-2 card-3
	all? all-attributes \attr
		attribute-ok? card-1.data[attr] card-2.data[attr] card-3.data[attr]

all-attributes = 0..3

attribute-ok? = \a b c
	or (all-same? a b c) (all-different? a b c)

all-same? = \a b c
	and (=? a b) =? b c

all-different? = \a b c
	not or (=? a b) (=? a c) =? b c
