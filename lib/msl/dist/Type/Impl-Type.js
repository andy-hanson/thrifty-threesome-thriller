"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./Kind","../compare","../Object","./Method","./Kind"],(exports,Kind_0,compare_1,Object_2,Method_3,Kind_4)=>{
	exports._get=_ms.lazy(()=>{
		const Kind=_ms.getDefaultExport(Kind_0),_$0=_ms.getModule(Kind_0),kind_33=_ms.get(_$0,"kind!"),unchecked_45kind_33=_ms.get(_$0,"unchecked-kind!"),_$1=_ms.lazyGetModule(compare_1),_61_63=_ms.lazyProp(_$1,"=?"),_$2=_ms.lazyGetModule(Object_2),empty_45Object_33=_ms.lazyProp(_$2,"empty-Object!"),Method=_ms.lazy(()=>_ms.getDefaultExport(Method_3)),_$3=_ms.lazyGetModule(Method_3),impl_33=_ms.lazyProp(_$3,"impl!"),_$4=_ms.lazyGetModule(Kind_4),kind_63=_ms.lazyProp(_$4,"kind?");
		const Impl_45Type=exports.default=new (Kind)((()=>{
			const built={};
			built[`name`]="Impl-Type";
			const doc=built.doc=`TODO:REST
Every Impl-Type should have a \`prototype\` property.`;
			const test=built.test=function test(){
				const A=Kind((()=>{
					const built={};
					const doc=built.doc=`A`;
					return built
				})());
				const B=Kind((()=>{
					const built={};
					const doc=built.doc=`B`;
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
				_ms.assert(_ms.unlazy(kind_63),B,A);
				_ms.assert(_ms.unlazy(kind_63),C,B);
				_ms.assert(_ms.unlazy(kind_63),C,A);
				_ms.assertNot(_ms.unlazy(kind_63),A,B)
			};
			return built
		})());
		unchecked_45kind_33(Function,Impl_45Type);
		kind_33(Kind,Impl_45Type);
		const Self_45Type=exports["Self-Type"]=(()=>{
			const _=class Self_45Type{
				constructor(prototype){
					_ms.checkContains(Object,prototype,"prototype");
					_ms.newProperty(this,"prototype",prototype)
				}
			};
			kind_33(_,Impl_45Type);
			return _
		})();
		_ms.newProperty(Self_45Type,"test",()=>{
			const x=_ms.unlazy(empty_45Object_33)();
			const m=new (_ms.unlazy(Method))((()=>{
				const built={};
				built[`name`]="m";
				return built
			})());
			_ms.unlazy(impl_33)(m,new (Self_45Type)(x),()=>{
				return 1
			});
			_ms.assert(_ms.unlazy(_61_63),m(x),1)
		});
		const name=exports.name=`Impl-Type`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvVHlwZS9JbXBsLVR5cGUubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFTQSxrQ0FBVyxLQUFJLE1BQ0ksS0FBQTs7U0FBbEIsUUFBQTtHQUNBLG9CQUNDO0dBRUQsc0JBQ1EsZUFBQTtJQUFQLFFBQUksS0FDSSxLQUFBOztLQUFQLG9CQUFNOzs7SUFDUCxRQUFJLEtBQ0ksS0FBQTs7S0FBUCxvQkFBTTs7O0lBQ1AsUUFDUztZQUVDO1lBQVI7YUFBQTtLQUFBO0lBQUE7SUFDRixRQUFNLEVBQUU7SUFDUixRQUFNLEVBQUU7bUNBQ00sRUFBRTttQ0FDRixFQUFFO21DQUNGLEVBQUU7c0NBQ0YsRUFBRTtHQUFBOzs7RUFFbEIsb0JBQWdCLFNBQVM7RUFDekIsUUFBTSxLQUFLO0VBR1YsdUNBQ2dCLEtBQ1o7U0FESDtJQU9XLFlBQUEsVUFDZ0I7dUJBRE47cUJBQ3BCLGlCQUFhO0lBQUE7R0FBQTtHQVBiLFFBQU0sRUFBRTtVQURUO0VBQUE7a0JBV0QsbUJBQ21CLElBQUE7R0FBbEI7R0FDQSxRQUFJLHlCQUNVLEtBQUE7O1VBQWIsUUFBQTs7O3VCQUNLLEVBQUcsS0FBSSxhQUFVLEdBQ0ksSUFBQTtXQUExQjtHQUFBO2lDQUNXLEVBQUUsR0FBRztFQUFBO0VBcERuQix3QkFBQSIsImZpbGUiOiJUeXBlL0ltcGwtVHlwZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9