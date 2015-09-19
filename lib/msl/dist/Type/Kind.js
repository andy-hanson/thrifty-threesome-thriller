"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../compare","../js","../private/bootstrap","./Method","../at/at","./Impl-Type","../methods","../Try","./Method","./Impl-Type"],(exports,compare_0,js_1,bootstrap_2,Method_3,_64_4,Impl_45Type_5,methods_6,Try_7,Method_8,Impl_45Type_9)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(compare_0),_61_63=_ms.get(_$0,"=?"),_$1=_ms.getModule(js_1),defined_63=_ms.get(_$1,"defined?"),js_61_61=_ms.get(_$1,"js=="),js_45sub=_ms.get(_$1,"js-sub"),_$2=_ms.getModule(bootstrap_2),implContains=_ms.get(_$2,"implContains"),pAdd=_ms.get(_$2,"pAdd"),_$3=_ms.getModule(Method_3),impl_33=_ms.get(_$3,"impl!"),propagate_45method_45down_33=_ms.get(_$3,"propagate-method-down!"),self_45impl_33=_ms.get(_$3,"self-impl!"),_64=_ms.lazy(()=>_ms.getDefaultExport(_64_4)),_$4=_ms.lazyGetModule(Impl_45Type_5),Self_45Type=_ms.lazyProp(_$4,"Self-Type"),_$5=_ms.lazyGetModule(methods_6),freeze=_ms.lazyProp(_$5,"freeze"),frozen_63=_ms.lazyProp(_$5,"frozen?"),_$6=_ms.lazyGetModule(Try_7),fails_45with_63=_ms.lazyProp(_$6,"fails-with?"),Method=_ms.lazy(()=>_ms.getDefaultExport(Method_8)),Impl_45Type=_ms.lazy(()=>_ms.getDefaultExport(Impl_45Type_9));
		const Kind=exports.default=(()=>{
			const _=class Kind{
				constructor(params){
					_ms.assert(_ms.contains,String,params.name);
					Object.defineProperty(this,`name`,(()=>{
						const built={};
						const value=built.value=params.name;
						return built
					})());
					_ms.newProperty(this,"super-kinds",(()=>{
						const _=params["super-kinds"];
						if(defined_63(_)){
							return _
						} else {
							return []
						}
					})());
					_ms.newProperty(this,"implementors",(()=>{
						const _=params.implementors;
						if(defined_63(_)){
							return _ms.unlazy(freeze)(_)
						} else {
							return []
						}
					})());
					_ms.newProperty(this,"symbol-for-isa",(()=>{
						const _=params["symbol-for-isa"];
						if(defined_63(_)){
							return _
						} else {
							return Symbol(`isa-${this.name}`)
						}
					})());
					_ms.newProperty(this,"prototype",(()=>{
						const _=params.prototype;
						if(defined_63(_)){
							return _
						} else {
							return Object.create(null)
						}
					})());
					pAdd(this.prototype,this["symbol-for-isa"],true);
					for(let _ of this.implementors){
						on_45implementor_33(_,this)
					}
				}
			};
			implContains(_,function(_){
				const _this=this;
				return Boolean((! js_61_61(_,null)&&js_45sub(_,_this["symbol-for-isa"])))
			});
			return _
		})();
		_ms.newProperty(Kind,"test",()=>{
			const A=new (Kind)((()=>{
				const built={};
				built[`name`]="A";
				return built
			})());
			const B=new (Kind)((()=>{
				const built={};
				built[`name`]="B";
				return built
			})());
			const C=class C{
				dummy(){
					const _this=this;
					return _this
				}
			};
			kind_33(B,A);
			kind_33(C,B);
			const c=new (C)();
			_ms.assert(_ms.contains,A,c);
			const X=new (Kind)((()=>{
				const built={};
				built[`name`]="X";
				return built
			})());
			const Y=new (Kind)((()=>{
				const built={};
				built[`name`]="Y";
				return built
			})());
			const Z=class Z{
				dummy(){
					const _this=this;
					return _this
				}
			};
			kind_33(Z,Y);
			kind_33(Y,X);
			const z=new (Z)();
			_ms.assert(_ms.contains,X,z);
			const asdf=new (_ms.unlazy(Method))((()=>{
				const built={};
				built[`name`]="asdf";
				const doc=built.doc=`asdf_s its arguments.`;
				return built
			})());
			impl_33(asdf,X,()=>{
				return 1
			});
			_ms.assert(_61_63,asdf(z),1);
			_ms.assert(_ms.contains,X,z);
			const Closed=new (Kind)((()=>{
				const built={};
				built[`name`]="Closed";
				const implementors=built.implementors=[C,Z];
				return built
			})());
			_ms.assert(_ms.unlazy(fails_45with_63),`Closed is not open to new subtypes.`,()=>{
				kind_33(X,Closed)
			})
		});
		const can_45subtype_63=exports["can-subtype?"]=(()=>{
			const built={};
			const doc=built.doc=`Whether a Kind accepts new subtypes.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[_ms.unlazy(Impl_45Type)],true);
				return built
			};
			return _ms.set(_=>{
				_ms.checkContains(Kind,_,"_");
				return ! _ms.unlazy(frozen_63)(_.implementors)
			},built)
		})();
		const unchecked_45kind_33=exports["unchecked-kind!"]=(()=>{
			const built={};
			const doc=built.doc=`kind! without any checks.
Necessary if trying to implement Impl-Type itself.`;
			return _ms.set((implementor,kind)=>{
				kind.implementors.push(implementor);
				on_45implementor_33(implementor,kind)
			},built)
		})();
		const concrete_45implementors=exports["concrete-implementors"]=(()=>{
			const built={};
			const doc=built.doc=`List of Impl-Types inheriting from this.
Does not include inheriting Kinds, but does include their implementors.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				const X=new (Kind)((()=>{
					const built={};
					built[`name`]="X";
					return built
				})());
				const Y=new (Kind)((()=>{
					const built={};
					built[`name`]="Y";
					return built
				})());
				const Z=class Z{
					dummy(){
						const _this=this;
						return _this
					}
				};
				const W=class W{
					dummy(){
						const _this=this;
						return _this
					}
				};
				kind_33(Y,X);
				kind_33(Z,X);
				kind_33(W,Y);
				_ms.assoc(built,[X],[W,Z]);
				return built
			};
			return _ms.set(kind=>{
				_ms.checkContains(Kind,kind,"kind");
				return _ms.checkContains(_ms.unlazy(_64),(()=>{
					const built=[];
					for(let _ of kind.implementors){
						if(_ms.contains(Kind,_)){
							_ms.addMany(built,concrete_45implementors(_))
						} else {
							_ms.add(built,_)
						}
					};
					return built
				})(),"res")
			},built)
		})();
		const kind_33=exports["kind!"]=(()=>{
			const built={};
			const doc=built.doc=`Makes one Impl-Type a subtype of a Kind.
Kinds can subtype each other.`;
			const test=built.test=`See Impl-Type.test.`;
			return _ms.set((implementor,kind,method_45impls)=>{
				_ms.checkContains(Kind,kind,"kind");
				if(! can_45subtype_63(kind))throw new (Error)(`${kind} is not open to new subtypes.`);
				_ms.assertNot(kind_63,implementor,kind);
				unchecked_45kind_33(implementor,kind);
				if(defined_63(method_45impls)){
					for(let _ of method_45impls){
						impl_33(js_45sub(_,0),implementor,js_45sub(_,1))
					}
				}
			},built)
		})();
		const self_45kind_33=exports["self-kind!"]=(()=>{
			const built={};
			const doc=built.doc=`TODO`;
			const test=built.test=function test(){};
			return _ms.set((implementor,kind,method_45impls)=>{
				_ms.checkContains(Object,implementor,"implementor");
				_ms.checkContains(Kind,kind,"kind");
				kind_33(new (_ms.unlazy(Self_45Type))(implementor),kind);
				if(defined_63(method_45impls)){
					for(let _ of method_45impls){
						self_45impl_33(js_45sub(_,0),implementor,js_45sub(_,1))
					}
				}
			},built)
		})();
		const kind_63=exports["kind?"]=(()=>{
			const built={};
			const doc=built.doc=`Whether one Impl-Type is a subtype of a Kind."
implementor may itself be a Kind.`;
			const test=built.test=`See Impl-Type.test.`;
			return _ms.set((implementor,kind)=>{
				_ms.checkContains(Kind,kind,"kind");
				return (()=>{
					const _=implementor;
					if(_ms.contains(Kind,_)){
						return _["super-kinds"].some(super_45kind=>{
							return (_61_63(super_45kind,kind)||kind_63(super_45kind,kind))
						})
					} else {
						const _=implementor.prototype;
						return _ms.contains(kind,_)
					}
				})()
			},built)
		})();
		const _64p_45all=function _64p_45all(_){
			return Object.getOwnPropertyNames(_).concat(Object.getOwnPropertySymbols(_))
		};
		const on_45implementor_33=function on_45implementor_33(_,kind){
			if(_ms.contains(Kind,_)){
				_["super-kinds"].push(kind)
			};
			inherit_45methods_33(_,kind)
		};
		const inherit_45methods_33=function inherit_45methods_33(implementor,kind){
			const rec_33=function rec_33(kind){
				for(let property of _64p_45all(kind.prototype)){
					propagate_45method_45down_33(implementor,property,js_45sub(kind.prototype,property))
				};
				for(let _ of kind["super-kinds"]){
					rec_33(_)
				}
			};
			rec_33(kind)
		};
		const name=exports.name=`Kind`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvVHlwZS9LaW5kLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBdUJBLDJCQUNXLEtBQ1A7U0FESDtJQUtXLFlBQUEsT0FDTTs2QkFBSSxPQUFaO0tBZ0wyQixzQkE5S2IsS0FBTSxPQUNLLEtBQUE7O01BQWhDLHdCQUFPOzs7cUJBRVIsbUJBQW9CO01BQUEsUUFBQTtNQUNuQixHQUFBLFdBQUEsR0FDUztjQUNSO01BQUEsT0FFRztjQUFIO01BQUE7S0FBQTtxQkFFRixvQkFBcUI7TUFBQSxRQUFBO01BQ3BCLEdBQUEsV0FBQSxHQUNTO2lDQUNSO01BQUEsT0FFRztjQUFIO01BQUE7S0FBQTtxQkFFRixzQkFBdUI7TUFBQSxRQUFBO01BQ3RCLEdBQUEsV0FBQSxHQUNTO2NBQ1I7TUFBQSxPQUVHO2NBQUgsT0FBUSxPQUFLOzs7cUJBRWYsaUJBQWtCO01BQUEsUUFBQTtNQUNqQixHQUFBLFdBQUEsR0FDUztjQUNSO01BQUEsT0FFRztjQWlKOEIsY0FqSm5CO01BQUE7S0FBQTtLQUVoQixLQUFLLGVBQVcsdUJBQWdCO0tBQzNCLFFBQUEsS0FBQSxrQkFDYTtNQUFqQixvQkFBZ0IsRUFBRTtLQUFBO0lBQUE7R0FBQTtHQXhDbkIsYUFBYSxFQUFJLFNBQUEsRUFDQztVQXlIaEI7V0F4SEQsUUFBUSxDQUFLLEVBQUksU0FBSyxFQUFFLE9BQU8sU0FBTyxFQXdIckM7O1VBM0hIO0VBQUE7a0JBNkNELFlBQ2MsSUFBQTtHQUNaLFFBQUksS0FBSSxNQUNJLEtBQUE7O1VBQVgsUUFBQTs7O0dBQ0QsUUFBSSxLQUFJLE1BQ0ksS0FBQTs7VUFBWCxRQUFBOzs7R0FDRCxRQUNTO1dBRUM7V0FxRVI7WUFBQTtJQUFBO0dBQUE7R0FwRUYsUUFBTSxFQUFFO0dBQ1IsUUFBTSxFQUFFO0dBQ1IsUUFBSSxLQUFJOzJCQUNFLEVBQUY7R0FHUixRQUFJLEtBQUksTUFDSSxLQUFBOztVQUFYLFFBQUE7OztHQUNELFFBQUks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