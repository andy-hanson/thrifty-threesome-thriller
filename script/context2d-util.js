"use strict";
define(["msl/private/boot","exports","msl/math/Number","msl/math/methods","msl/at/Range","msl/math/Number","msl/compare"],(_boot,exports,Number_0,methods_1,Range_2,Number_3,compare_4)=>{
	_ms.getModule(_boot);
	const _$0=_ms.getModule(Number_0),mid=_ms.get(_$0,"mid"),_$1=_ms.getModule(methods_1),_47=_ms.get(_$1,"/"),_45=_ms.get(_$1,"-"),_43=_ms.get(_$1,"+"),_42=_ms.get(_$1,"*"),Range=_ms.getDefaultExport(Range_2),_$2=_ms.getModule(Number_3),neg=_ms.get(_$2,"neg"),_$3=_ms.getModule(compare_4),_60_63=_ms.get(_$3,"<?");
	const pencil_45circle_33=exports["pencil-circle!"]=function pencil_45circle_33(c,min_45x,min_45y,max_45x,max_45y){
		const rad=_47(Math.min(_45(max_45x,min_45x),_45(max_45y,min_45y)),2);
		const center_45x=mid(min_45x,max_45x);
		const center_45y=mid(min_45y,max_45y);
		c.moveTo(_43(center_45x,rad),center_45y);
		return c.arc(center_45x,center_45y,rad,0,_42(2,Math.PI),false)
	};
	const pencil_45lines_33=exports["pencil-lines!"]=function pencil_45lines_33(c,width,height,spacing){
		const tilt=_42(width,0.33);
		for(let y of new (Range)(_43(neg(tilt),0.5),height,spacing)){
			c.moveTo(0,_43(y,tilt));
			c.lineTo(width,y)
		}
	};
	const pencil_45round_45rect_33=exports["pencil-round-rect!"]=function pencil_45round_45rect_33(c,min_45x,min_45y,max_45x,max_45y,rad){
		_ms.assert(_60_63,rad,_47(_45(max_45x,min_45x),2));
		_ms.assert(_60_63,rad,_47(_45(max_45y,min_45y),2));
		const left=_43(min_45x,rad);
		const up=_43(min_45y,rad);
		const down=_45(max_45y,rad);
		const right=_45(max_45x,rad);
		c.beginPath();
		c.moveTo(left,min_45y);
		c.arc(left,up,rad,_42(Math.PI,1.5),Math.PI,true);
		c.lineTo(min_45x,down);
		c.arc(left,down,rad,Math.PI,_47(Math.PI,2),true);
		c.lineTo(right,max_45y);
		c.arc(right,down,rad,_47(Math.PI,2),0,true);
		c.lineTo(max_45x,up);
		c.arc(right,up,rad,0,neg(_47(Math.PI,2)),true);
		c.lineTo(left,min_45y);
		c.closePath()
	};
	const pencil_45square_33=exports["pencil-square!"]=function pencil_45square_33(c,min_45x,min_45y,max_45x,max_45y){
		c.moveTo(min_45x,min_45y);
		c.lineTo(max_45x,min_45y);
		c.lineTo(max_45x,max_45y);
		c.lineTo(min_45x,max_45y);
		c.lineTo(min_45x,min_45y);
		return c.lineTo(max_45x,min_45y)
	};
	const pencil_45tri_33=exports["pencil-tri!"]=function pencil_45tri_33(c,min_45x,min_45y,max_45x,max_45y){
		const center_45x=mid(min_45x,max_45x);
		c.moveTo(center_45x,min_45y);
		c.lineTo(min_45x,max_45y);
		c.lineTo(max_45x,max_45y);
		c.lineTo(center_45x,min_45y);
		return c.lineTo(min_45x,max_45y)
	};
	const name=exports.name=`context2d-util`;
	return exports
})
//# sourceMappingURL=context2d-util.js.map