"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../Type/Method","../../Type/Kind","../at","../at-Type","../q","../Seq/Stream","./Map","./Map-Type","../../compare","../Seq/Seq"],(exports,Method_0,Kind_1,_64_2,_64_45Type_3,_63_4,Stream_5,Map_6,Map_45Type_7,compare_8,Seq_9)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(Method_0),impl_33=_ms.get(_$0,"impl!"),self_45impl_33=_ms.get(_$0,"self-impl!"),_$1=_ms.getModule(Kind_1),kind_33=_ms.get(_$1,"kind!"),self_45kind_33=_ms.get(_$1,"self-kind!"),_$2=_ms.getModule(_64_2),count=_ms.get(_$2,"count"),empty_33=_ms.get(_$2,"empty!"),_$3=_ms.getModule(_64_45Type_3),empty=_ms.get(_$3,"empty"),_$4=_ms.getModule(_63_4),Opt_45_62_63=_ms.get(_$4,"Opt->?"),Stream=_ms.getDefaultExport(Stream_5),Map=_ms.getDefaultExport(Map_6),_$5=_ms.getModule(Map_6),assoc_33=_ms.get(_$5,"assoc!"),_63get=_ms.get(_$5,"?get"),has_45key_63=_ms.get(_$5,"has-key?"),keys=_ms.get(_$5,"keys"),un_45assoc_33=_ms.get(_$5,"un-assoc!"),values=_ms.get(_$5,"values"),Map_45Type=_ms.getDefaultExport(Map_45Type_7),_$6=_ms.lazyGetModule(compare_8),_61_63=_ms.lazyProp(_$6,"=?"),_$7=_ms.lazyGetModule(Seq_9),seq_61_63=_ms.lazyProp(_$7,"seq=?");
		const Id_45Map=exports.default=(()=>{
			const built={};
			const doc=built.doc=`JavaScript's native Map type.
Only considers exactly identical keys =?; this makes it the fastest Map.`;
			return _ms.set(global.Map,built)
		})();
		kind_33(Id_45Map,Map);
		self_45kind_33(Id_45Map,Map_45Type);
		const test=exports.test=function test(){
			const _=empty(Id_45Map);
			assoc_33(_,1,2);
			_ms.assert(_ms.unlazy(_61_63),_ms.sub(_,1),2);
			const key_451=(()=>{
				const built={};
				const a=built.a=1;
				return built
			})();
			assoc_33(_,key_451,3);
			_ms.assert(_ms.unlazy(_61_63),_ms.sub(_,key_451),3);
			const key_452=(()=>{
				const built={};
				const a=built.a=1;
				return built
			})();
			assoc_33(_,key_452,4);
			_ms.assert(_ms.unlazy(_61_63),_ms.sub(_,key_451),3);
			_ms.assert(_ms.unlazy(_61_63),_ms.sub(_,key_452),4);
			_ms.assert(_ms.unlazy(seq_61_63),keys(_),[1,key_451,key_452]);
			_ms.assert(_ms.unlazy(seq_61_63),values(_),[2,3,4])
		};
		self_45impl_33(empty,Id_45Map,()=>{
			return new (Id_45Map)()
		});
		impl_33(count,Id_45Map,function(){
			const _this=this;
			return _this.size
		});
		impl_33(_63get,Id_45Map,function(key){
			const _this=this;
			return Opt_45_62_63(_this.get(key))
		});
		impl_33(has_45key_63,Id_45Map,function(key){
			const _this=this;
			return _this.has(key)
		});
		impl_33(keys,Id_45Map,function(){
			const _this=this;
			return new (Stream)(()=>{
				return _this.keys()
			})
		});
		impl_33(values,Id_45Map,function(){
			const _this=this;
			return new (Stream)(()=>{
				return _this.values()
			})
		});
		impl_33(empty_33,Id_45Map,function(){
			const _this=this;
			_this.clear()
		});
		impl_33(assoc_33,Id_45Map,function(key,val){
			const _this=this;
			_this.set(key,val)
		});
		impl_33(un_45assoc_33,Id_45Map,function(key){
			const _this=this;
			return (_=>{
				_this.delete(key);
				return _
			})(_63get(_this,key))
		});
		const name=exports.name=`Id-Map`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvQC9NYXAvSWQtTWFwLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBZUEsK0JBQ08sS0FBQTs7R0FBTixvQkFDQztrQkFHRDs7RUFFRCxRQUFNLFNBQU87RUFDYixlQUFXLFNBQU87RUFHbEIsd0JBQ1EsZUFBQTtHQUNQLFFBQUksTUFBTTtHQUNWLFNBQU8sRUFBRSxFQUFFO3lDQUNBLEVBQUUsR0FBRztHQUNoQixjQUNPLEtBQUE7O0lBQU4sZ0JBQUc7OztHQUNKLFNBQU8sRUFBRSxRQUFNO3lDQUNKLEVBQUUsU0FBTztHQUNwQixjQUNPLEtBQUE7O0lBQU4sZ0JBQUc7OztHQUNKLFNBQU8sRUFBRSxRQUFNO3lDQUVKLEVBQUUsU0FBTzt5Q0FDVCxFQUFFLFNBQU87b0NBRU4sS0FBQSxHQUFNLENBQUMsRUFBRSxRQUFNO29DQUNmLE9BQUEsR0FBUSxDQUFDLEVBQUUsRUFBRTtFQUFBO0VBRTVCLGVBQVcsTUFBTSxTQUNRLElBQUE7VUFBeEIsS0FBSTtFQUFBO0VBRUwsUUFBTSxNQUFNLFNBQ1MsVUFBQTtTQXVCVjtVQUFBOztFQXJCWCxRQUFNLE9BQUssU0FBUyxTQUFBLElBQ0c7U0FvQlo7VUFwQlYsYUFvQlUsVUFwQkc7RUFBQTtFQUVkLFFBQU0sYUFBUyxTQUFTLFNBQUEsSUFDRztTQWlCaEI7VUFBQSxVQWpCTDtFQUFBO0VBRU4sUUFBTSxLQUFLLFNBQ1MsVUFBQTtTQWNUO1VBZFYsS0FBSSxRQUNRLElBQUE7V0FhRjs7O0VBWFgsUUFBTSxPQUFPLFNBQ1MsVUFBQTtTQVVYO1VBVlYsS0FBSSxRQUNRLElBQUE7V0FTRjs7O0VBUFgsUUFBTSxTQUFPLFNBQ1UsVUFBQTtTQU1aO0dBQUE7O0VBSlgsUUFBTSxTQUFPLFNBQVUsU0FBQSxJQUFJLElBQ0c7U0FHbkI7R0FBQSxVQUhMLElBQUk7RUFBQTtFQUVWLFFBQU0sY0FBVSxTQUFTLFNBQUEsSUFDRztTQUFqQjtVQUFMLElBQ2E7SUFEUixhQUNEOztNQURKLE9BQUssTUFBSztFQUFBO0VBeEVoQix3QkFBQSIsImZpbGUiOiJhdC9NYXAvSWQtTWFwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=