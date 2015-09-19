"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./Function","./Type/Method","./Type/Pred-Type"],(exports,Function_0,Method_1,Pred_45Type_2)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(Function_0),call=_ms.get(_$0,"call"),Method=_ms.getDefaultExport(Method_1),Pred_45Type=_ms.getDefaultExport(Pred_45Type_2);
		const Generator=exports.default=new (Pred_45Type)((()=>{
			const built={};
			built[`name`]="Generator";
			const doc=built.doc=`A block of code which yields values and receives responses from a context.
Also known as a coroutine.`;
			const predicate=built.predicate=function predicate(_){
				return (_ms.contains(Object,_)&&_ms.contains(Function,_.next))
			};
			return built
		})());
		const empty_45Generator=exports["empty-Generator"]=(()=>{
			const built={};
			const doc=built.doc=`Does nothing.`;
			return _ms.set(call(function*(){}),built)
		})();
		const gen_45next_33=exports["gen-next!"]=new (Method)((()=>{
			const built={};
			built[`name`]="gen-next!";
			const doc=built.doc=`Continues until the next \`<~\`.`;
			const impl_45symbol=built["impl-symbol"]=`next`;
			return built
		})());
		const name=exports.name=`Generator`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvR2VuZXJhdG9yLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBS0EsZ0NBQVcsS0FBSSxhQUNTLEtBQUE7O1NBQXZCLFFBQUE7R0FDQSxvQkFDQztHQUVELGdDQUFZLG1CQUFBLEVBQ0M7V0FBWixjQUFLLE9BQUQsaUJBQWUsU0FBUDs7OztFQUVkLG1EQUNnQixLQUFBOztHQUFmLG9CQUFNO2tCQUNOLEtBQ1EsV0FBQTs7RUFFVCx5Q0FBVyxLQUFJLFFBQ00sS0FBQTs7U0FBcEIsUUFBQTtHQUNBLG9CQUFNO0dBQ04seUNBQWM7OztFQXJCZix3QkFBQSIsImZpbGUiOiJHZW5lcmF0b3IuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==