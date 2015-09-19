"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../Type/Kind","../../Type/Method","../at-Type","./Map","./Id-Map","./Hash-Map"],(exports,Kind_0,Method_1,_64_45Type_2,Map_3,Id_45Map_4,Hash_45Map_5)=>{
	exports._get=_ms.lazy(()=>{
		const Kind=_ms.getDefaultExport(Kind_0),_$0=_ms.getModule(Kind_0),kind_33=_ms.get(_$0,"kind!"),self_45kind_33=_ms.get(_$0,"self-kind!"),_$1=_ms.getModule(Method_1),impl_33=_ms.get(_$1,"impl!"),self_45impl_33=_ms.get(_$1,"self-impl!"),_64_45Type=_ms.getDefaultExport(_64_45Type_2),_$2=_ms.getModule(_64_45Type_2),empty=_ms.get(_$2,"empty"),from_45stream=_ms.get(_$2,"from-stream"),Map=_ms.getDefaultExport(Map_3),_$3=_ms.getModule(Map_3),assoc_33=_ms.get(_$3,"assoc!"),Id_45Map=_ms.lazy(()=>_ms.getDefaultExport(Id_45Map_4)),Hash_45Map=_ms.lazy(()=>_ms.getDefaultExport(Hash_45Map_5));
		const Map_45Type=exports.default=new (Kind)((()=>{
			const built={};
			built[`name`]="Map-Type";
			const doc=built.doc=`Any sub-type of Map.`;
			return built
		})());
		self_45kind_33(Map,Map_45Type);
		self_45impl_33(empty,Map,()=>{
			return empty(_ms.unlazy(Id_45Map))
		});
		kind_33(Map_45Type,_64_45Type);
		impl_33(from_45stream,Map_45Type,(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				const m=(()=>{
					const built=new (global.Map)();
					_ms.assoc(built,1,2);
					_ms.assoc(built,3,4);
					return built
				})();
				const hm=empty(_ms.unlazy(Hash_45Map));
				assoc_33(hm,1,2);
				assoc_33(hm,3,4);
				_ms.assoc(built,[_ms.unlazy(Hash_45Map),m],hm);
				return built
			};
			return _ms.set(function(stream){
				const _this=this;
				const map=empty(_this);
				for(let _ of stream){
					assoc_33(map,_ms.sub(_,0),_ms.sub(_,1))
				};
				return map
			},built)
		})());
		const name=exports.name=`Map-Type`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvQC9NYXAvTWFwLVR5cGUubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFVQSxpQ0FBVSxLQUFJLE1BQ0ksS0FBQTs7U0FBakIsUUFBQTtHQUNBLG9CQUFNOzs7RUFHUCxlQUFXLElBQUk7RUFDZixlQUFXLE1BQU0sSUFDSyxJQUFBO1VBQXJCOztFQUVELFFBQU0sV0FBUztFQUNmLFFBQU0sY0FBWSxXQUNRLEtBQUE7O0dBQXpCLHNCQUNPLGVBQUE7O0lBQ04sUUFDRyxLQUFBOztxQkFBRixFQUFLO3FCQUNMLEVBQUs7OztJQUNOLFNBQUs7SUFDTCxTQUFPLEdBQUcsRUFBRTtJQUNaLFNBQU8sR0FBRyxFQUFFO29CQUNaLHdCQUFVLEdBQU07OztrQkFDZixTQUFBLE9BQ007VUFBSztJQUFaLFVBQU0sTUFBTTtJQUNQLFFBQUEsS0FBQSxPQUNNO0tBQ1YsU0FBTyxZQUFJLEVBQUUsV0FBRyxFQUFFO0lBQUE7V0FDbkI7R0FBQTs7RUFuQ0Ysd0JBQUEiLCJmaWxlIjoiYXQvTWFwL01hcC1UeXBlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=