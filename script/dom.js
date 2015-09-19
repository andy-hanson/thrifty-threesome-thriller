"use strict";
define(["msl/private/boot","exports","msl/compare"],(_boot,exports,compare_0)=>{
	_ms.getModule(_boot);
	const _$0=_ms.getModule(compare_0),_61_63=_ms.get(_$0,"=?");
	const elem=exports.elem=function elem(elem_45name){
		return document.getElementById(elem_45name)
	};
	const empty_45node_33=exports["empty-node!"]=function empty_45node_33(node){
		for(;;){
			if(! node.firstChild){
				break
			};
			node.removeChild(node.firstChild)
		}
	};
	const set_45content_33=exports["set-content!"]=function set_45content_33(node,content){
		empty_45node_33(node);
		node.appendChild(content)
	};
	const hidden_63=exports["hidden?"]=function hidden_63(node){
		return _61_63(node.style.display,`none`)
	};
	const hide_33=exports["hide!"]=function hide_33(node){
		node.style.display=`none`
	};
	const new_45node=exports["new-node"]=function new_45node(node_45type){
		return document.createElement(node_45type)
	};
	const toggle_45visibility_33=exports["toggle-visibility!"]=function toggle_45visibility_33(node){
		return (_=>{
			node.style.display=(_?`block`:`none`);
			return _
		})(hidden_63(node))
	};
	const on=exports.on=function on(event_45name,node,action){
		return node.addEventListener(event_45name,action)
	};
	const name=exports.name=`dom`;
	return exports
})
//# sourceMappingURL=dom.js.map