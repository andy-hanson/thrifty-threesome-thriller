"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./at/at","./Function","./Generator","./methods","./Type/Method","./Type/Pred-Type","./Type/Type","./io/time","./Try","./compare","./math/Number","./math/methods","./Try"],(exports,_64_0,Function_1,Generator_2,methods_3,Method_4,Pred_45Type_5,Type_6,time_7,Try_8,compare_9,Number_10,methods_11,Try_12)=>{
	exports._get=_ms.lazy(()=>{
		const _64=_ms.getDefaultExport(_64_0),_$1=_ms.getModule(_64_0),flatten=_ms.get(_$1,"flatten"),_$2=_ms.getModule(Function_1),apply=_ms.get(_$2,"apply"),Thunk=_ms.get(_$2,"Thunk"),Generator=_ms.getDefaultExport(Generator_2),_$3=_ms.getModule(methods_3),sub=_ms.get(_$3,"sub"),_$4=_ms.getModule(Method_4),self_45impl_33=_ms.get(_$4,"self-impl!"),_$5=_ms.getModule(Pred_45Type_5),Any=_ms.get(_$5,"Any"),_$6=_ms.getModule(Type_6),_61_62=_ms.get(_$6,"=>"),_$7=_ms.lazyGetModule(time_7),$after_45time=_ms.lazyProp(_$7,"$after-time"),_$8=_ms.lazyGetModule(Try_8),$catch=_ms.lazyProp(_$8,"$catch"),_$9=_ms.lazyGetModule(compare_9),_61_63=_ms.lazyProp(_$9,"=?"),_$10=_ms.lazyGetModule(Number_10),divisible_63=_ms.lazyProp(_$10,"divisible?"),_$11=_ms.lazyGetModule(methods_11),_43=_ms.lazyProp(_$11,"+"),_$12=_ms.lazyGetModule(Try_12),$try=_ms.lazyProp(_$12,"$try");
		const $=exports.default=Promise;
		self_45impl_33(sub,$,()=>{
			return $
		});
		const $done=exports.$done=(()=>{
			const built={};
			const doc=built.doc=`Don't forget $done!
Logs any errors that happen inside a promise.
It would be great if we could make these errors happen top-level...
This is probably a kludge. See <http://blog.soareschen.com/the-problem-with-es6-promises>.`;
			return _ms.set(_=>{
				_ms.checkContains($,_,"_");
				return _ms.unlazy($catch)(_,err=>{
					console.log(`=== error ===
${err.message}
${err.stack}
=== error ===`);
					throw err
				})
			},built)
		})();
		const $fail_45after_45time=exports["$fail-after-time"]=(()=>{
			const built={};
			const doc=built.doc=`Fails if it takes too long.`;
			const $test=built.$test=function* $test(){
				const $x=_ms.unlazy($after_45time)(100,()=>{
					return 1
				});
				const a=(yield _ms.unlazy($try)($fail_45after_45time($x,1)));
				_ms.assert(_ms.unlazy(_61_63),a.message,`Took longer than 1 milliseconds.`);
				_ms.assert(_ms.unlazy(_61_63),1,(yield $fail_45after_45time($x,200)))
			};
			return _ms.set((_,time_45ms)=>{
				_ms.checkContains($,_,"_");
				_ms.checkContains(Number,time_45ms,"time-ms");
				return _ms.checkContains($,new ($)((resolve,reject)=>{
					$after(_,resolve);
					const timeout=function timeout(){
						return reject(new (Error)(`Took longer than ${time_45ms} milliseconds.`))
					};
					return setTimeout(timeout,time_45ms)
				}),"res")
			},built)
		})();
		const $after=exports.$after=(()=>{
			const built={};
			const doc=built.doc=`Applies \`then\` to the result whenever it is ready.
If \`then\` returns a $, returns a $ for that $'s value; else returns a $ for the result of \`then\`.`;
			const $test=built.$test=function* $test(){
				_ms.assert(_ms.unlazy(_61_63),2,(yield $after($resolved(1),_ms.sub(_ms.unlazy(_43),1))))
			};
			return _ms.set((_,then)=>{
				_ms.checkContains($,_,"_");
				_ms.checkContains(Function,then,"then");
				return _ms.checkContains($,_.then(then),"res")
			},built)
		})();
		const $resolved=exports.$resolved=(()=>{
			const built={};
			const doc=built.doc=`$ that is already resolved.`;
			const $test=built.$test=function* $test(){
				_ms.assert(_ms.unlazy(_61_63),1,(yield $resolved(1)))
			};
			return _ms.set(value=>{
				return _ms.checkContains($,$.resolve(value),"res")
			},built)
		})();
		const $rejected=exports.$rejected=(()=>{
			const built={};
			const doc=built.doc=`$ that is already rejected.`;
			const test=built.test=function test(){
				return $ing(function*(){
					const r=$rejected(`a`);
					_ms.assert(_ms.unlazy(_61_63),`a`,(yield _ms.unlazy($try)(r)));
					_ms.assert(_ms.unlazy(_61_63),`a`,(yield _ms.unlazy($try)($after(r,()=>{
						throw new (Error)(`b`)
					}))))
				})
			};
			return _ms.set(_=>{
				return $.reject(_)
			},built)
		})();
		const $delay=exports.$delay=(()=>{
			const built={};
			const doc=built.doc=`Schedules a computation to happen later.
Does *not* run it in parallel.
It should go without saying,
but if you needlessly $delay things all the time your program will take longer.`;
			const $test=built.$test=function* $test(){
				_ms.assert(_ms.unlazy(_61_63),1,(yield $delay(()=>{
					return 1
				})))
			};
			return _ms.set(delayed=>{
				_ms.checkContains(Thunk,delayed,"delayed");
				return _ms.unlazy($after_45time)(0,delayed)
			},built)
		})();
		const $all=exports.$all=(()=>{
			const built={};
			const doc=built.doc=`$ that resolves when the last $ in the input does, with every value in the original iteration order.
If any one of them fails, fails with the first such failure.`;
			const $test=built.$test=function* $test(){
				_ms.assert(_ms.unlazy(_61_63),[1,2],(yield $all([$resolved(1),$resolved(2)])));
				const all_45rejected=$all([$rejected(`a`),$rejected(`b`)]);
				_ms.assert(_ms.unlazy(_61_63),`a`,(yield _ms.unlazy($try)(all_45rejected)))
			};
			return _ms.set(_=>{
				_ms.checkContains(_ms.sub(_64,$),_,"_");
				return _ms.checkContains(_ms.sub($,Array),$.all(_61_62(Array,_)),"res")
			},built)
		})();
		const $map=exports.$map=(()=>{
			const built={};
			const doc=built.doc=`Asynchronously runs mapper for every element of mapped and returns a $ joining them.
Unlike map, this always returns an Array.`;
			const $test=built.$test=function* $test(){
				_ms.assert(_ms.unlazy(_61_63),[2,3,4],(yield $map([1,2,3],_=>{
					return $delay(()=>{
						return _ms.unlazy(_43)(_,1)
					})
				})))
			};
			return _ms.set((mapped,mapper)=>{
				_ms.checkContains(_64,mapped,"mapped");
				_ms.checkContains(_ms.sub(Function,Any,$),mapper,"mapper");
				return _ms.checkContains(_ms.sub($,Array),$.all((()=>{
					const built=[];
					for(let _ of mapped){
						_ms.add(built,mapper(_))
					};
					return built
				})()),"res")
			},built)
		})();
		const $flat_45map=exports["$flat-map"]=(()=>{
			const built={};
			const doc=built.doc=`Like $map but flattens the result.`;
			const $test=built.$test=function* $test(){
				_ms.assert(_ms.unlazy(_61_63),[1,1,2,2,3,3],(yield $flat_45map([1,2,3],_=>{
					return $delay(()=>{
						return [_,_]
					})
				})))
			};
			return _ms.set((mapped,mapper)=>{
				_ms.checkContains(_64,mapped,"mapped");
				_ms.checkContains(_ms.sub(Function,Any,_ms.sub($,_64)),mapper,"mapper");
				return _ms.checkContains(_ms.sub($,_64),$after($map(mapped,mapper),flatten),"res")
			},built)
		})();
		const $keep=exports.$keep=(()=>{
			const built={};
			const doc=built.doc=`Asynchronously runs keep-if? on each element and creates an Array of those that match.
Maintains the original order.`;
			const $test=built.$test=function* $test(){
				_ms.assert(_ms.unlazy(_61_63),[2,4],(yield $keep([1,2,3,4],_=>{
					return $delay(()=>{
						return _ms.unlazy(divisible_63)(_,2)
					})
				})))
			};
			return _ms.set((keep_45some,keep_45if_63)=>{
				_ms.checkContains(_64,keep_45some,"keep-some");
				_ms.checkContains(_ms.sub(Function,Any,_ms.sub($,Boolean)),keep_45if_63,"keep-if?");
				return _ms.checkContains(_ms.sub($,Array),$flat_45map(keep_45some,_=>{
					return $after(keep_45if_63(_),keep=>{
						return keep?_ms.some((()=>{
							return _
						})()):_ms.None
					})
				}),"res")
			},built)
		})();
		const $ing=exports.$ing=(()=>{
			const built={};
			const doc=built.doc=`Within the generator, you may write:
	a <~ $get-a
The code after the assignment will become an $after of it.
Note that $ing returns a $; it does *not* call $done at the end.`;
			const $test=built.$test=function* $test(){
				_ms.assert(_ms.unlazy(_61_63),`res`,(yield $ing(function*(){
					const promised=(yield $resolved(`promised`));
					_ms.assert(_ms.unlazy(_61_63),`promised`,promised);
					return `res`
				})));
				const $whoops=(yield _ms.unlazy($try)($ing(function*(){
					(yield $rejected(`whoops`));
					throw new (Error)(`It's been rejected, so the rest is never called.`)
				})));
				_ms.assert(_ms.unlazy(_61_63),`whoops`,$whoops)
			};
			return _ms.set(code=>{
				_ms.checkContains(_ms.sub(Function,Generator),code,"code");
				const $_45generator=code();
				const do_45next=function do_45next(last_45value){
					const _$0=$_45generator.next(last_45value),value=_$0.value,done=_$0.done;
					return done?value:$after(value,do_45next)
				};
				return _ms.checkContains($,do_45next(),"res")
			},built)
		})();
		const name=exports.name=`$`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvJC5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQW9CQSx3QkFBRztFQUVILGVBQVcsSUFBSSxFQUNHLElBQUE7VUFBakI7RUFBQTtFQUlELDBCQUNNLEtBQUE7O0dBQUwsb0JBQ0M7a0JBSUEsR0FDRztzQkFERDs4QkFDSyxFQUFJLEtBQ0c7S0FDYixZQUNDLGlCQUNDLGVBQ0E7S0FHRixNQUFPO0lBQUE7R0FBQTs7RUFFVix1REFDaUIsS0FBQTs7R0FBaEIsb0JBQU07R0FDTix3QkFDVSxpQkFBQTtJQUFULG1DQUFpQixJQUNLLElBQUE7WUFBckI7SUFBQTtJQUNELFFBQUssd0JBQU0scUJBQWlCLEdBQUc7a0NBQ3BCLFVBQVc7a0NBQ1gsRUFBRyxPQUFHLHFCQUFpQixHQUFHO0dBQUE7a0JBQ3JDLENBQUcsRUFBSSxZQUNjO3NCQURoQjtzQkFBVTs2QkFBZCxFQUNELEtBQUksR0FBRyxDQUFBLFFBQVEsU0FDTTtLQUFwQixPQUFPLEVBQUU7S0FDVCxjQUNXLGtCQUFBO2FBQVYsT0FBTyxLQUFJLE9BQU8sb0JBQWtCOztZQUNyQyxXQUFXLFFBQVE7SUFBQTs7O0VBRXRCLDRCQUNPLEtBQUE7O0dBQU4sb0JBQ0M7R0FFRCx3QkFDVSxpQkFBQTtrQ0FBRSxFQUFHLE9BQUcsT0FBUSxVQUFVLDJCQUFLO0dBQUE7a0JBQ3hDLENBQUcsRUFBSSxPQUNhO3NCQURmO3NCQWdHRzs2QkFoR1AsRUFDRCxPQUFPOzs7RUFFVCxrQ0FDVSxLQUFBOztHQUFULG9CQUFNO0dBQ04sd0JBQ1UsaUJBQUE7a0NBQUUsRUFBRyxPQUFHLFVBQVU7R0FBQTtrQkFDeEIsT0FDSzs2QkFEUCxFQUNELFVBQVU7OztFQUVaLGtDQUNVLEtBQUE7O0dBQVQsb0JBQU07R0FDTixzQkFDTyxlQUFBO1dBQU4sS0FDUSxXQUFBO0tBQVAsUUFBSSxVQUFXO21DQUNILElBQUksd0JBQVE7bUNBRVosSUFBSSx3QkFBUyxPQUFPLEVBQ0ks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