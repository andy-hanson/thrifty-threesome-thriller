"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../control","../../Type/Pred-Type","../at","../at-Type","./Map","../../compare","../../to-string","../at","../Seq/Seq"],(exports,control_0,Pred_45Type_1,_64_2,_64_45Type_3,Map_4,compare_5,to_45string_6,_64_7,Seq_8)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(control_0),opr=_ms.get(_$0,"opr"),_$1=_ms.getModule(Pred_45Type_1),Opt=_ms.get(_$1,"Opt"),_64=_ms.getDefaultExport(_64_2),_$2=_ms.getModule(_64_2),_43_43_33=_ms.get(_$2,"++!"),_64_45Type=_ms.getDefaultExport(_64_45Type_3),_$3=_ms.getModule(_64_45Type_3),empty=_ms.get(_$3,"empty"),Map=_ms.getDefaultExport(Map_4),_$4=_ms.getModule(Map_4),get_45or_45add_33=_ms.get(_$4,"get-or-add!"),_$5=_ms.lazyGetModule(compare_5),_61_63=_ms.lazyProp(_$5,"=?"),to_45string=_ms.lazy(()=>_ms.getDefaultExport(to_45string_6)),_$6=_ms.lazyGetModule(_64_7),keep=_ms.lazyProp(_$6,"keep"),_$7=_ms.lazyGetModule(Seq_8),seq_61_63=_ms.lazyProp(_$7,"seq=?");
		const add_45to_45_64_33=exports["add-to-@!"]=(()=>{
			const built={};
			const doc=built.doc=`Treat \`map\` as a multi-map and add \`added\` to the @ associated with \`key\`.
\`@-type\` is the type to use to create the \`@\` if it's not already there.`;
			const test=built.test=function test(){
				const _=empty(Map);
				add_45to_45_64_33(_,1,[1]);
				_ms.assert(_ms.unlazy(_61_63),_ms.sub(_,1),[1]);
				add_45to_45_64_33(_,1,[1]);
				_ms.assert(_ms.unlazy(_61_63),_ms.sub(_,1),[1,1])
			};
			return _ms.set((map,key,added,_64_45type)=>{
				_ms.checkContains(Map,map,"map");
				_ms.checkContains(_64,added,"added");
				_ms.checkContains(_ms.sub(Opt,_64_45Type),_64_45type,"@-type");
				const _=get_45or_45add_33(map,key,_ms.lazy(()=>(()=>{
					return empty(opr(_64_45type,Array))
				})()));
				return _43_43_33(_,added)
			},built)
		})();
		const group=exports.group=(()=>{
			const built={};
			const doc=built.doc=`Creates groups of elements which all have the same result for some function.
\`(group @x f)[k]\` should be \`f`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				const _64sample=[1,`1`,2,`2`];
				_ms.assoc(built,[_64sample,_ms.unlazy(to_45string)],(()=>{
					const built=new (global.Map)();
					_ms.assoc(built,`1`,[1,`1`]);
					_ms.assoc(built,`2`,[2,`2`]);
					return built
				})());
				_ms.assert(_ms.unlazy(seq_61_63),_ms.sub(group(_64sample,_ms.unlazy(to_45string)),`1`),_ms.unlazy(keep)(_64sample,_=>{
					return _ms.unlazy(_61_63)(_ms.unlazy(to_45string)(_),`1`)
				}));
				return built
			};
			return _ms.set((_64value,group_45by)=>{
				_ms.checkContains(_64,_64value,"@value");
				_ms.checkContains(Function,group_45by,"group-by");
				const map=empty(Map);
				for(let _ of _64value){
					const key=group_45by(_);
					add_45to_45_64_33(map,key,[_])
				};
				return map
			},built)
		})();
		const name=exports.name=`multi-map`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvQC9NYXAvbXVsdGktbWFwLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBWUEsNkNBQ1UsS0FBQTs7R0FBVCxvQkFDQztHQUVELHNCQUNRLGVBQUE7SUFBUCxRQUFJLE1BQU07SUFDVixrQkFBVSxFQUFFLEVBQUUsQ0FBQzswQ0FDSixFQUFFLEdBQUcsQ0FBQztJQUNqQixrQkFBVSxFQUFFLEVBQUUsQ0FBQzswQ0FDSixFQUFFLEdBQUcsQ0FBQyxFQUFFO0dBQUE7a0JBQ25CLENBQUEsSUFBUSxJQUFJLE1BQVEsYUFDa0I7c0JBRGxDO3NCQUFjOzhCQUFTLElBQUk7SUFDL0IsUUFBSSxrQkFBWSxJQUFJLGlCQUNLLEtBQUE7WUFBeEIsTUFBTyxJQUFJLFdBQU87SUFBQTtXQUNuQixVQUFJLEVBQUU7R0FBQTs7RUFFUiwwQkFDTSxLQUFBOztHQUFMLG9CQUNDO0dBRUQsc0JBQ08sZUFBQTs7SUFBTixnQkFBVSxDQUFDLEVBQUcsSUFBRyxFQUFHO29CQUNwQixDQUFDLG1DQUNxQixLQUFBOztxQkFBcEIsSUFBTSxDQUFDLEVBQUc7cUJBQ1YsSUFBTSxDQUFDLEVBQUc7Ozs2Q0FHRyxNQUFNLG1DQUFvQixzQkFBVSxVQUFTLEdBQ0M7dURBQXpELEdBQVk7Ozs7a0JBQ2hCLENBQUEsU0FBUyxhQUNpQjtzQkFEbkI7c0JBQVc7SUFDbEIsVUFBTSxNQUFNO0lBQ1AsUUFBQSxLQUFBLFNBQ007S0FBVixVQUFNLFdBQVM7S0FDZixrQkFBVSxJQUFJLElBQUksQ0FBQztJQUFBO1dBQ3BCO0dBQUE7O0VBN0NGLHdCQUFBIiwiZmlsZSI6ImF0L01hcC9tdWx0aS1tYXAuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==