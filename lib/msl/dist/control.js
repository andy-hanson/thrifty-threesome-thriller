"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./js","./methods","./Type/Pred-Type","./at/Seq/Seq","./compare"],(exports,js_0,methods_1,Pred_45Type_2,Seq_3,compare_4)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(js_0),defined_63=_ms.get(_$0,"defined?"),js_45=_ms.get(_$0,"js-"),js_60_61=_ms.get(_$0,"js<="),_$1=_ms.getModule(methods_1),freeze=_ms.get(_$1,"freeze"),_$2=_ms.getModule(Pred_45Type_2),Opt=_ms.get(_$2,"Opt"),Seq=_ms.lazy(()=>_ms.getDefaultExport(Seq_3)),_$3=_ms.lazyGetModule(Seq_3),_43_43_62_33=_ms.lazyProp(_$3,"++>!"),_$4=_ms.lazyGetModule(compare_4),_61_63=_ms.lazyProp(_$4,"=?");
		const do_45times_33=exports["do-times!"]=(()=>{
			const built={};
			const doc=built.doc=`Performs \`action\` \`n-times\` times.`;
			const test=built.test=function test(){
				let i=0;
				do_45times_33(10,()=>{
					i=js_45(i,1)
				});
				_ms.assert(_ms.unlazy(_61_63),i,- 10)
			};
			return _ms.set((n_45times,action)=>{
				_ms.assert(js_60_61,0,n_45times);
				let n=n_45times;
				for(;;){
					if(! n){
						break
					};
					action();
					n=js_45(n,1)
				}
			},built)
		})();
		const opr=exports.opr=(()=>{
			const built={};
			const doc=built.doc=`Fills in an Opt with a default value.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[void 0,1],1);
				_ms.assoc(built,[1,2],1);
				return built
			};
			return _ms.set((_,_default)=>{
				_ms.checkContains(Opt,_,"_");
				return defined_63(_)?_:_ms.unlazy(_default)
			},built)
		})();
		const build=exports.build=(()=>{
			const built={};
			const doc=built.doc=`Passes in a \`yield\` Function to \`calls-yield\`.
Returns a Seq of what \`calls-yield\` called \`yield\` with.`;
			const test=built.test=function test(){
				_ms.assert(_ms.unlazy(_61_63),[0,1],build(_yield=>{
					_yield(0);
					return _yield(1)
				}))
			};
			return _ms.set(calls_45yield=>{
				_ms.checkContains(Function,calls_45yield,"calls-yield");
				const yielded=[];
				const _yield=function _yield(_){
					return _ms.unlazy(_43_43_62_33)(yielded,[_])
				};
				calls_45yield(_yield);
				return _ms.checkContains(_ms.unlazy(Seq),freeze(yielded),"res")
			},built)
		})();
		const unreachable_33=exports["unreachable!"]=(()=>{
			const built={};
			const doc=built.doc=`Call this to mark code as unreachable.`;
			return _ms.set(()=>{
				throw new (Error)(`This should not be reachable.`)
			},built)
		})();
		const TODO=exports.TODO=(()=>{
			const built={};
			const doc=built.doc=`Placeholder for something which you really ought to implement one of these days.`;
			return _ms.set(()=>{
				throw new (Error)(`This function has not yet been implemented.`)
			},built)
		})();
		const name=exports.name=`control`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvY29udHJvbC5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQVNBLHlDQUNVLEtBQUE7O0dBQVQsb0JBQU07R0FDTixzQkFDUSxlQUFBO0lBQVAsTUFBTTtJQUNOLGNBQVUsR0FDSyxJQUFBO09BQVQsTUFBSSxFQUFFO0lBQUE7a0NBQ0QsRUFBRTs7a0JBQ1osQ0FBQSxVQUFRLFNBQ007ZUFBUCxTQUFLLEVBQUU7SUFDZixNQUFNO0lBRUYsT0FBQTtLQUFILEtBQVEsRUFDQztNQUFSO0tBQUE7S0FDRDtPQUNLLE1BQUksRUFBRTtJQUFBO0dBQUE7O0VBRWQsc0JBQ0ksS0FBQTs7R0FBSCxvQkFBTTtHQUNOLHNCQUNPLGVBQUE7O29CQUFOLENBQUMsT0FBVSxHQUFNO29CQUNqQixDQUFDLEVBQUUsR0FBTTs7O2tCQUNULENBQUEsRUFBTSxXQUNRO3NCQURaO1dBQ0csV0FBQSxHQUFVOzs7RUFFakIsMEJBQ00sS0FBQTs7R0FBTCxvQkFDQztHQUVELHNCQUNRLGVBQUE7a0NBQUksQ0FBQyxFQUFFLEdBQUksTUFBTyxRQUNLO0tBQTdCLE9BQU07WUFDTixPQUFNO0lBQUE7R0FBQTtrQkFDRixlQUNvQjtzQkFEUjtJQUNqQixjQUFVO0lBQ1YsYUFBUyxnQkFBQSxFQUNDO3FDQUFKLFFBQVEsQ0FBQztJQUFBO0lBQ2YsY0FBWTs2Q0FDWixPQUFPOzs7RUFFVCw2Q0FDYSxLQUFBOztHQUFaLG9CQUFNO2tCQUVKLElBQUE7SUFBRCxrQkFBUTs7O0VBRVYsd0JBQ0ssS0FBQTs7R0FBSixvQkFBTTtrQkFFSixJQUFBO0lBQUQsa0JBQVE7OztFQXhEVix3QkFBQSIsImZpbGUiOiJjb250cm9sLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=