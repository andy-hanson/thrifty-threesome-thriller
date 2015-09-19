"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./Boolean","./compare","./js","./methods","./to-string","./Type/Kind","./Type/Pred-Type","./Type/Type","./at/at","./at/at-Type","./at/q","./at/Map/Map","./at/Set/Id-Set","./control","./at/q","./at/Set/Set","./Try"],(exports,Boolean_0,compare_1,js_2,methods_3,to_45string_4,Kind_5,Pred_45Type_6,Type_7,_64_8,_64_45Type_9,_63_10,Map_11,Id_45Set_12,control_13,_63_14,Set_15,Try_16)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(Boolean_0),xor=_ms.get(_$0,"xor"),_$1=_ms.getModule(compare_1),_61_63=_ms.get(_$1,"=?"),_$2=_ms.getModule(js_2),defined_63=_ms.get(_$2,"defined?"),id_61_63=_ms.get(_$2,"id=?"),js_61_61=_ms.get(_$2,"js=="),js_45delete=_ms.get(_$2,"js-delete"),js_45set=_ms.get(_$2,"js-set"),js_45sub=_ms.get(_$2,"js-sub"),js_45typeof=_ms.get(_$2,"js-typeof"),_$3=_ms.getModule(methods_3),freeze=_ms.get(_$3,"freeze"),_$4=_ms.getModule(to_45string_4),inspect=_ms.get(_$4,"inspect"),Kind=_ms.getDefaultExport(Kind_5),_$5=_ms.getModule(Pred_45Type_6),Opt=_ms.get(_$5,"Opt"),_$6=_ms.getModule(Type_7),_61_62=_ms.get(_$6,"=>"),_$7=_ms.lazyGetModule(_64_8),_43_43=_ms.lazyProp(_$7,"++"),all_63=_ms.lazyProp(_$7,"all?"),count=_ms.lazyProp(_$7,"count"),empty_63=_ms.lazyProp(_$7,"empty?"),keep=_ms.lazyProp(_$7,"keep"),_$8=_ms.lazyGetModule(_64_45Type_9),empty=_ms.lazyProp(_$8,"empty"),_63=_ms.lazy(()=>_ms.getDefaultExport(_63_10)),_$9=_ms.lazyGetModule(_63_10),_63_45or=_ms.lazyProp(_$9,"?-or"),Opt_45_62_63=_ms.lazyProp(_$9,"Opt->?"),Map=_ms.lazy(()=>_ms.getDefaultExport(Map_11)),_$10=_ms.lazyGetModule(Map_11),make_45map=_ms.lazyProp(_$10,"make-map"),Id_45Set=_ms.lazy(()=>_ms.getDefaultExport(Id_45Set_12)),_$11=_ms.lazyGetModule(control_13),opr=_ms.lazyProp(_$11,"opr"),_$12=_ms.lazyGetModule(_63_14),_63None=_ms.lazyProp(_$12,"?None"),_63some=_ms.lazyProp(_$12,"?some"),_$13=_ms.lazyGetModule(Set_15),set_61_63=_ms.lazyProp(_$13,"set=?"),_$14=_ms.lazyGetModule(Try_16),fails_63=_ms.lazyProp(_$14,"fails?"),fails_45with_63=_ms.lazyProp(_$14,"fails-with?");
		const Object_45Key=exports["Object-Key"]=new (Kind)((()=>{
			const built={};
			built[`name`]="Object-Key";
			const doc=built.doc=`Can be used as a name for a property of an object.`;
			const implementors=built.implementors=[String,Symbol];
			return built
		})());
		const can_45get_45p_63=exports["can-get-p?"]=(()=>{
			const built={};
			const doc=built.doc=`Whether it's safe to try to directly access properties.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[null],false);
				_ms.assoc(built,[void 0],false);
				_ms.assoc(built,[1],true);
				return built
			};
			return _ms.set(_=>{
				return ! js_61_61(_,null)
			},built)
		})();
		const flag_63=exports["flag?"]=(()=>{
			const built={};
			const doc=built.doc=`If it has a property for the flag, uses that. Otherwise false.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[{
					a:true
				},`a`],true);
				_ms.assoc(built,[{
					a:false
				},`a`],false);
				_ms.assoc(built,[empty_45Object,`a`],false);
				return built
			};
			return _ms.set((obj,flag)=>{
				_ms.checkContains(Object_45Key,flag,"flag");
				return _ms.checkContains(Boolean,_ms.unlazy(_63_45or)(_63p(obj,flag),false),"res")
			},built)
		})();
		const forbidden_45fun_45props=_ms.lazy(()=>_61_62(_ms.unlazy(Id_45Set),[`arguments`,`caller`]));
		const _64p_45all=exports["@p-all"]=(()=>{
			const built={};
			const doc=built.doc=`Every property name directly stored in an object.
Includes non-enumerable properties and symbols.`;
			const test=built.test=function test(){
				const obj=empty_45Object_33();
				p_43_33(obj,`a`,0);
				const sym=Symbol(`s`);
				Object.defineProperty(obj,sym,(()=>{
					const built={};
					const value=built.value=0;
					const enumerable=built.enumerable=false;
					return built
				})());
				_ms.assert(_ms.unlazy(set_61_63),_64p_45all([0,0]),[`0`,`1`,`length`]);
				_ms.assert(_ms.unlazy(set_61_63),_64p_45all(obj),[`a`,sym]);
				_ms.assert(_ms.unlazy(set_61_63),_64p_45all(_64p_45all),[`length`,`name`,`doc`,`test`])
			};
			return _ms.set(_=>{
				const props=Object.getOwnPropertyNames(_);
				const own_45names=(()=>{
					if(_ms.contains(Function,_)){
						return _ms.unlazy(keep)(props,_=>{
							return ! _ms.contains(_ms.unlazy(forbidden_45fun_45props),_)
						})
					} else {
						return props
					}
				})();
				return _ms.unlazy(_43_43)(own_45names,Object.getOwnPropertySymbols(_))
			},built)
		})();
		const _64p=exports["@p"]=(()=>{
			const built={};
			const doc=built.doc=`Like @p-all, but excludes non-enumerable properties and symbols.`;
			const test=built.test=function test(){
				const obj=empty_45Object_33();
				Object.defineProperty(obj,`a`,(()=>{
					const built={};
					const value=built.value=0;
					const enumerable=built.enumerable=false;
					return built
				})());
				const sym=Symbol(`s`);
				Object.defineProperty(obj,sym,(()=>{
					const built={};
					const value=built.value=0;
					const enumerable=built.enumerable=true;
					return built
				})());
				_ms.assert(_ms.unlazy(empty_63),_64p(obj));
				_ms.assert(_ms.unlazy(set_61_63),_64p(_64p),[`doc`,`test`])
			};
			return _ms.set(_=>{
				return (()=>{
					if(can_45get_45p_63(_)){
						return Object.keys(_)
					} else {
						return []
					}
				})()
			},built)
		})();
		const _63p=exports["?p"]=(()=>{
			const built={};
			const doc=built.doc=`\`?\` containing the value of the property, if it exists.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				const x=(()=>{
					const built={};
					const a=built.a=1;
					const b=built.b=null;
					return built
				})();
				_ms.assoc(built,[x,`a`],_ms.unlazy(_63some)(1));
				_ms.assoc(built,[x,`b`],_ms.unlazy(_63some)(null));
				_ms.assoc(built,[x,`toString`],_ms.unlazy(empty)(_ms.unlazy(_63)));
				return built
			};
			return _ms.set((_,prop_45name)=>{
				_ms.checkContains(Object_45Key,prop_45name,"prop-name");
				return p_63(_,prop_45name)?_ms.some((()=>{
					return js_45sub(_,prop_45name)
				})()):_ms.None
			},built)
		})();
		const _63p_45with_45proto=exports["?p-with-proto"]=(()=>{
			const built={};
			const doc=built.doc=`Like \`?p\`, but also looks through the prototype chain.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[1,`toString`],_ms.unlazy(_63some)(Number.prototype.toString));
				_ms.assoc(built,[1,`asdfghjkl`],_ms.unlazy(_63None));
				return built
			};
			return _ms.set((_,prop_45name)=>{
				_ms.checkContains(Object_45Key,prop_45name,"prop-name");
				return (()=>{
					if(can_45get_45p_63(_)){
						return _ms.unlazy(Opt_45_62_63)(js_45sub(_,prop_45name))
					} else {
						return _ms.unlazy(empty)(_ms.unlazy(_63))
					}
				})()
			},built)
		})();
		const p=exports.p=(()=>{
			const built={};
			const doc=built.doc=`Gets the value of a property. Does not include properties in the prototype.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				const x=(()=>{
					const built={};
					const a=built.a=1;
					const b=built.b=null;
					return built
				})();
				_ms.assoc(built,[x,`a`],1);
				_ms.assoc(built,[x,`b`],null);
				_ms.assert(_ms.unlazy(fails_63),()=>{
					return p(`c`)
				});
				return built
			};
			return _ms.set((_,prop_45name)=>{
				_ms.checkContains(Object_45Key,prop_45name,"prop-name");
				_ms.assert(p_63,_,prop_45name);
				return js_45sub(_,prop_45name)
			},built)
		})();
		const p_63=exports["p?"]=(()=>{
			const built={};
			const doc=built.doc=`Whether there is a property by that name.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				const x={
					a:1
				};
				_ms.assoc(built,[x,`a`],true);
				_ms.assoc(built,[x,`b`],false);
				_ms.assoc(built,[x,`toString`],false);
				return built
			};
			return _ms.set((_,prop_45name)=>{
				_ms.checkContains(Object_45Key,prop_45name,"prop-name");
				return (can_45get_45p_63(_)&&Object.prototype.hasOwnProperty.call(_,prop_45name))
			},built)
		})();
		const p_45with_45proto_63=exports["p-with-proto?"]=(()=>{
			const built={};
			const doc=built.doc=`Like \`p?\` but looks through the prototype.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[empty_45Object,`toString`],true);
				return built
			};
			return _ms.set((_,prop_45name)=>{
				_ms.checkContains(Object_45Key,prop_45name,"prop-name");
				return (can_45get_45p_63(_)&&defined_63(js_45sub(_,prop_45name)))
			},built)
		})();
		const object_61_63=exports["object=?"]=(()=>{
			const built={};
			const doc=built.doc=`For Objects, whether they are of the same type and have \`=?\` properties.
For primitives, whether they are \`=?\`.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				const a={
					a:1
				};
				const b={
					a:1
				};
				const c={
					x:3
				};
				_ms.assoc(built,[a,b],true);
				_ms.assoc(built,[a,c],false);
				_ms.assoc(built,[1,1],true);
				_ms.assoc(built,[object_61_63,object_61_63],true);
				return built
			};
			return _ms.set((a,b)=>{
				const null_45a=id_61_63(a,null);
				const null_45b=id_61_63(b,null);
				const obj_45a=(! null_45a&&id_61_63(js_45typeof(a),`object`));
				const obj_45b=(! null_45b&&id_61_63(js_45typeof(b),`object`));
				return (()=>{
					if(! (obj_45a||obj_45b)){
						return id_61_63(a,b)
					} else if(xor(obj_45a,obj_45b)){
						return false
					} else {
						const same_45type=id_61_63(Object.getPrototypeOf(a),Object.getPrototypeOf(b));
						return (same_45type&&(()=>{
							const ak=Object.getOwnPropertyNames(a);
							const bk=Object.getOwnPropertyNames(b);
							return (_61_63(_ms.unlazy(count)(ak),_ms.unlazy(count)(bk))&&(()=>{
								return _ms.unlazy(all_63)(ak,k=>{
									return _61_63(js_45sub(a,k),js_45sub(b,k))
								})
							})())
						})())
					}
				})()
			},built)
		})();
		const empty_45Object=exports["empty-Object"]=Object.freeze(Object.create(Object.prototype));
		const empty_45Object_63=exports["empty-Object?"]=(()=>{
			const built={};
			const doc=built.doc=`Whether there are no properties, not even hidden ones.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[empty_45Object],true);
				_ms.assoc(built,[Object],false);
				return built
			};
			return _ms.set(_=>{
				_ms.checkContains(Object,_,"_");
				return _ms.unlazy(empty_63)(_64p_45all(_))
			},built)
		})();
		const Object_45_62Map=exports["Object->Map"]=(()=>{
			const built={};
			const doc=built.doc=`A Map whose keys are property names and whose values are the properties' values.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[{
					a:1,
					b:2
				}],(()=>{
					const built=new (global.Map)();
					_ms.assoc(built,`a`,1);
					_ms.assoc(built,`b`,2);
					return built
				})());
				return built
			};
			return _ms.set(_=>{
				return _ms.unlazy(make_45map)(_64p(_),_ms.sub(p,_))
			},built)
		})();
		const Map_45_62Object=exports["Map->Object"]=(()=>{
			const built={};
			const doc=built.doc=`Given a Map whose keys are Strings, creates an Object whose Object->Map is that.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				const map=(()=>{
					const built=new (global.Map)();
					_ms.assoc(built,`a`,1);
					_ms.assoc(built,`b`,2);
					return built
				})();
				_ms.assoc(built,[map],{
					a:1,
					b:2
				});
				_ms.assert(_61_63,map,Object_45_62Map(Map_45_62Object(map)));
				_ms.assert(_ms.unlazy(fails_63),()=>{
					return Map_45_62Object((()=>{
						const built=new (global.Map)();
						_ms.assoc(built,1,2);
						return built
					})())
				});
				return built
			};
			return _ms.set(_=>{
				_ms.checkContains(_ms.unlazy(Map),_,"_");
				return (obj=>{
					for(let elem of _){
						p_43_33(obj,_ms.sub(elem,0),_ms.sub(elem,1))
					};
					freeze(obj);
					return obj
				})(empty_45Object_33())
			},built)
		})();
		const prototype=exports.prototype=(()=>{
			const built={};
			const doc=built.doc=`Gets prototype of an object.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[empty_45Object],Object.prototype);
				_ms.assoc(built,[Object_45Key],Kind.prototype);
				return built
			};
			return _ms.set(Object.getPrototypeOf,built)
		})();
		const empty_45Object_33=exports["empty-Object!"]=(()=>{
			const built={};
			const doc=built.doc=`Creates a new Object! with no properties and the given prototype.`;
			const test=built.test=function test(){
				const _=empty_45Object_33();
				_ms.assert(empty_45Object_63,_);
				const child=empty_45Object_33(_);
				_ms.assert(_61_63,_,prototype(child))
			};
			return _ms.set(prototype=>{
				_ms.checkContains(_ms.sub(Opt,Object),prototype,"prototype");
				return Object.create(_ms.unlazy(opr)(prototype,Object.prototype))
			},built)
		})();
		const p_43_33=exports["p+!"]=(()=>{
			const built={};
			const doc=built.doc=`Adds a new immutable property.`;
			const test=built.test=function test(){
				const _=empty_45Object_33();
				p_43_33(_,`a`,1);
				_ms.assert(_61_63,_.a,1);
				_ms.assert(_ms.unlazy(fails_63),()=>{
					return p_43_33(_,`a`,2)
				});
				_ms.assert(_ms.unlazy(fails_63),()=>{
					return p_43_33(`string`,`a`,1)
				})
			};
			return _ms.set((_,prop_45name,val)=>{
				_ms.checkContains(Object,_,"_");
				_ms.checkContains(Object_45Key,prop_45name,"prop-name");
				Object.defineProperty(_,prop_45name,(()=>{
					const built={};
					const enumerable=built.enumerable=true;
					const writable=built.writable=false;
					const value=built.value=val;
					return built
				})())
			},built)
		})();
		const p_43mut_33=exports["p+mut!"]=(()=>{
			const built={};
			const doc=built.doc=`Adds a new mutable property.`;
			const test=built.test=`See \`p!\``;
			return _ms.set((_,prop_45name,val)=>{
				_ms.checkContains(Object,_,"_");
				_ms.checkContains(Object_45Key,prop_45name,"prop-name");
				Object.defineProperty(_,prop_45name,(()=>{
					const built={};
					const enumerable=built.enumerable=true;
					const writable=built.writable=true;
					const value=built.value=val;
					const configurable=built.configurable=true;
					return built
				})())
			},built)
		})();
		const p_33=exports["p!"]=(()=>{
			const built={};
			const doc=built.doc=`Modifies an already-existing property.`;
			const test=built.test=function test(){
				const _=empty_45Object_33();
				p_43mut_33(_,`a`,1);
				p_33(_,`a`,2);
				_ms.assert(_61_63,_.a,2)
			};
			return _ms.set((_,prop_45name,new_45val)=>{
				_ms.checkContains(Object,_,"_");
				_ms.checkContains(Object_45Key,prop_45name,"prop-name");
				_ms.assert(p_63,_,prop_45name);
				js_45set(_,prop_45name,new_45val)
			},built)
		})();
		const p_45_33=exports["p-!"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const _=empty_45Object_33();
				p_43mut_33(_,`a`,1);
				p_45_33(_,`a`);
				_ms.assertNot(p_63,_,`a`)
			};
			return _ms.set((_,prop_45name)=>{
				_ms.checkContains(Object,_,"_");
				_ms.checkContains(Object_45Key,prop_45name,"prop-name");
				_ms.assert(p_63,_,prop_45name);
				js_45delete(_,prop_45name)
			},built)
		})();
		const extend_33=exports["extend!"]=(()=>{
			const built={};
			const doc=built.doc=`Adds all the properties in \`extender\` to \`_\`.`;
			const test=built.test=function test(){
				const _=empty_45Object_33();
				extend_33(_,(()=>{
					const built={};
					const a=built.a=1;
					return built
				})());
				_ms.assert(_61_63,_.a,1)
			};
			return _ms.set((_,extender)=>{
				_ms.checkContains(Object,_,"_");
				_ms.checkContains(Object,extender,"extender");
				Object.assign(_,extender)
			},built)
		})();
		const send=exports.send=(()=>{
			const built={};
			const doc=built.doc=`Calls \`target\`'s method \`method-name\` with the given arguments.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[1,`toFixed`,2],`1.00`);
				_ms.assert(_ms.unlazy(fails_45with_63),`Method \"toFixed\" not implemented by \"1\".`,()=>{
					send_33(`1`,`toFixed`)
				});
				return built
			};
			return _ms.set(function(target,method_45name){
				const args=[].slice.call(arguments,2);
				_ms.checkContains(Object_45Key,method_45name,"method-name");
				const impl=js_45sub(target,method_45name);
				if(! _ms.contains(Function,impl))throw new (Error)(`Method ${inspect(method_45name)} not implemented by ${inspect(target)}.`);
				return impl.apply(target,args)
			},built)
		})();
		const send_33=exports["send!"]=send;
		const object_45merge=exports["object-merge"]=function object_45merge(){
			const objects=[].slice.call(arguments,0);
			return Object.assign(new (Object)(),...objects)
		};
		const name=exports.name=`Object`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvT2JqZWN0Lm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBcUJBLHlDQUFZLEtBQUksTUFDSSxLQUFBOztTQUFuQixRQUFBO0dBQ0Esb0JBQU07R0FDTixzQ0FBYyxDQUFDLE9BeURSOzs7RUF0RFIsNkNBQ1csS0FBQTs7R0FBVixvQkFBTTtHQUNOLHNCQUNPLGVBQUE7O29CQUFOLENBQUMsTUFBUztvQkFDVixDQUFDLFFBQWM7b0JBQ2YsQ0FBQyxHQUFNOzs7a0JBQ1AsR0FDQztXQUFELEVBQUksU0FBSyxFQUFFO0dBQUE7O0VBRWIsK0JBQ00sS0FBQTs7R0FBTCxvQkFBTTtHQUNOLHNCQUNPLGVBQUE7O29CQUNOLENBQUM7T0FBSTtJQUFBLEVBQU8sS0FBTztvQkFDbkIsQ0FBQztPQUFJO0lBQUEsRUFBUSxLQUFPO29CQUNwQixDQUFDLGVBQWMsS0FBTzs7O2tCQUN0QixDQUFTLElBQUksT0FDZTtzQkFEVjs2QkFBakIsNkJBQ0ssS0FBRyxJQUFJLE1BQU07OztFQUVyQiwyQ0FBdUIsNEJBQVUsQ0FBRSxZQUFZO0VBQy9DLG1DQUNPLEtBQUE7O0dBQU4sb0JBQ0M7R0FFRCxzQkFDUSxlQUFBO0lBQVAsVUFBTTtJQUNOLFFBQUksSUFBSyxJQUFHO0lBQ1osVUEyQk0sT0EzQlE7SUEyUUksc0JBMVFJLElBQUksSUFDRyxLQUFBOztLQUE1Qix3QkFBTztLQUNQLGtDQUFZOzs7cUNBQ0UsV0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFFLElBQUksSUFBSTtxQ0FDeEIsV0FBTyxLQUFLLENBQUUsSUFBRztxQ0FFakIsV0FBTyxZQUFRLENBQUUsU0FBUyxPQUFPLE1BQU07O2tCQUN0RCxHQUNDO0lBQUQsWUFrUWtCLDJCQWxRSjtJQUVkLGtCQUNnQjtLQUFmLGdCQXlQWSxTQXpQWixHQUNTOzhCQUFILE1BQU8sR0FDQztjQUFaLG1EQUFJO01BQUE7S0FBQSxPQUVGO2FBQUg7S0FBQTtJQUFBOzhCQUNDLFlB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Qjs4QkFEWCxJQStFTztXQUFBLDhCQTlFRSxVQThFRjs7O0VBNUVuQiw2QkFDSSxLQUFBOztHQUFILG9CQUFNO0dBQ04sc0JBQ1EsZUFBQTtJQUFQLFFBQUk7SUFDSixRQUFJLEVBQUcsSUFBRztlQUNGLE9BQUcsSUFBSTtvQ0FFQyxJQUFBO1lBQWYsUUFBSSxFQUFHLElBQUc7SUFBQTtvQ0FFSyxJQUFBO1lBQWYsUUFBSyxTQUFTLElBQUc7SUFBQTtHQUFBO2tCQUNqQixDQUFBLEVBQVMsWUFBcUIsTUFDRztzQkFpRWpCO3NCQWxFRztJQWtFSCxzQkFqRUssRUFBRSxZQUNTLEtBQUE7O0tBQWhDLGtDQUFZO0tBQ1osOEJBQVU7S0FDVix3QkFBTzs7Ozs7RUFFVixtQ0FDTyxLQUFBOztHQUFOLG9CQUFNO0dBQ04sc0JBQU87a0JBQ0wsQ0FBQSxFQUFTLFlBQXFCLE1BQ0c7c0JBd0RqQjtzQkF6REc7SUF5REgsc0JBeERLLEVBQUUsWUFDUyxLQUFBOztLQUFoQyxrQ0FBWTtLQUNaLDhCQUFVO0tBQ1Ysd0JBQU87S0FDUCxzQ0FBYzs7Ozs7RUFFakIseUJBQ0csS0FBQTs7R0FBRixvQkFBTTtHQUNOLHNCQUNRLGVBQUE7SUFBUCxRQUFJO0lBQ0osV0FBTyxFQUFHLElBQUc7SUFDYixLQUFHLEVBQUcsSUFBRztlQUNELE9BQUcsSUFBSTtHQUFBO2tCQUNkLENBQUEsRUFBUyxZQUFxQixZQUkvQjtzQkF1Q2lCO3NCQTNDRztlQUVYLEtBQUcsRUFBRTtJQUVkLFNBQU8sRUFBRSxZQUFVO0dBQUE7O0VBRXJCLDZCQUNJLEtBQUE7O0dBQUgsc0JBQ1EsZUFBQTtJQUFQLFFBQUk7SUFDSixXQUFPLEVBQUcsSUFBRztJQUNiLFFBQUksRUFBRztrQkFDQyxLQUFHLEVBQUc7O2tCQUNiLENBQUEsRUFBUyxjQUlWO3NCQTJCaUI7c0JBL0JHO2VBRVgsS0FBRyxFQUFFO0lBRWQsWUFBVSxFQUFFO0dBQUE7O0VBR2QsbUNBQ1EsS0FBQTs7R0FBUCxvQkFBTTtHQUNOLHNCQUNRLGVBQUE7SUFBUCxRQUFJO0lBQ0osVUFBUSxFQUNDLEtBQUE7O0tBQVIsZ0JBQUc7OztlQUNJLE9BQUcsSUFBSTtHQUFBO2tCQUNkLENBQUEsRUFBUyxXQUNlO3NCQWdCUjtzQkFBQTtJQUFBLGNBaEJILEVBQUU7R0FBQTs7RUFFbkIsd0JBQ0ssS0FBQTs7R0FBSixvQkFBTTtHQUNOLHNCQUNPLGVBQUE7O29CQUFOLENBQUMsRUFBRyxVQUFTLEdBQU87MkNBQ0MsK0NBQ2dELElBQUE7S0FBcEUsUUFBTyxJQUFJOzs7O2tCQUNaLFNBQUEsT0FBTyxjQUM4Qjs7c0JBRGxCO0lBQ25CLFdBQU8sU0FBTyxPQUFPO0lBQ2Isa0JBQUssU0FBTCx3QkFBc0IsVUFBUSxRQUFRLHFDQUFpQyxRQUFRO1dBQ3ZGLFdBQVcsT0FBTztHQUFBOztFQUVwQiwrQkFBTztFQUVQLDZDQUFlLHlCQUNVOztVQUFMLGNBQUosS0FBSSxVQUFRLEdBQUE7RUFBQTtFQWpVNUIsd0JBQUEiLCJmaWxlIjoiT2JqZWN0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=