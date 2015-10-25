todo mason-dom package

import
	global document

elem. \elem-name
	document.getElementById elem-name

empty-node!. !\node
	todo SYNTAX while
	for
		unless node.firstChild
			break
		node.removeChild node.firstChild

set-content!. !\node content
	empty-node! node
	node.appendChild content

hidden?. \node
	=? node.style.display 'none

hide!. !\node
	node.style.display := 'none

new-node. \node-type
	document.createElement node-type

toggle-visibility!. \node
	with hidden? node
		node.style.display := cond _ 'block 'none

on. \event-name node action
	node.addEventListener event-name action
