"use strict";
define(["msl/private/boot","exports","howler","./CardSelect","./CardTable","./dom","msl/compare","msl/math/methods"],(_boot,exports,howler_0,CardSelect_1,CardTable_2,dom_3,compare_4,methods_5)=>{
	_ms.getModule(_boot);
	const _$0=_ms.getModule(howler_0),Howl=_ms.get(_$0,"Howl"),CardSelect=_ms.getDefaultExport(CardSelect_1),CardTable=_ms.getDefaultExport(CardTable_2),_$1=_ms.getModule(dom_3),elem=_ms.get(_$1,"elem"),on=_ms.get(_$1,"on"),_$2=_ms.getModule(compare_4),_61_63=_ms.get(_$2,"=?"),_$3=_ms.getModule(methods_5),_45=_ms.get(_$3,"-"),_43=_ms.get(_$3,"+"),_42=_ms.get(_$3,"*");
	const times_45up=new (Howl)({
		src:`sound/times-up.wav`
	});
	const GameTime=180;
	const Game=exports.default=class Game{
		constructor(){
			_ms.newProperty(this,"table",new (CardTable)());
			_ms.newProperty(this,"cardSelect",new (CardSelect)(this));
			on(`resize`,window,()=>{
				this["resize!"]()
			});
			on(`click`,elem(`hint`),()=>{
				this.hint()
			});
			on(`click`,elem(`game`),()=>{
				this.clicked()
			})
		}
		isPlaying(){
			const _this=this;
			return _61_63(_this.state,`playing`)
		}
		clicked(){
			const _this=this;
			switch(_this.state){
				case `playing`:{
					break
				}
				case `waiting`:{
					_this["reset!"]();
					break
				}
				case `frozen`:{
					break
				}
				default:throw new (Error)("No branch of `switch` matches.")
			}
		}
		"reset!"(){
			const _this=this;
			_this["resize!"]();
			_this.table["reset!"]();
			_this.cardSelect["reset!"]();
			_this.state=`playing`;
			_this.setScore(0);
			_this.time=GameTime;
			_this.clock()
		}
		clock(){
			const _this=this;
			_this.time=_45(_this.time,1);
			elem(`time`).textContent=_this.time;
			if(_61_63(_this.time,0)){
				times_45up.play();
				_this.state=`frozen`;
				const wait=function wait(){
					_this.state=`waiting`
				};
				setTimeout(wait,5000)
			} else {
				const clock=function clock(){
					_this.clock()
				};
				setTimeout(clock,1000)
			}
		}
		onSet(){
			const _this=this;
			_this.setScore(_43(1,_this.score))
		}
		setScore(new_45score){
			const _this=this;
			_this.score=new_45score;
			elem(`score`).textContent=_this.score
		}
		"resize!"(){
			const _this=this;
			const main=elem(`main`);
			const game=elem(`game`);
			const width=game.offsetWidth;
			const height=_45(main.offsetHeight,elem(`hud`).offsetHeight);
			game.style.borderRadius=(()=>{
				const size=Math.min(width,height);
				return `${_42(size,0.1)}px`
			})();
			_this.table["resize!"](width,height)
		}
		hint(){
			const _this=this;
			_this.setScore(_45(_this.score,1));
			_this.cardSelect["show-hint!"](_this.table["find-set"]())
		}
	};
	const name=exports.name=`Game`;
	return exports
})
//# sourceMappingURL=Game.js.map