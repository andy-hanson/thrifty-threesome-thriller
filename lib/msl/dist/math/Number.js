"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../compare","../control","../js","../Type/Method","../Type/Pred-Type","./methods","../Function","../Try"],(exports,compare_0,control_1,js_2,Method_3,Pred_45Type_4,methods_5,Function_6,Try_7)=>{
	exports._get=_ms.lazy(()=>{
		const compare=_ms.getDefaultExport(compare_0),_$0=_ms.getModule(compare_0),_61_63=_ms.get(_$0,"=?"),_60_63=_ms.get(_$0,"<?"),_60_61_63=_ms.get(_$0,"<=?"),_62_63=_ms.get(_$0,">?"),_62_61_63=_ms.get(_$0,">=?"),_$1=_ms.getModule(control_1),opr=_ms.get(_$1,"opr"),_$2=_ms.getModule(js_2),id_61_63=_ms.get(_$2,"id=?"),js_45bar=_ms.get(_$2,"js-bar"),js_60=_ms.get(_$2,"js<"),js_60_61=_ms.get(_$2,"js<="),js_62=_ms.get(_$2,"js>"),js_62_61=_ms.get(_$2,"js>="),js_43=_ms.get(_$2,"js+"),js_45=_ms.get(_$2,"js-"),js_42=_ms.get(_$2,"js*"),js_47=_ms.get(_$2,"js/"),js_45mod=_ms.get(_$2,"js-mod"),_$3=_ms.getModule(Method_3),impl_33=_ms.get(_$3,"impl!"),Pred_45Type=_ms.getDefaultExport(Pred_45Type_4),_$4=_ms.getModule(Pred_45Type_4),Opt=_ms.get(_$4,"Opt"),_$5=_ms.getModule(methods_5),_43=_ms.get(_$5,"+"),_45=_ms.get(_$5,"-"),_42=_ms.get(_$5,"*"),_47=_ms.get(_$5,"/"),_$6=_ms.lazyGetModule(Function_6),spread_33=_ms.lazyProp(_$6,"spread!"),_$7=_ms.lazyGetModule(Try_7),fails_63=_ms.lazyProp(_$7,"fails?");
		const Int=exports.Int=new (Pred_45Type)((()=>{
			const built={};
			built[`name`]="Int";
			const doc=built.doc=`A multiple of 1.
This only contains Numbers for which integer methods return sensible results, AKA safe ints.
This is anything between Number.MIN_SAFE_INTEGER and Number.MAX_SAFE_INTEGER.`;
			const test=built.test=function test(){
				const assert_45int_33=function assert_45int_33(_){
					_ms.assert(_ms.contains,Int,_)
				};
				const forbid_45int_33=function forbid_45int_33(_){
					_ms.assertNot(_ms.contains,Int,_)
				};
				_ms.unlazy(spread_33)(assert_45int_33,(()=>{
					const built=[];
					_ms.add(built,1);
					_ms.add(built,Number.MIN_SAFE_INTEGER);
					_ms.add(built,Number.MAX_SAFE_INTEGER);
					return built
				})());
				_ms.unlazy(spread_33)(forbid_45int_33,(()=>{
					const built=[];
					_ms.add(built,1.1);
					_ms.add(built,_45(Number.MIN_SAFE_INTEGER,1));
					_ms.add(built,_43(Number.MAX_SAFE_INTEGER,1));
					return built
				})())
			};
			const predicate=built.predicate=Number.isSafeInteger;
			return built
		})());
		const Nat=exports.Nat=new (Pred_45Type)((()=>{
			const built={};
			built[`name`]="Nat";
			const doc=built.doc=`Any counting number, including \`0\`.`;
			const test=built.test=function test(){
				_ms.assert(_ms.contains,Nat,0);
				_ms.assertNot(_ms.contains,Nat,- 1)
			};
			const predicate=built.predicate=function predicate(_){
				return (_ms.contains(Int,_)&&_60_61_63(0,_))
			};
			return built
		})());
		impl_33(compare,Number,function(other){
			const _this=this;
			_ms.checkContains(Number,other,"other");
			return _45(_this,other)
		});
		impl_33(_61_63,Number,(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[Number.NaN,Number.NaN],true);
				return built
			};
			return _ms.set(function(other){
				const _this=this;
				return id_61_63(_this,other)
			},built)
		})());
		impl_33(_60_63,Number,function(other){
			const _this=this;
			_ms.checkContains(Number,other,"other");
			return js_60(_this,other)
		});
		impl_33(_60_61_63,Number,function(other){
			const _this=this;
			_ms.checkContains(Number,other,"other");
			return js_60_61(_this,other)
		});
		impl_33(_62_63,Number,function(other){
			const _this=this;
			_ms.checkContains(Number,other,"other");
			return js_62(_this,other)
		});
		impl_33(_62_61_63,Number,function(other){
			const _this=this;
			_ms.checkContains(Number,other,"other");
			return js_62_61(_this,other)
		});
		impl_33(_43,Number,function(other){
			const _this=this;
			_ms.checkContains(Number,other,"other");
			return js_43(_this,other)
		});
		impl_33(_45,Number,function(other){
			const _this=this;
			_ms.checkContains(Number,other,"other");
			return js_45(_this,other)
		});
		impl_33(_42,Number,function(other){
			const _this=this;
			_ms.checkContains(Number,other,"other");
			return js_42(_this,other)
		});
		impl_33(_47,Number,function(other){
			const _this=this;
			_ms.checkContains(Number,other,"other");
			return js_47(_this,other)
		});
		const sign=exports.sign=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[- 8],- 1);
				_ms.assoc(built,[0],0);
				_ms.assoc(built,[8],1);
				return built
			};
			return _ms.set(_=>{
				_ms.checkContains(Number,_,"_");
				return (()=>{
					if(_60_63(0,_)){
						return 1
					} else if(_60_63(_,0)){
						return - 1
					} else {
						return 0
					}
				})()
			},built)
		})();
		const remainder=exports.remainder=(()=>{
			const built={};
			const doc=built.doc=`Remainder of \`a\` after dividing by \`b\`.
Sign of result is sign of \`a\`. Sign of \`b\` is ignored.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[2,3],2);
				_ms.assoc(built,[2,- 3],2);
				_ms.assoc(built,[- 2,3],- 2);
				_ms.assoc(built,[- 2,- 3],- 2);
				return built
			};
			return _ms.set((numerator,denominator)=>{
				_ms.checkContains(Number,numerator,"numerator");
				_ms.checkContains(Number,denominator,"denominator");
				return js_45mod(numerator,denominator)
			},built)
		})();
		const int_47=exports["int/"]=(()=>{
			const built={};
			const doc=built.doc=`Integer division: throws out any remainder.
This is the default in other programming languages, but in Mason \`/ 1 2\` is 0.5, not 0.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[3,2],1);
				_ms.assoc(built,[- 3,2],- 2);
				return built
			};
			return _ms.set((a,b)=>{
				_ms.checkContains(Number,a,"a");
				_ms.checkContains(Number,b,"b");
				return round_45down(_47(a,b))
			},built)
		})();
		const modulo=exports.modulo=(()=>{
			const built={};
			const doc=built.doc=`Mathematical modulus.
Smallest positive number which can be added to a multiple of \`denominator\` to get \`numerator\`."`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[2,3],2);
				_ms.assoc(built,[2,- 3],2);
				_ms.assoc(built,[- 2,3],1);
				_ms.assoc(built,[- 2,- 3],1);
				return built
			};
			return _ms.set((numerator,denominator)=>{
				_ms.checkContains(Number,numerator,"numerator");
				_ms.checkContains(Number,denominator,"denominator");
				const res=(()=>{
					if(_60_63(numerator,0)){
						return _43(abs(denominator),remainder(numerator,denominator))
					} else {
						return remainder(numerator,denominator)
					}
				})();
				divisible_63(_45(numerator,res),denominator);
				return res
			},built)
		})();
		const divisible_63=exports["divisible?"]=(()=>{
			const built={};
			const doc=built.doc=`Whether an integer number of \`b\` can add up to \`a\`.`;
			const test=built.test=function test(){
				_ms.assert(divisible_63,4,2);
				_ms.assert(divisible_63,4,- 2);
				_ms.assertNot(divisible_63,3,2)
			};
			return _ms.set((a,b)=>{
				_ms.checkContains(Number,a,"a");
				_ms.checkContains(Number,b,"b");
				return _61_63(0,remainder(a,b))
			},built)
		})();
		const log_45e=exports["log-e"]=function log_45e(_){
			_ms.checkContains(Number,_,"_");
			return Math.log(_)
		};
		const log=exports.log=(()=>{
			const built={};
			const doc=built.doc=`Mathematical logarithm.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assert(near_63,log(10,0.01),- 2);
				_ms.assoc(built,[2,8],3);
				return built
			};
			return _ms.set((base,n)=>{
				_ms.checkContains(Number,base,"base");
				_ms.checkContains(Number,n,"n");
				return _47(log_45e(n),log_45e(base))
			},built)
		})();
		const abs=exports.abs=(()=>{
			const built={};
			const doc=built.doc=`Negates \`a\` until it is positive.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[1],1);
				_ms.assoc(built,[- 1],1);
				return built
			};
			return _ms.set(a=>{
				_ms.checkContains(Number,a,"a");
				return Math.abs(a)
			},built)
		})();
		const pow=exports.pow=(()=>{
			const built={};
			const doc=built.doc=`\`a\` raised to the power of \`b\`.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[2,3],8);
				return built
			};
			return _ms.set((a,b)=>{
				_ms.checkContains(Number,a,"a");
				_ms.checkContains(Number,b,"b");
				return Math.pow(a,b)
			},built)
		})();
		const square=exports.square=function square(_){
			_ms.checkContains(Number,_,"_");
			return _42(_,_)
		};
		const square_45root=exports["square-root"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[4],2);
				_ms.assert(_ms.unlazy(fails_63),()=>{
					square_45root(- 1)
				});
				return built
			};
			return _ms.set(_=>{
				_ms.checkContains(Number,_,"_");
				if(! _60_61_63(0,_))throw new (Error)(`Can't take square root of negative number ${_}.`);
				return Math.sqrt(_)
			},built)
		})();
		const round=exports.round=(()=>{
			const built={};
			const doc=built.doc=`Closest integer.
Rounds up to break ties.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[- 0.5],- 0);
				_ms.assoc(built,[0.5],1);
				return built
			};
			return _ms.set(_=>{
				_ms.checkContains(Number,_,"_");
				return Math.round(_)
			},built)
		})();
		const round_45down=exports["round-down"]=(()=>{
			const built={};
			const doc=built.doc=`Greatest integer no greater than \`a\`.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[- 0.5],- 1);
				_ms.assoc(built,[0.5],0);
				return built
			};
			return _ms.set(_=>{
				_ms.checkContains(Number,_,"_");
				return Math.floor(_)
			},built)
		})();
		const round_45up=exports["round-up"]=(()=>{
			const built={};
			const doc=built.doc=`Least integer no less than \`a\`.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[- 0.5],- 0);
				_ms.assoc(built,[0.5],1);
				return built
			};
			return _ms.set(_=>{
				_ms.checkContains(Number,_,"_");
				return Math.ceil(_)
			},built)
		})();
		const round_45towards_450=exports["round-towards-0"]=(()=>{
			const built={};
			const doc=built.doc=`\`round-down\` if positive, else \`round-up\`.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[- 0.5],0);
				_ms.assoc(built,[0.5],0);
				return built
			};
			return _ms.set(_=>{
				_ms.checkContains(Number,_,"_");
				return js_45bar(_,0)
			},built)
		})();
		const near_63=exports["near?"]=(()=>{
			const built={};
			const doc=built.doc=`Whether they are within sig-figs precision.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[1000.9,1000,3],true);
				_ms.assoc(built,[1000.9,1000,4],false);
				_ms.assoc(built,[0.001001,0.001,3],true);
				_ms.assoc(built,[0.001001,0.001,4],false);
				_ms.assoc(built,[0.001,- 0.001,1],false);
				_ms.assoc(built,[0.00999,0,2],true);
				_ms.assoc(built,[0,0.00999,2],true);
				return built
			};
			return _ms.set((a,b,sig_45figs)=>{
				_ms.checkContains(Number,b,"b");
				_ms.checkContains(_ms.sub(Opt,Nat),sig_45figs,"sig-figs");
				sig_45figs=opr(sig_45figs,6);
				return (()=>{
					if(_61_63(a,0)){
						return near_450_63(b,sig_45figs)
					} else if(_61_63(b,0)){
						return near_450_63(a,sig_45figs)
					} else {
						const avg_45mag=_47(_43(abs(a),abs(b)),2);
						const n_45digits_45avg_45mag=round_45down(log(10,avg_45mag));
						const scale=pow(10,_42(- 1,n_45digits_45avg_45mag));
						const scaled_45diff=_45(_42(a,scale),_42(b,scale));
						const epsilon=pow(10,_42(- 1,sig_45figs));
						return _60_63(abs(scaled_45diff),epsilon)
					}
				})()
			},built)
		})();
		const near_450_63=exports["near-0?"]=(()=>{
			const built={};
			const doc=built.doc=`Whether it is close to zero.
It must be \`0.0...\` where there are \`sig-figs\` 0s after the decimal point.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[0.00999,2],true);
				_ms.assoc(built,[0.01,2],false);
				return built
			};
			return _ms.set((_,sig_45figs)=>{
				_ms.checkContains(_ms.sub(Opt,Nat),sig_45figs,"sig-figs");
				sig_45figs=opr(sig_45figs,6);
				const max=pow(10,_42(- 1,sig_45figs));
				return _60_63(abs(_),max)
			},built)
		})();
		const neg=exports.neg=(()=>{
			const built={};
			const doc=built.doc=`TODO`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[1],- 1);
				_ms.assoc(built,[0],- 0);
				return built
			};
			return _ms.set(_=>{
				_ms.checkContains(Number,_,"_");
				return _42(- 1,_)
			},built)
		})();
		const mid=exports.mid=(()=>{
			const built={};
			const doc=built.doc=`TODO`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[0,1],0.5);
				return built
			};
			return _ms.set((a,b)=>{
				_ms.checkContains(Number,a,"a");
				_ms.checkContains(Number,b,"b");
				return _47(_43(a,b),2)
			},built)
		})();
		const name=exports.name=`Number`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvbWF0aC9OdW1iZXIubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFXQSxzQkFBSyxLQUFJLGFBQ1MsS0FBQTs7U0FBakIsUUFBQTtHQUNBLG9CQUNDO0dBR0Qsc0JBQ1EsZUFBQTtJQUFQLHNCQUFnQix5QkFBQSxFQUNDOzZCQUFOLElBQUY7SUFBQTtJQUNULHNCQUFnQix5QkFBQSxFQUNDO2dDQUFOLElBQUY7SUFBQTswQkFDRCxnQkFDVyxLQUFBOzttQkFBaEI7bUJBK09TO21CQUFBOzs7MEJBNU9KLGdCQUNXLEtBQUE7O21CQUFoQjttQkFDQSxJQTBPUyx3QkExT2lCO21CQUMxQixJQXlPUyx3QkF6T2lCOzs7O0dBQzlCLGdDQXdPYTs7O0VBdE9kLHNCQUFLLEtBQUksYUFDUyxLQUFBOztTQUFqQixRQUFBO0dBQ0Esb0JBQU07R0FDTixzQkFDUSxlQUFBOzRCQUFHLElBQUY7K0JBQ0csSUFBSDs7R0FDVCxnQ0FBWSxtQkFBQSxFQUNDO1dBQVosY0FBSyxJQUFELElBQU0sVUFBSSxFQUFFO0dBQUE7OztFQUlqQixRQUFNLFFBMk5PLE9BM05VLFNBQUEsTUFDWTtTQXFCOUI7cUJBcU1RO1VBMU5aLElBcUJJLE1BckJHO0VBQUE7RUFDUixRQUFNLE9BeU5PLE9BeE5FLEtBQUE7O0dBQWQsc0JBQ08sZUFBQTs7b0JBQU4sQ0F1TlcsdUJBdk5nQjs7O2tCQUMxQixTQUFBLE1BQ0s7VUFnQkg7V0FoQkgsU0FnQkcsTUFoQk87R0FBQTs7RUFDWixRQUFNLE9Bb05PLE9BcE5LLFNBQUEsTUFDWTtTQWN6QjtxQkFxTVE7VUFuTlosTUFjSSxNQWRLO0VBQUE7RUFDVixRQUFNLFVBa05PLE9BbE5NLFNBQUEsTUFDWTtTQVkxQjtxQkFxTVE7VUFqTlosU0FZSSxNQVpNO0VBQUE7RUFDWCxRQUFNLE9BZ05PLE9BaE5LLFNBQUEsTUFDWTtTQVV6QjtxQkFxTVE7VUEvTVosTUFVSSxNQVZLO0VBQUE7RUFDVixR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