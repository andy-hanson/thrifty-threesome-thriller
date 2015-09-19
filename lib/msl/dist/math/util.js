"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../at/at","./methods"],(exports,_64_0,methods_1)=>{
	exports._get=_ms.lazy(()=>{
		const _64=_ms.getDefaultExport(_64_0),_$0=_ms.getModule(_64_0),fold=_ms.get(_$0,"fold"),_$1=_ms.getModule(methods_1),_43=_ms.get(_$1,"+"),_47=_ms.get(_$1,"/");
		const average=exports.average=(()=>{
			const built={};
			const doc=built.doc=`TODO`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[[0,1,2]],1);
				_ms.assoc(built,[[]],Number.NaN);
				return built
			};
			return _ms.set(_64vals=>{
				_ms.checkContains(_ms.sub(_64,Number),_64vals,"@vals");
				let sum=0;
				let count=0;
				for(let _ of _64vals){
					sum=_43(sum,_);
					count=_43(1,count)
				};
				return _47(sum,count)
			},built)
		})();
		const sum=exports.sum=(()=>{
			const built={};
			const doc=built.doc=`TODO`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[[1,2]],3);
				_ms.assoc(built,[[]],0);
				return built
			};
			return _ms.set(_64vals=>{
				_ms.checkContains(_ms.sub(_64,Number),_64vals,"@vals");
				return fold(_64vals,0,_43)
			},built)
		})();
		const name=exports.name=`util`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvbWF0aC91dGlsLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBSUEsOEJBQ1EsS0FBQTs7R0FBUCxvQkFBTTtHQUNOLHNCQUNPLGVBQUE7O29CQUFOLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBTztvQkFDYixDQUFDLElBY087OztrQkFiUixTQUNlOzhCQURULElBYUU7SUFaUixRQUFRO0lBQ1IsVUFBVTtJQUNMLFFBQUEsS0FBQSxRQUNLO1NBQUYsSUFBRSxJQUFJO1dBQ0osSUFBRSxFQUFFO0lBQUE7V0FDZCxJQUFFLElBQUk7R0FBQTs7RUFFUixzQkFDSSxLQUFBOztHQUFILG9CQUFNO0dBQ04sc0JBQ08sZUFBQTs7b0JBQU4sQ0FBQyxDQUFDLEVBQUUsSUFBTztvQkFDWCxDQUFDLElBQU87OztrQkFDUixTQUNlOzhCQURULElBQUU7V0FDUixLQUFLLFFBQU0sRUFBRTtHQUFBOztFQXZCZix3QkFBQSIsImZpbGUiOiJtYXRoL3V0aWwuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==