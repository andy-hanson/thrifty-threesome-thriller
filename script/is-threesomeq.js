"use strict";
define(["msl/private/boot","exports","msl/at/Range","msl/compare","msl/at/at"],(_boot,exports,Range_0,compare_1,_64_2)=>{
	_ms.getModule(_boot);
	const Range=_ms.getDefaultExport(Range_0),_$0=_ms.getModule(compare_1),_61_63=_ms.get(_$0,"=?"),_$1=_ms.getModule(_64_2),all_63=_ms.get(_$1,"all?");
	const all_45attributes=new (Range)(0,4);
	const attribute_45ok_63=function attribute_45ok_63(a,b,c){
		return (all_45same_63(a,b,c)||all_45different_63(a,b,c))
	};
	const all_45same_63=function all_45same_63(a,b,c){
		return (_61_63(a,b)&&_61_63(b,c))
	};
	const all_45different_63=function all_45different_63(a,b,c){
		return ! ((_61_63(a,b)||_61_63(a,c))||_61_63(b,c))
	};
	const is_45threesome_63=exports.default=function is_45threesome_63(card_451,card_452,card_453){
		const data_451=card_451.data;
		const data_452=card_452.data;
		const data_453=card_453.data;
		return all_63(all_45attributes,attr=>{
			return attribute_45ok_63(_ms.sub(data_451,attr),_ms.sub(data_452,attr),_ms.sub(data_453,attr))
		})
	};
	const name=exports.name=`is-threesome?`;
	return exports
})
//# sourceMappingURL=is-threesomeq.js.map