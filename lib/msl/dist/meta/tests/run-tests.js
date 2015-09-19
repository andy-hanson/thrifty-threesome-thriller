"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../assert","../../at/at","../../at/at-Type","../../at/q","../../at/Map/Id-Map","../../at/Map/Map","../../at/Set/Id-Set","../../cash","../../compare","../../Generator","../../js","../../Object","../../Try","../../Type/Impl-Type","../../Type/Kind","../../Type/Method","../../Type/Pred-Type","../../control","../../Object","../../Type/Method"],(exports,assert_0,_64_1,_64_45Type_2,_63_3,Id_45Map_4,Map_5,Id_45Set_6,$_7,compare_8,Generator_9,js_10,Object_11,Try_12,Impl_45Type_13,Kind_14,Method_15,Pred_45Type_16,control_17,Object_18,Method_19)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(assert_0),assert_45call_33=_ms.get(_$0,"assert-call!"),assert_45this_45call_33=_ms.get(_$0,"assert-this-call!"),_64=_ms.getDefaultExport(_64_1),_$1=_ms.getModule(_64_45Type_2),empty=_ms.get(_$1,"empty"),_$2=_ms.getModule(_63_3),_63_45or=_ms.get(_$2,"?-or"),Id_45Map=_ms.getDefaultExport(Id_45Map_4),Map=_ms.getDefaultExport(Map_5),Id_45Set=_ms.getDefaultExport(Id_45Set_6),$=_ms.getDefaultExport($_7),_$3=_ms.getModule($_7),$all=_ms.get(_$3,"$all"),$ing=_ms.get(_$3,"$ing"),_$4=_ms.getModule(compare_8),_61_63=_ms.get(_$4,"=?"),Generator=_ms.getDefaultExport(Generator_9),_$5=_ms.getModule(js_10),defined_63=_ms.get(_$5,"defined?"),_$6=_ms.getModule(Object_11),_63p=_ms.get(_$6,"?p"),p=_ms.get(_$6,"p"),p_63=_ms.get(_$6,"p?"),_64p=_ms.get(_$6,"@p"),_64p_45all=_ms.get(_$6,"@p-all"),_$7=_ms.getModule(Try_12),$annotate_45errors=_ms.get(_$7,"$annotate-errors"),annotate_45errors=_ms.get(_$7,"annotate-errors"),_63try=_ms.get(_$7,"?try"),Impl_45Type=_ms.getDefaultExport(Impl_45Type_13),Kind=_ms.getDefaultExport(Kind_14),_$8=_ms.getModule(Kind_14),concrete_45implementors=_ms.get(_$8,"concrete-implementors"),Method=_ms.getDefaultExport(Method_15),_$9=_ms.getModule(Method_15),impl_33=_ms.get(_$9,"impl!"),impl_45for=_ms.get(_$9,"impl-for"),_$10=_ms.getModule(Pred_45Type_16),ObjLit=_ms.get(_$10,"ObjLit"),_$11=_ms.lazyGetModule(control_17),build=_ms.lazyProp(_$11,"build"),_$12=_ms.lazyGetModule(Object_18),empty_45Object_33=_ms.lazyProp(_$12,"empty-Object!"),_$13=_ms.lazyGetModule(Method_19),self_45impl_33=_ms.lazyProp(_$13,"self-impl!");
		const doc=exports.doc=`For running code in \`test\` properties.`;
		const test=exports.test=function test(){
			_ms.assert(_61_63,[`x`,`y`,`b`],_ms.unlazy(build)(_yield=>{
				const obj=(()=>{
					const built={};
					const a=built.a=(()=>{
						const built={};
						const test=built.test=(()=>{
							const built={};
							const x=built.x=function x(){
								_yield(`x`)
							};
							const y=built.y=function y(){
								_yield(`y`)
							};
							return built
						})();
						return built
					})();
					const b=built.b=_ms.unlazy(empty_45Object_33)();
					_ms.unlazy(self_45impl_33)(test_45special,b,()=>{
						_yield(`b`)
					});
					const c=built.c=null;
					return built
				})();
				return _64$maybe_45test(`obj`,obj,true)
			}))
		};
		const test_45special=exports["test-special"]=new (Method)((()=>{
			const built={};
			built[`name`]="test-special";
			const doc=built.doc=`Something special to do with this value when the test runner reacher it.
May return a $.`;
			const args=built.args=1;
			const allow_45null_63=built["allow-null?"]=true;
			const _default=built.default=function _default(){};
			return built
		})());
		impl_33(test_45special,Impl_45Type,function(){
			const _this=this;
			return $all((()=>{
				const built=[];
				for(let prototype of _63p(_this,`prototype`)){
					for(let prop_45name of _64p_45all(prototype)){
						const _63prop_45val=_63try(()=>{
							return p(prototype,prop_45name)
						});
						for(let proto_45fun of _63prop_45val){
							_ms.addMany(built,_64$maybe_45test(_ms.lazy(()=>`${_this.name}#${prop_45name.toString()}`),proto_45fun,false,true))
						}
					}
				};
				return built
			})())
		});
		impl_33(test_45special,Kind,function(){
			const _this=this;
			return (()=>{
				const built=[];
				for(;;){
					_ms.addMany(built,_64$_45from_45any(impl_45for(test_45special,Impl_45Type)(_this)));
					for(let test of _63p(_this,`implementor-test`)){
						for(let implementor of concrete_45implementors(_this)){
							_ms.addMany(built,_64$test_45test_45fun(implementor,test,_ms.lazy(()=>`${_this}.implementor-test of ${implementor}`),false,implementor))
						}
					};
					break
				};
				return built
			})()
		});
		const $test_45all=exports["$test-all"]=(()=>{
			const built={};
			const doc=built.doc=`Tests all modules.`;
			return _ms.set(_64all_45modules=>{
				_ms.checkContains(_64,_64all_45modules,"@all-modules");
				return $all((()=>{
					const built=[];
					for(let _ of _64all_45modules){
						_ms.addMany(built,_64$test_45module(_))
					};
					return built
				})())
			},built)
		})();
		const $test_45module=exports["$test-module"]=(()=>{
			const built={};
			const doc=built.doc=`Treats an Object as a module and tests it.`;
			return _ms.set(_45module=>{
				_ms.checkContains(Object,_45module,"-module");
				return $all(_64$test_45module(_45module))
			},built)
		})();
		const _64$test_45module=function _64$test_45module(_45module){
			_ms.checkContains(Object,_45module,"-module");
			const module_45name=_63_45or(_63p(_45module,`name`),`<anonymous module>`);
			return _64$maybe_45test(module_45name,_45module,true)
		};
		const all_45tested=empty(Id_45Set);
		const _64$maybe_45test=function _64$maybe_45test(test_45name,value,is_45module,is_45proto_45prop){
			return (()=>{
				if(all_45tested.has(value)){
					return []
				} else {
					all_45tested.add(value);
					return _64$test_45single(_ms.lazy(()=>_ms.unlazy(test_45name)),value,is_45module,is_45proto_45prop)
				}
			})()
		};
		const $test_45fun=exports["$test-fun"]=(()=>{
			const built={};
			const doc=built.doc=`TODO`;
			const test=built.test=function test(){};
			return _ms.set(_=>{
				_ms.checkContains(Function,_,"_");
				return $all(_64$test_45single(`${_}`,_,false,false))
			},built)
		})();
		const $test_45single=exports["$test-single"]=(()=>{
			const built={};
			const doc=built.doc=`TODO`;
			const test=built.test=function test(){};
			return _ms.set(_=>{
				return $all(_64$test_45single("",_,false,false))
			},built)
		})();
		const _64$test_45single=function _64$test_45single(test_45name,value,is_45module,is_45proto_45prop){
			return (()=>{
				const built=[];
				for(;;){
					_ms.addMany(built,_64$_45from_45any(test_45special(value)));
					{
						const _=value;
						if(((is_45module||_ms.contains(ObjLit,_))||_ms.contains(Function,_))){
							for(let prop_45name of _64p(_)){
								const next_45name=_ms.lazy(()=>`${_ms.unlazy(test_45name)}.${prop_45name}`);
								const prop_45val=p(_,prop_45name);
								{
									const _=prop_45name;
									if(_61_63(_,`test`)){
										_ms.addMany(built,_64$test_45test_45prop(value,prop_45val,_ms.lazy(()=>_ms.unlazy(next_45name)),is_45proto_45prop))
									} else if(_61_63(_,`$test`)){
										_ms.addMany(built,_64$test_45$test_45prop(prop_45val,_ms.lazy(()=>_ms.unlazy(next_45name)),is_45proto_45prop))
									} else {
										_ms.addMany(built,_64$maybe_45test(_ms.lazy(()=>_ms.unlazy(next_45name)),prop_45val,false,false))
									}
								}
							}
						} else if((_ms.contains(Object,_)&&p_63(_,`test`))){
							_ms.addMany(built,_64$test_45test_45prop(_,_.test,_ms.lazy(()=>`${_ms.unlazy(test_45name)}.test`),false))
						} else {}
					};
					break
				};
				return built
			})()
		};
		const _64$test_45test_45prop=function _64$test_45test_45prop(value,value_45test,test_45name,is_45proto_45prop){
			return (()=>{
				const built=[];
				for(;;){
					const _=value_45test;
					if(_ms.contains(Function,_)){
						_ms.addMany(built,_64$test_45test_45fun(value,value_45test,_ms.lazy(()=>"@$test-test-prop"),is_45proto_45prop))
					};
					if(_ms.contains(ObjLit,_)){
						for(let sub_45name of _64p(_)){
							_ms.addMany(built,_64$test_45test_45prop(value,p(_,sub_45name),_ms.lazy(()=>`${_ms.unlazy(test_45name)}.${sub_45name}`),false))
						}
					};
					break
				};
				return built
			})()
		};
		const _64$test_45$test_45prop=function _64$test_45$test_45prop(value_45$test,test_45name){
			_ms.checkContains(_ms.sub(Function,Generator),value_45$test,"value-$test");
			const built=[];
			_ms.add(built,$annotate_45errors(_ms.lazy(()=>`${_ms.unlazy(test_45name)}: `),$ing(value_45$test)));
			return built
		};
		const _64$test_45test_45fun=function _64$test_45test_45fun(value,value_45test,test_45name,is_45proto_45prop){
			const args=[].slice.call(arguments,4);
			_ms.checkContains(Function,value_45test,"value-test");
			const ano=_ms.lazy(()=>`${_ms.unlazy(test_45name)}: `);
			const _=annotate_45errors(_ms.lazy(()=>_ms.unlazy(ano)),()=>{
				return value_45test(...args)
			});
			return (()=>{
				if((_ms.contains(Map,_)||_ms.contains(Id_45Map,_))){
					if(! _ms.contains(Function,value))throw (()=>{
						return `Test of ${_ms.unlazy(test_45name)} returned a Map, but the value is not callable.`
					})();
					annotate_45errors(_ms.lazy(()=>_ms.unlazy(ano)),()=>{
						if(is_45proto_45prop){
							assert_45this_45call_33(value,_)
						} else {
							assert_45call_33(value,_)
						}
					});
					return []
				} else if(_ms.contains($,_)){
					return [$annotate_45errors(_ms.lazy(()=>_ms.unlazy(ano)),_)]
				} else if(defined_63(_)){
					return annotate_45errors(_ms.lazy(()=>_ms.unlazy(ano)),()=>{
						throw new (Error)(`Test must return Map or $.`)
					})
				} else {
					return []
				}
			})()
		};
		const _64$_45from_45any=function _64$_45from_45any(test_45result){
			return (()=>{
				const _=test_45result;
				if(_ms.contains(_64,_)){
					for(let elem of _){
						if(! _ms.contains($,elem))throw new (Error)(`Result of test should be $, @[$], or undefined.
Got @ containing: ${elem}`)
					};
					return _
				} else if(_ms.contains($,_)){
					return [_]
				} else if(defined_63(_)){
					throw new (Error)(`Result of test should be $, @[$], or undefined. Got: ${_}`)
				} else {
					return []
				}
			})()
		};
		const name=exports.name=`run-tests`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvbWV0YS90ZXN0cy9ydW4tdGVzdHMubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUF1QkEsc0JBQU07RUFHTix3QkFDUSxlQUFBO2NBQUMsT0FBRyxDQUFFLElBQUksSUFBSSx1QkFBWSxRQUNLO0lBQXJDLFVBQ0ssS0FBQTs7S0FBSixnQkFDRSxLQUFBOztNQUFELHNCQUNLLEtBQUE7O09BQUosZ0JBQ0ssWUFBQTtRQUFKLE9BQU87O09BQ1IsZ0JBQ0ssWUFBQTtRQUFKLE9BQU87Ozs7OztLQUNWO2dDQUNXLGVBQWEsRUFDSSxJQUFBO01BQTNCLE9BQU87O0tBQ1IsZ0JBQUc7OztXQUNKLGlCQUFjLE1BQUssSUFBSTtHQUFBO0VBQUE7RUFHekIsNkNBQWMsS0FBSSxRQUNNLEtBQUE7O1NBQXZCLFFBQUE7R0FDQSxvQkFDQztHQUVELHNCQUFNO0dBQ04sMkNBQWE7R0FDYiw2QkFDVyxtQkFBQTs7O0VBR1osUUFBTSxlQUFhLFlBQ1ksVUFBQTtTQW9CYTtVQXBCM0MsS0FBVTs7WUFBQSxhQUFhLEtBb0JvQixNQXBCWCxhQUNVO0tBQXBDLFFBQUEsZUFBYSxXQUFPLFdBQ1M7TUFDakMsb0JBQVksT0FDTSxJQUFBO2NBQWpCLEVBQUUsVUFBVTtNQUFBO01BQ1IsUUFBQSxlQUFhLGNBQ1M7eUJBSXRCLDhCQUFlLEdBVXFCLGNBVlosMEJBQXVCLFlBQVUsTUFBTTtNQUFBO0tBQUE7SUFBQTs7OztFQUl2RSxRQUFNLGVBQWEsS0FDTyxVQUFBO1NBS2tCO1VBSHZDOztXQUFBO3VCQUFDLGtCQUFjLFdBQVMsZUFBYSxhQUdFO0tBRnJDLFFBQUEsUUFBUSxLQUU2QixNQUZwQixvQkFDaUI7TUFBakMsUUFBQSxlQUFlLHdCQUNxQixPQUFLO3lCQUF6QyxzQkFBZ0IsWUFBWSxrQkFBTyxHQUFDLDZCQUEyQixlQUFjLE1BQU07TUFBQTtLQUFBO0tBQ3pGO0lBQUE7Ozs7RUFFRix1Q0FDVSxLQUFBOztHQUFULG9CQUFNO2tCQUNMLGtCQUNnQztzQkFEbkI7V0FDYixLQUFVOzthQUFBLEtBQUEsaUJBQ1k7d0JBQWpCLGtCQUFBO0tBQUE7Ozs7O0VBRVAsNkNBQ2EsS0FBQTs7R0FBWixvQkFBTTtrQkFDTCxXQUNjO3NCQW1EUjtXQW5ETixLQUFNLGtCQUFjO0dBQUE7O0VBR3RCLHdCQUFpQiwyQkFBQSxVQUNjO3FCQStDdkI7R0EvQ1Asb0JBQWMsU0FBTSxLQUFHLFVBQVMsUUFBUTtVQUN4QyxpQkFBYSxjQUFZLFVBQVE7RUFBQTtFQUdsQyxtQkFBYSxNQUFNO0VBR25CLHVCQUFnQiwwQkFBQSxZQUFXLE1BQU0sWUFBVSxrQkFDYTtVQUNuRDtJQUFILEdBQUEsaUJBQWUsT0FDSztZQUFuQjtJQUFBLE9BRUc7S0FBSCxpQkFBZTtZQUNmLHdEQUF5QixNQUFNLFlBQVU7SUFBQTtHQUFBO0VBQUE7RUFFNUMsdUNBQ1UsS0FBQTs7R0FBVCxvQkFBTTtHQUNOLHNCQUNRLGVBQUE7a0JBQ1AsR0FDVTtzQkF3REs7V0F4RGYsS0FBTSxrQkFBZSxHQUFDLElBQUksRUFBRSxNQUFNO0dBQUE7O0VBRXBDLDZDQUNhLEtBQUE7O0dBQVosb0JBQU07R0FDTixzQkFDUSxlQUFBO2tCQUNQLEdBQ0M7V0FBRCxLQUFNLGtCQUFlLEdBQUUsRUFBRSxNQUFNO0dBQUE7O0VBRWpDLHdCQUFpQiwyQkFBQSxZQUFXLE1BQU0sWUFBVSxrQkFDYTtVQUVwRDs7V0FBQTt1QkFBQyxrQkFBYSxlQUFhO0tBQ3hCO01BQUEsUUFBQTtNQUNMLEdBQUEsRUFBRywwQkFBVyxPQUFELGtCQTBDQyxTQTFDTyxJQUNTO09BQXhCLFFBQUEsZUFBYSxLQUFBLEdBQ0c7UUFBcEIsK0JBQWMsOEJBQWE7UUFDM0IsaUJBQVcsRUFBRSxFQUFFO1FBRVQ7U0FBQSxRQUFBO1NBQ0wsR0FBQSxPQUFHLEVBQUcsUUFDSzs0QkFBTix1QkFBaUIsTUFBTSxpREFBb0I7U0FBQSxPQUNoRCxHQUFBLE9BQUcsRUFBRyxTQUNNOzRCQUFQLHdCQUFrQixpREFBb0I7U0FBQSxPQUV2Qzs0QkFBQyx1REFBd0IsV0FBUyxNQUFNO1NBQUE7UUFBQTtPQUFBO01BQUEsT0FFL0MsR0FBQSxjQUFLLE9BQUQsSUFBUyxLQUFHLEVBQUcsU0FDTTt5QkFBcEIsdUJBQWlCLEVBQUUsb0JBQVMsbUNBQWtCO01BQUEsT0FFL0M7S0FBQTtLQUNMO0lBQUE7Ozs7RUFFRiw2QkFBb0IsZ0NBQUEsTUFBTSxhQUFXLFlBQVcsa0JBQ2tDO1VBRTdFOztXQUFBO0tBQUgsUUFBSTtLQUdKLGdCQWlCZSxTQWpCWCxHQUNTO3dCQUFSLHNCQUFnQixNQUFNLDBCQUFZLG9CQUFLO0tBQUE7S0FDNUMsZ0JBQUssT0FBRCxHQUNPO01BQUwsUUFBQSxjQUFZLEtBQUEsR0FDRzt5QkFBZix1QkFBaUIsTUFBTyxFQUFFLEVBQUUseUJBQVksOEJBQWEsY0FBVztNQUFBO0tBQUE7S0FDdEU7SUFBQTs7OztFQUVGLDhCQUFxQixpQ0FBQSxjQUFnQyxZQUNVOzZCQVM5QyxTQVZ5Qjs7aUJBQ3ZDLGdDQUFtQixnQ0FBZ0IsS0FBSzs7O0VBRTNDLDRCQUFtQiwrQkFBQSxNQUFNLGFBQW9CLFlBQVcsa0JBQ3FCOztxQkFNNUQ7R0FOaEIsdUJBQVE7R0FDUixRQUFJLGdEQUNzQixJQUFBO1dBQXpCLGFBQVcsR0FBQTtHQUFBO1VBRVI7SUFDSCxHQUFBLGNBQUksSUFBRCxpQkFBTSxTQUFELElBQ087S0FBTixrQkFBTSxTQUFOLGFBQ3FCLEtBQUE7YUFBM0I7O0tBQ0YsZ0RBQ3VCLElBQUE7TUFDakIsR0FBSixrQkFDYTtPQUFaLHdCQUFrQixNQUFNO01BQUEsT0FFckI7T0FBSCxpQkFBYSxNQUFNO01BQUE7S0FBQTtZQUN0QjtJQUFBLE9BQ0QsZ0JBQUMsRUFBRCxHQUNFO1lBQUQsQ0FBRSxpREFBc0I7SUFBQSxPQUN6QixHQUFBLFdBQUEsR0FDUztZQUFSLGdEQUN1QixJQUFBO01BQXRCLGtCQUFROztXQUVOO1lBQUg7SUFBQTtHQUFBO0VBQUE7RUFFSCx3QkFBZSwyQkFBQSxjQUNXO1VBQXBCO0lBQUEsUUFBQTtJQUNKLGdCQUFDLElBQUQsR0FDRTtLQUFJLFFBQUEsUUFBUSxFQUNDO01BQUwsa0JBQUssRUFBTCx3QkFDUCxxRUFDbUI7O1lBQ3JCO0lBQUEsT0FDRCxnQkFBQyxFQUFELEdBQ0U7WUFBRCxDQUFDO0lBQUEsT0FDRixHQUFBLFdBQUEsR0FDUztLQUFSLGtCQUFRLHdEQUFzRDtXQUUzRDtZQUFIO0lBQUE7R0FBQTtFQUFBO0VBcE1ILHdCQUFBIiwiZmlsZSI6Im1ldGEvdGVzdHMvcnVuLXRlc3RzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=