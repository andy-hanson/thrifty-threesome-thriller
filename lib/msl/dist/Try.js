"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./at/q","./cash","./compare","./Function","./Type/Pred-Type","./Type/Type","./cash","./Function"],(exports,_63_0,$_1,compare_2,Function_3,Pred_45Type_4,Type_5,$_6,Function_7)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(_63_0),_63some=_ms.get(_$0,"?some"),_63None=_ms.get(_$0,"?None"),$=_ms.getDefaultExport($_1),_$1=_ms.getModule($_1),$after=_ms.get(_$1,"$after"),_$2=_ms.getModule(compare_2),_61_63=_ms.get(_$2,"=?"),_$3=_ms.getModule(Function_3),Action=_ms.get(_$3,"Action"),_$4=_ms.getModule(Pred_45Type_4),Any=_ms.get(_$4,"Any"),Union=_ms.get(_$4,"Union"),Type=_ms.getDefaultExport(Type_5),_$5=_ms.lazyGetModule($_6),$rejected=_ms.lazyProp(_$5,"$rejected"),$resolved=_ms.lazyProp(_$5,"$resolved"),_$6=_ms.lazyGetModule(Function_7),thunk=_ms.lazyProp(_$6,"thunk");
		const fail_33=function fail_33(){
			throw new (Error)("An error occurred.")
		};
		const Success=exports.Success=class Success{
			constructor(val){
				_ms.newProperty(this,"val",val)
			}
		};
		_ms.newProperty(Success,"doc",`Attempt that did not fail. _.val is the result of the attempted code.`);
		const try_45result=exports["try-result"]=(()=>{
			const built={};
			const doc=built.doc=`If \`tried\` throws an error, returns it; else returns Success of its result.
If you don't care about the value of the error, use \`?try\` instead.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[_ms.unlazy(thunk)(1)],new (Success)(1));
				_ms.assert(_61_63,try_45result(fail_33).message,`An error occurred.`);
				return built
			};
			return _ms.set(tried=>{
				_ms.checkContains(Action,tried,"tried");
				return (()=>{
					try {
						return new (Success)(tried())
					}catch(_){
						return _
					}
				})()
			},built)
		})();
		const _63try=exports["?try"]=(()=>{
			const built={};
			const doc=built.doc=`\`?\` containing any successes.
This can be thought of as translating an Error-throwing Function to an ?-returning one.
The opposite of this is \`@.?.un-?\`.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[_ms.unlazy(thunk)(1)],_63some(1));
				_ms.assoc(built,[fail_33],_63None);
				return built
			};
			return _ms.set(tried=>{
				_ms.checkContains(_ms.sub(Function,Any),tried,"tried");
				return (()=>{
					try {
						return _63some(tried())
					}catch(_){
						return _63None
					}
				})()
			},built)
		})();
		const fails_63=exports["fails?"]=(()=>{
			const built={};
			const doc=built.doc=`Whether the Function throws some error.`;
			const test=built.test=function test(){
				_ms.assert(fails_63,()=>{
					throw new (Error)("An error occurred.")
				});
				_ms.assertNot(fails_63,()=>{})
			};
			return _ms.set(tried=>{
				_ms.checkContains(Action,tried,"tried");
				return (()=>{
					try {
						tried();
						return false
					}catch(_){
						return true
					}
				})()
			},built)
		})();
		const fails_45with_63=exports["fails-with?"]=(()=>{
			const built={};
			const doc=built.doc=`Whether the Function throws an error of the given type or with the given message.`;
			const test=built.test=function test(){
				_ms.assert(fails_45with_63,`message`,()=>{
					throw new (Error)(`message`)
				});
				_ms.assert(fails_45with_63,TypeError,()=>{
					return null["missing-property"]
				})
			};
			return _ms.set((expected_45error,tried)=>{
				_ms.checkContains(_ms.sub(Union,String,Type),expected_45error,"expected-error");
				_ms.checkContains(Action,tried,"tried");
				return (()=>{
					try {
						tried();
						return false
					}catch(error){
						return (()=>{
							const _=expected_45error;
							if(_ms.contains(Type,_)){
								return _ms.contains(_,error)
							} else if(_ms.contains(String,_)){
								return _61_63(error.message,_)
							} else throw new (Error)("No branch of `case` matches.")
						})()
					}
				})()
			},built)
		})();
		const annotate_45errors=exports["annotate-errors"]=(()=>{
			const built={};
			const doc=built.doc=`If there are thrown errors, prepends \`annotation\` to their stack and message.`;
			const test=built.test=function test(){
				_ms.assert(fails_45with_63,`ab`,()=>{
					annotate_45errors(`a`,()=>{
						throw new (Error)(`b`)
					})
				})
			};
			return _ms.set((annotation,tried)=>{
				_ms.checkContains(Action,tried,"tried");
				return (()=>{
					try {
						return tried()
					}catch(_){
						_.stack=`${_ms.unlazy(annotation)}${_.stack}`;
						_.message=`${_ms.unlazy(annotation)}${_.message}`;
						throw _
					}
				})()
			},built)
		})();
		const $try=exports.$try=(()=>{
			const built={};
			const doc=built.doc=`Success if the $ is resolved, Error if rejected.`;
			const $test=built.$test=function* $test(){
				_ms.assert(_61_63,new (Success)(1),(yield $try(_ms.unlazy($resolved)(1))));
				_ms.assert(_61_63,`a`,(yield $try(_ms.unlazy($rejected)(`a`))));
				_ms.assert(_61_63,`a`,(yield $try($.reject(`a`))))
			};
			return _ms.set(_=>{
				_ms.checkContains($,_,"_");
				const success=$after(_,val=>{
					return new (Success)(val)
				});
				return success.catch(err=>{
					return err
				})
			},built)
		})();
		const $catch=exports.$catch=(()=>{
			const built={};
			const doc=built.doc=`If \`$\` succeeds, acts like \`identity\`.
Else returns a \`$\` for the result of running \`catcher\` on the Error.
Like for \`$after\`, \`catcher\` can also return another \`$\`.`;
			const $test=built.$test=function* $test(){
				_ms.assert(_61_63,`a`,(yield $.reject(`a`).catch(_=>{
					return _
				})))
			};
			return _ms.set((promise,catcher)=>{
				_ms.checkContains($,promise,"promise");
				_ms.checkContains(Function,catcher,"catcher");
				return _ms.checkContains($,promise.catch(catcher),"res")
			},built)
		})();
		const $annotate_45errors=exports["$annotate-errors"]=(()=>{
			const built={};
			const doc=built.doc=`Like \`annotate-errors\` but works on errors thrown in a \`$\`.`;
			const $test=built.$test=function* $test(){
				_ms.assert(_61_63,`ab`,(yield $try($annotate_45errors(`a`,_ms.unlazy($rejected)(new (Error)(`b`))))).message)
			};
			return _ms.set((annotation,$tried)=>{
				_ms.checkContains($,$tried,"$tried");
				return $catch($tried,_=>{
					if(_ms.contains(Error,_)){
						_.stack=`${_ms.unlazy(annotation)}${_.stack}`;
						_.message=`${_ms.unlazy(annotation)}${_.message}`
					};
					throw _
				})
			},built)
		})();
		const name=exports.name=`Try`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvVHJ5Lm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBYU0sY0FDVSxrQkFBQTtHQUFmOztFQUVELDhCQUNjO0dBQUYsWUFBQSxJQUNJOzs7O2tCQUVoQixjQUFlO0VBRWYseUNBQ1csS0FBQTs7R0FBVixvQkFDQztHQUVELHNCQUNPLGVBQUE7O29CQUFOLG1CQUFRLElBQU8sS0FBSSxTQUFRO2VBQ25CLE9BQUksYUFBVyxpQkFBZ0I7OztrQkFDdkMsT0FDWTtzQkFETjtXQUVBO1NBQ0Y7YUFBRixLQUFJLFNBQVE7S0FBQSxDQUNiLE1BQ0ssRUFBQTthQUFKO0tBQUE7SUFBQTtHQUFBOztFQUVKLDZCQUNLLEtBQUE7O0dBQUosb0JBQ0M7R0FHRCxzQkFDTyxlQUFBOztvQkFBTixtQkFBUSxJQUFPLFFBQU07b0JBQ3JCLENBQUMsU0FBVTs7O2tCQUNYLE9BQ21COzhCQWdGRyxTQWpGUDtXQUVUO1NBQ0Y7YUFBRixRQUFNO0tBQUEsQ0FDUCxNQUNLLEVBQUE7YUFDSjtLQUFBO0lBQUE7R0FBQTs7RUFFSixpQ0FDTyxLQUFBOztHQUFOLG9CQUFNO0dBQ04sc0JBQ1EsZUFBQTtlQUFDLFNBQ1MsSUFBQTtLQUFoQjs7a0JBQ08sU0FDUyxJQUFBO0dBQUE7a0JBQ2pCLE9BQ1k7c0JBRE47V0FFQTtTQUNGO01BQUY7YUFDQTtLQUFBLENBQ0QsTUFDSyxFQUFBO2FBQ0o7S0FBQTtJQUFBO0dBQUE7O0VBRUosNkNBQ1ksS0FBQTs7R0FBWCxvQkFBTTtHQUNOLHNCQUNRLGVBQUE7ZUFBQyxnQkFBYSxVQUNXLElBQUE7S0FBL0Isa0JBQVE7O2VBQ0QsZ0JBQVksVUFDVyxJQUFBO1lBQTlCOzs7a0JBQ0QsQ0FBQSxpQkFBa0MsUUFDWTs4QkFEL0IsTUFTWCxPQVR3QjtzQkFBWTtXQUVsQztTQUNGO01BQUY7YUFDQTtLQUFBLENBQ0QsTUFBTSxNQUNLO2FBQUw7T0FBQSxRQUFBO09BQ0osZ0JBQUMsS0FBRCxHQUNLOzRCQUFFLEVBQU47T0FBQSxPQUNELGdCQUFDLE9BQUQsR0FDTztlQUFOLE9BQUcsY0FBYztPQUFBOzs7Ozs7RUFFdkIsbURBQ2dCLEtBQUE7O0dBQWYsb0JBQU07R0FDTixzQkFDUSxlQUFBO2VBQUMsZ0JBQWEsS0FDTSxJQUFBO0tBQTFCLGtCQUFpQixJQUNLLElBQUE7TUFBckIsa0JBQVE7Ozs7a0JBQ1YsQ0FBQSxXQUFtQixRQUNZO3NCQUROO1dBRW5CO1NBQ0Y7YUFBRjtLQUFBLENBQ0QsTUFDSyxFQUFBO01BQUosUUFBWSw0QkFBYTtNQUN6QixVQUFjLDRCQUFhO01BQzNCLE1BQU87S0FBQTtJQUFBO0dBQUE7O0VBR1Ysd0JBQ0ssS0FBQTs7R0FBSixvQkFBTTtHQUNOLHdCQUNVLGlCQUFBO2VBQUQsT0FBSSxLQUFJLFNBQVEsR0FBSSxPQUFHLDJCQUFnQjtlQUN2QyxPQUFJLElBQUksT0FBSSwyQkFBaUI7ZUFFN0IsT0FBSSxJQUFJLE9BQUksS0FBTSxTQUFVOztrQkFDcEMsR0FDRztzQkFERDtJQUVGLGNBQVUsT0FBTyxFQUFHLEtBQ0c7WUFBdEIsS0FBSSxTQUFRO0lBQUE7V0FDYixjQUFlLEtBQ0c7WUFBakI7SUFBQTtHQUFBOztFQUVILDRCQUNPLEtBQUE7O0dBQU4sb0JBQ0M7R0FHRCx3QkFDVSxpQkFBQTtlQUFELE9BQUksSUFBSSxPQUFJLFNBQVUsV0FBVyxHQUNDO1lBQXpDO0lBQUE7R0FBQTtrQkFDRCxDQUFHLFFBQVUsVUFDZ0I7c0JBRGxCO3NCQUFVOzZCQUFwQixFQUNELGNBQWM7OztFQUVoQixxREFDaUIsS0FBQTs7R0FBaEIsb0JBQU07R0FDTix3QkFDVSxpQkFBQTtlQUFELE9BQUksS0FBSyxPQUFHLEtBQU0sbUJBQWtCLDBCQUFlLEtBR3JELE9BSGdFOztrQkFDdEUsQ0FBQSxXQUFtQixTQUNRO3NCQUREO1dBQzFCLE9BQU8sT0FBUSxHQUNDO0tBQWYsZ0JBQUssTUFBRCxHQUNNO01BQVQsUUFBWSw0QkFBYTtNQUN6QixVQUFjLDRCQUFhOztLQUM1QixNQUFPO0lBQUE7R0FBQTs7RUF6SVgsd0JBQUEiLCJmaWxlIjoiVHJ5LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=