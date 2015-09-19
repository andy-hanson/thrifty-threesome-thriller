"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../compare","../js","../private/bootstrap","../to-string","./Impl-Type","./Kind","./Method","../at/q","../Object","../to-string","./Method"],(exports,compare_0,js_1,bootstrap_2,to_45string_3,Impl_45Type_4,Kind_5,Method_6,_63_7,Object_8,to_45string_9,Method_10)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(compare_0),_61_63=_ms.get(_$0,"=?"),_$1=_ms.getModule(js_1),id_61_63=_ms.get(_$1,"id=?"),_$2=_ms.getModule(bootstrap_2),ms=_ms.get(_$2,"ms"),msDef=_ms.get(_$2,"msDef"),to_45string=_ms.getDefaultExport(to_45string_3),Impl_45Type=_ms.getDefaultExport(Impl_45Type_4),Kind=_ms.getDefaultExport(Kind_5),_$3=_ms.getModule(Kind_5),kind_33=_ms.get(_$3,"kind!"),Method=_ms.getDefaultExport(Method_6),_$4=_ms.getModule(Method_6),impl_33=_ms.get(_$4,"impl!"),_$5=_ms.lazyGetModule(_63_7),_63_45or=_ms.lazyProp(_$5,"?-or"),_$6=_ms.lazyGetModule(Object_8),_63p_45with_45proto=_ms.lazyProp(_$6,"?p-with-proto"),_$7=_ms.lazyGetModule(to_45string_9),inspect=_ms.lazyProp(_$7,"inspect"),_$8=_ms.lazyGetModule(Method_10),self_45impl_33=_ms.lazyProp(_$8,"self-impl!");
		const Type=exports.default=new (Kind)((()=>{
			const built={};
			built[`name`]="Type";
			const doc=built.doc=`Anything implementing contains?.
Types are generally used to succinctly make assertions about values.`;
			return built
		})());
		impl_33(to_45string,Type,function(){
			const _this=this;
			return _this.name
		});
		impl_33(to_45string,Kind,function(){
			const _this=this;
			return _this.name
		});
		impl_33(_61_63,Type,function(other){
			const _this=this;
			return id_61_63(_this,other)
		});
		const contains_63=exports["contains?"]=ms.contains;
		const extract=exports.extract=new (Method)((()=>{
			const built={};
			built[`name`]="extract";
			const doc=built.doc=`Given a type and arbitrary value:
	If the value is of the type, return an array of sub-values.
	Otherwise, return \`null\`.
The array of values are taken into local variables.
For example:`;
			const test=built.test=function test(){
				const My_45Type=(()=>{
					const built={};
					const doc=built.doc=`Example type`;
					return built
				})();
				_ms.unlazy(self_45impl_33)(extract,My_45Type,_=>{
					return (()=>{
						if(_61_63(_,`extractable`)){
							return [1,2]
						} else {
							return null
						}
					})()
				});
				const f=function f(_){
					return (()=>{
						{
							const _$=_ms.extract(My_45Type,_);
							if((_$!==null)){
								const a=_$[0],b=_$[1];
								return `${a}${b}`
							} else {
								return `not extractable`
							}
						}
					})()
				};
				_ms.assert(_61_63,`12`,f(`extractable`));
				_ms.assert(_61_63,`not extractable`,f())
			};
			const args=built.args=(()=>{
				const built=[];
				_ms.add(built,`type`);
				_ms.add(built,`candidate`);
				_ms.add(built,[`num-extracteds`,Number]);
				return built
			})();
			return built
		})());
		msDef(`extract`,extract);
		msDef(`checkContains`,(type,value,value_45name)=>{
			if(! _ms.contains(type,value))throw new (Error)(`${value_45name} is no ${type.name}, is a ${type_45of(value).name}: ${_ms.unlazy(inspect)(value)}`);
			return value
		});
		const _61_62=exports["=>"]=new (Method)((()=>{
			const built={};
			built[`name`]="=>";
			const doc=built.doc=`TODO: Don't take additional args...
|convert-to:Type convert-me (may take additional args)
Converts a value to a given type.`;
			const wrap=built.wrap=function wrap(impl,type,converted,opts){
				return (()=>{
					const _=converted;
					if(_ms.contains(type,_)){
						return _
					} else {
						return impl.call(type,_,opts)
					}
				})()
			};
			return built
		})());
		const type_45of=exports["type-of"]=(()=>{
			const built={};
			const doc=built.doc=`Most specific Impl-Type for a value.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[Type],Kind);
				_ms.assoc(built,[null],Object);
				return built
			};
			return _ms.set(_=>{
				return _ms.checkContains(Impl_45Type,_ms.unlazy(_63_45or)(_ms.unlazy(_63p_45with_45proto)(_,`constructor`),Object),"res")
			},built)
		})();
		kind_33(Impl_45Type,Type);
		const name=exports.name=`Type`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvVHlwZS9UeXBlLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBZ0JBLDJCQUFNLEtBQUksTUFDSSxLQUFBOztTQUFiLFFBQUE7R0FDQSxvQkFDQzs7O0VBR0YsUUFBTSxZQUFVLEtBQ08sVUFBQTtTQU1qQjtVQUFBOztFQUpOLFFBQU0sWUFBVSxLQUNPLFVBQUE7U0FHakI7VUFBQTs7RUFETixRQUFNLE9BQUcsS0FBTyxTQUFBLE1BQ0s7U0FBZjtVQUFMLFNBQUssTUFBSztFQUFBO0VBR1gsdUNBQVc7RUFFWCw4QkFBUyxLQUFJLFFBQ00sS0FBQTs7U0FBbEIsUUFBQTtHQUNBLG9CQUNDO0dBS0Qsc0JBQ1EsZUFBQTtJQUNQLGdCQUNTLEtBQUE7O0tBQVIsb0JBQU07OzsrQkFDSSxRQUFRLFVBQVMsR0FBQTtZQUNJO01BQS9CLEdBQUEsT0FBRyxFQUFHLGVBQ1k7Y0FBakIsQ0FBQyxFQUFFO01BQUEsT0FFQTtjQUFIO01BQUE7S0FBQTtJQUFBO0lBRUYsUUFBSyxXQUFBLEVBQUE7WUFDSTtNQUFSOzRCQUFDLFVBQUQ7c0JBQ1k7O2VBQVYsR0FBQyxJQUFHO2NBRUY7ZUFBRjs7Ozs7ZUFFSyxPQUFJLEtBQUssRUFBRztlQUNaLE9BQUksa0JBQWlCO0dBQUE7R0FDOUIsc0JBQ0ssS0FBQTs7a0JBQUQ7a0JBQ0E7a0JBQ0QsQ0FBRSxpQkFBZ0I7Ozs7O0VBRXRCLE1BQU8sVUFBUztFQUVoQixNQUFPLGdCQUFnQixDQUFBLEtBQUssTUFBTSxlQUNVO0dBQW5DLGtCQUFNLEtBQU4seUJBQW1CLEdBQUMsc0JBQW1CLG1CQUFtQixVQUFRLG9DQUF1QjtVQUNqRztFQUFBO0VBRUQsMkJBQUksS0FBSSxRQUNNLEtBQUE7O1NBQWIsUUFBQTtHQUNBLG9CQUNDO0dBR0Qsc0JBQU8sY0FBQSxLQUFLLEtBQUssVUFBVSxLQUNJO1dBQXpCO0tBQUEsUUFBQTtLQUNKLGdCQUFDLEtBQUQsR0FDSzthQUFKO0tBQUEsT0FFRzthQUFILFVBQVUsS0FBSyxFQUFFO0tBQUE7SUFBQTtHQUFBOzs7RUFFckIsbUNBQ1EsS0FBQTs7R0FBUCxvQkFDQztHQUNELHNCQUNPLGVBQUE7O29CQUFOLENBQUMsTUFBUztvQkFDVixDQUFDLE1BRW9DOzs7a0JBRDFCLEdBQ0M7NkJBRFgsaUVBQ21CLEVBQUcsZUFBYzs7O0VBR3RDLFFBQU0sWUFBVTtFQTlGakIsd0JBQUEiLCJmaWxlIjoiVHlwZS9UeXBlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=