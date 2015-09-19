"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../compare","../../math/Number","../../math/methods","../../methods","../../Type/Kind","../../Type/Pred-Type","../at","../at-Type","../q","../Range","./Seq"],(exports,compare_0,Number_1,methods_2,methods_3,Kind_4,Pred_45Type_5,_64_6,_64_45Type_7,_63_8,Range_9,Seq_10)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(compare_0),_61_63=_ms.get(_$0,"=?"),_60_63=_ms.get(_$0,"<?"),_$1=_ms.getModule(Number_1),modulo=_ms.get(_$1,"modulo"),Nat=_ms.get(_$1,"Nat"),_$2=_ms.getModule(methods_2),_43=_ms.get(_$2,"+"),_45=_ms.get(_$2,"-"),_42=_ms.get(_$2,"*"),_$3=_ms.getModule(methods_3),sub=_ms.get(_$3,"sub"),_$4=_ms.getModule(Kind_4),kind_33=_ms.get(_$4,"kind!"),self_45kind_33=_ms.get(_$4,"self-kind!"),_$5=_ms.getModule(Pred_45Type_5),Any=_ms.get(_$5,"Any"),_64=_ms.getDefaultExport(_64_6),_$6=_ms.getModule(_64_6),_43_43_126=_ms.get(_$6,"++~"),count=_ms.get(_$6,"count"),empty_33=_ms.get(_$6,"empty!"),empty_63=_ms.get(_$6,"empty?"),iterator=_ms.get(_$6,"iterator"),map=_ms.get(_$6,"map"),_64_45Type=_ms.getDefaultExport(_64_45Type_7),_$7=_ms.getModule(_64_45Type_7),empty=_ms.get(_$7,"empty"),_$8=_ms.getModule(_63_8),un_45_63=_ms.get(_$8,"un-?"),Range=_ms.getDefaultExport(Range_9),Seq=_ms.getDefaultExport(Seq_10),_$9=_ms.getModule(Seq_10),_60_43_43_33=_ms.get(_$9,"<++!"),_43_43_62_33=_ms.get(_$9,"++>!"),_63nth=_ms.get(_$9,"?nth"),_63_60pop_33=_ms.get(_$9,"?<pop!"),_63pop_62_33=_ms.get(_$9,"?pop>!"),reverse=_ms.get(_$9,"reverse"),set_45nth_33=_ms.get(_$9,"set-nth!");
		const Deque=exports.default=(()=>{
			const _=class Deque{
				static [_ms.symbol(empty)](){
					const _this=this;
					return new (_this)()
				}
				constructor(){
					_ms.newMutableProperty(this,"data!",Array(8));
					_ms.newMutableProperty(this,"start-index!",0);
					_ms.newMutableProperty(this,"end-index!",0)
				}
				*[_ms.symbol(iterator)](){
					const _this=this;
					const indices=(yield* function*(){
						if(_60_63(_this["end-index!"],_this["start-index!"])){
							return _43_43_126(new (Range)(_this["start-index!"],count(_this["data!"])),new (Range)(0,_this["end-index!"]))
						} else {
							return new (Range)(_this["start-index!"],_this["end-index!"])
						}
					}());
					for(let _ of indices){
						(yield _ms.sub(_this["data!"],_))
					}
				}
				[_ms.symbol(_60_43_43_33)](ems){
					const _this=this;
					_ms.checkContains(_64,ems,"ems");
					for(let em of reverse(ems)){
						const new_45start=prev_45index(_this,_this["start-index!"]);
						if(_61_63(new_45start,_this["end-index!"])){
							expand_33(_this);
							_60_43_43_33(_this,[em])
						} else {
							_this["start-index!"]=new_45start;
							set_45nth_33(_this["data!"],_this["start-index!"],em)
						}
					}
				}
				[_ms.symbol(_43_43_62_33)](ems){
					const _this=this;
					_ms.checkContains(_64,ems,"ems");
					for(let em of ems){
						const new_45end=next_45index(_this,_this["end-index!"]);
						if(_61_63(new_45end,_this["start-index!"])){
							expand_33(_this);
							_43_43_62_33(_this,[em])
						} else {
							set_45nth_33(_this["data!"],_this["end-index!"],em);
							_this["end-index!"]=new_45end
						}
					}
				}
				[_ms.symbol(_63_60pop_33)](){
					const _this=this;
					return empty_63(_this)?_ms.None:_ms.some((()=>{
						return (_=>{
							_this["start-index!"]=next_45index(_this,_this["start-index!"]);
							return _
						})(_ms.sub(_this["data!"],_this["start-index!"]))
					})())
				}
				[_ms.symbol(_63pop_62_33)](){
					const _this=this;
					return empty_63(_this)?_ms.None:_ms.some((()=>{
						const new_45end=prev_45index(_this,_this["end-index!"]);
						_this["end-index!"]=new_45end;
						return _ms.sub(_this["data!"],new_45end)
					})())
				}
				[_ms.symbol(_63nth)](index){
					const _this=this;
					_ms.checkContains(Nat,index,"index");
					return map(_63data_45index(_this,index),_ms.sub(sub,_this["data!"]))
				}
				[_ms.symbol(set_45nth_33)](index,set_45to){
					const _this=this;
					_ms.checkContains(Nat,index,"index");
					_ms.checkContains(Any,set_45to,"set-to");
					const data_45index=un_45_63(_63data_45index(_this,index),_ms.lazy(()=>`Can't set at index ${index}; count is ${count(_this)}`));
					set_45nth_33(_this["data!"],data_45index,set_45to)
				}
				[_ms.symbol(empty_33)](){
					const _this=this;
					empty_33(_this["data!"]);
					_this["start-index!"]=0;
					_this["end-index!"]=0
				}
			};
			self_45kind_33(_,_64_45Type);
			kind_33(_,Seq);
			return _
		})();
		const capacity=function capacity(_){
			return count(_["data!"])
		};
		const expand_33=function expand_33(_){
			const old_45data=_["data!"];
			const old_45capacity=capacity(_);
			const new_45capacity=_42(2,old_45capacity);
			const new_45data=Array(new_45capacity);
			for(let index of new (Range)(0,old_45capacity)){
				set_45nth_33(new_45data,index,_ms.sub(old_45data,index))
			};
			_["data!"]=new_45data
		};
		const wrap_45index=function wrap_45index(_,index){
			return modulo(index,capacity(_))
		};
		const next_45index=function next_45index(_,index){
			_ms.checkContains(Nat,index,"index");
			return wrap_45index(_,_43(index,1))
		};
		const prev_45index=function prev_45index(_,index){
			_ms.checkContains(Nat,index,"index");
			return wrap_45index(_,_45(index,1))
		};
		const _63data_45index=function _63data_45index(_,index){
			_ms.checkContains(Nat,index,"index");
			const a=_43(_["start-index!"],index);
			return (()=>{
				if(_60_63(a,capacity(_))){
					return (_60_63(_["end-index!"],_["start-index!"])||_60_63(a,_["end-index!"]))?_ms.some((()=>{
						return a
					})()):_ms.None
				} else {
					const b=wrap_45index(_,a);
					return (_60_63(_["end-index!"],_["start-index!"])&&_60_63(b,_["end-index!"]))?_ms.some((()=>{
						return b
					})()):_ms.None
				}
			})()
		};
		const name=exports.name=`Deque`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvQC9TZXEvRGVxdWUubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFhQSw0QkFDWSxLQUNSO1NBREg7SUFNQyxtQkFBQSxTQUNPO1dBaUVQO1lBakVDLEtBaUVEO0lBQUE7SUE5RFMsYUFBQTs0QkFBVCxhQXdFVyxNQXhFTTs0QkFDakIsb0JBQWtCOzRCQUNsQixrQkFBZ0I7SUFBQTtJQUlqQixhQUFBLFlBQ1k7V0F1RFg7S0F2REEsY0FDYztNQUFiLEdBQUEsT0FzREQsMkNBckQ2QjtjQUEzQixXQUFLLEtBQUksT0FxRFgsc0JBckRnQyxNQXFEaEMsaUJBckRnRCxLQUFJLE9BQU0sRUFxRDFEO2FBbkRLO2NBQUgsS0FBSSxPQW1ETjs7O0tBbERLLFFBQUEsS0FBQSxRQUNPO3FCQWlEWixlQWpEVztLQUFBO0lBQUE7SUFFWixZQUFBLGVBQU8sSUFDSztXQThDWDt1QkEvQ1U7S0FDTCxRQUFBLE1BQU0sUUFBUSxLQUNHO01BQXJCLGtCQUFZLGFBNkNiO01BM0NNLEdBQUosT0FBRyxZQTJDTCxxQkExQzBCO09BQXZCLFVBMENIO09BekNHLGFBeUNILE1BekNhLENBQUM7TUFBQSxPQUVSO09BdUNOLHNCQXZDb0I7T0FDakIsYUFzQ0gscUNBdENpQztNQUFBO0tBQUE7SUFBQTtJQUlsQyxZQUFBLGVBQU8sSUFDSztXQWlDWDt1QkFsQ1U7S0FDTCxRQUFBLE1BQU0sSUFDRztNQUFiLGdCQUFVLGFBZ0NYO01BOUJNLEdBQUosT0FBRyxVQThCTCx1QkE3QjBCO09BQXZCLFVBNkJIO09BNUJHLGFBNEJILE1BNUJhLENBQUM7TUFBQSxPQUVSO09BQUgsYUEwQkgsbUNBMUIrQjtPQTBCL0Isb0JBekJrQjtNQUFBO0tBQUE7SUFBQTtJQUluQixZQUFBLGdCQUNRO1dBb0JQO1lBcEJPLFNBb0JQLDhCQW5Ca0I7YUFBWixJQUNxQjtPQWtCM0Isc0JBbEJtQixhQWtCbkI7O2lCQUFBOzs7SUFoQkQsWUFBQSxnQkFDUTtXQWVQO1lBZk8sU0FlUCw4QkFka0I7TUFBakIsZ0JBQVUsYUFjWDtNQUFBLG9CQWJnQjtxQkFhaEIsZUFaUTtLQUFBO0lBQUE7SUFFVCxZQUFBLFNBQU0sTUFDUztXQVNkO3VCQVZXO1lBQ1gsSUFBSyxnQkFTTCxNQVRzQixlQUFPLElBUzdCOztJQVBELFlBQUEsZUFBVyxNQUFVLFNBQ1U7V0FNOUI7dUJBUGdCO3VCQUFXO0tBQzNCLG1CQUFhLFNBQU0sZ0JBTW5CLE1BTm9DLG9CQUFTLHNCQUFvQixtQkFBa0IsTUFNbkY7S0FMQSxhQUtBLGVBTGdCLGFBQVc7SUFBQTtJQUU1QixZQUFBLFlBQ1M7V0FFUjtLQUZBLFNBRUE7S0FBQSxzQkFEaUI7S0FDakIsb0JBQWU7SUFBQTtHQUFBO0dBdkVmLGVBQVcsRUFBRTtHQUNiLFFBQU0sRUFBRTtVQUZUO0VBQUE7RUEyRUEsZUFBWSxrQkFBQSxFQUNDO1VBQVosTUFBTTs7RUFFUCxnQkFBWSxtQkFBQSxFQUNDO0dBQVosaUJBQVc7R0FDWCxxQkFBZSxTQUFBO0dBQ2YscUJBQWUsSUFBRSxFQUFFO0dBQ25CLGlCQUFXLE1BQU07R0FDWixRQUFBLFNBQVMsS0FBSSxPQUFNLEVBQUUsZ0JBQ1k7SUFBckMsYUFBUyxXQUFTLGNBQU0sV0FBUztHQUFBO0dBQ2xDLFdBQVc7RUFBQTtFQUVaLG1CQUFjLHNCQUFBLEVBQUUsTUFDSztVQUFwQixPQUFPLE1BQU0sU0FBQTtFQUFBO0VBRWQsbUJBQWMsc0JBQUEsRUFBRSxNQUNTO3FCQURIO1VBQ3JCLGFBQVcsRUFBRyxJQUFFLE1BQU07RUFBQTtFQUV2QixtQkFBYyxzQkFBQSxFQUFFLE1BQ1M7cUJBREg7VUFDckIsYUFBVyxFQUFHLElBQUUsTUFBTTtFQUFBO0VBRXZCLHNCQUFlLHlCQUFBLEVBQUUsTUFDUztxQkFESDtHQUN0QixRQUFJLElBQUUsa0JBQWU7VUFFakI7SUFBSCxHQUFBLE9BQUcsRUFBRSxTQUFBLElBQ1M7WUFBVixDQUFJLE9BQUcsZ0JBQWEsb0JBQWlCLE9BQUcsRUFBRSxnQ0FDYTthQUF6RDtLQUFBO1dBRUU7S0FBSCxRQUFJLGFBQVcsRUFBRTtZQUNkLENBQUssT0FBRyxnQkFBYSxvQkFBaUIsT0FBRyxFQUFFLGdDQUNhO2FBQTFEO0tBQUE7Ozs7RUF2SEwsd0JBQUEiLCJmaWxlIjoiYXQvU2VxL0RlcXVlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=