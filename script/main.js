"use strict";
define(["msl/private/boot","exports","howler","./dom","./Game"],(_boot,exports,howler_0,dom_1,Game_2)=>{
	_ms.getModule(_boot);
	const _$0=_ms.getModule(howler_0),Howler=_ms.get(_$0,"Howler"),_$1=_ms.getModule(dom_1),elem=_ms.get(_$1,"elem"),hide_33=_ms.get(_$1,"hide!"),toggle_45visibility_33=_ms.get(_$1,"toggle-visibility!"),on=_ms.get(_$1,"on"),Game=_ms.getDefaultExport(Game_2);
	new (Game)()["reset!"]();
	const about=elem(`about`);
	hide_33(about);
	on(`click`,elem(`help`),()=>{
		if(toggle_45visibility_33(about)){
			about.scrollIntoView()
		}
	});
	let muted=false;
	const main=exports.default=on(`click`,elem(`mute`),function(){
		const _this=this;
		muted=! muted;
		Howler.mute(muted);
		_this.className=`fa fa-volume-${(muted?`off`:`up`)}`
	});
	const name=exports.name=`main`;
	return exports
})
//# sourceMappingURL=main.js.map