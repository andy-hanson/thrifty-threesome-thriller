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
			_ms.newProperty(this,"card-select",new (CardSelect)(this));
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
			_this["card-select"]["reset!"]();
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
			if(! _this["card-select"]["is-hinting?"]()){
				_this.setScore(_45(_this.score,1));
				_this["card-select"]["show-hint!"](_this.table["find-set"]())
			}
		}
	};
	const name=exports.name=`Game`;
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvR2FtZS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0NBT0EsaUJBQVcsS0FBSSxNQUFLO01BQU87O0NBQzNCLGVBQVc7Q0FFWCwyQkFDVztFQUNBLGFBQUE7bUJBQVQsYUFBUyxLQUFJO21CQUNiLG1CQUFlLEtBQUksWUFBVztHQUU5QixHQUFJLFNBQVEsT0FDUyxJQUFBO0lBQXBCOztHQUNELEdBQUksUUFBUSxLQUFNLFFBQ1MsSUFBQTtJQUExQjs7R0FDRCxHQUFJLFFBQVEsS0FBTSxRQUNTLElBQUE7SUFBMUI7OzthQUdXO1NBMERhO1VBbEN4QixPQWtDd0IsWUExRGQ7O1dBR0E7U0F1RGM7R0F2RGpCLE9BdURpQjtTQXREdkIsVUFDUTs7O1NBQ1IsVUFDUTtLQW1EZTs7O1NBbER2QixTQUNPOzs7Ozs7WUFHQztTQThDZTtHQUFBO0dBQUE7R0FBQTtHQUFBLFlBM0NkO0dBMkNjLGVBMUNmO0dBMENlLFdBekNoQjtHQXlDZ0I7O1NBckNoQjtTQXFDZ0I7R0FBQSxXQURiLElBQ2EsV0FyQ1I7R0FDaEIsS0FBTSxvQkFvQ2tCO0dBbENwQixHQUFKLE9Ba0N3QixXQWxDZixHQUNDO0lBQVQ7SUFpQ3VCLFlBaENaO0lBRVgsV0FDUyxlQUFBO0tBNkJjLFlBN0JYOztJQUNaLFdBQVcsS0FBSztHQUFBLE9BRWI7SUFBSCxZQUNVLGdCQUFBO0tBeUJhOztJQXhCdkIsV0FBVyxNQUFNO0dBQUE7RUFBQTtTQUdWO1NBcUJnQjtHQUFBLGVBckJkLElBQUUsRUFxQlk7O1dBbkJiLFlBQ1M7U0FrQkk7R0FBQSxZQWxCZjtHQUNULEtBQU0scUJBaUJrQjs7YUFkZDtTQWNjO0dBZHpCLFdBQU8sS0FBTTtHQUNiLFdBQU8sS0FBTTtHQUNiLFlBQVE7R0FDUixhQVVZLElBVkQsa0JBQW1CLEtBQU07R0FFcEMsd0JBQzBCLEtBQUE7SUFBekIsV0FBTyxTQUFTLE1BQU07V0FDckIsR0FBQyxJQUFFLEtBQUs7O0dBT2UsdUJBTFYsTUFBTTtFQUFBO1FBR2I7U0FFaUI7R0FGekIsS0FFeUIsc0NBRFM7SUFDVCxlQURiLElBQ2EsWUFESjtJQUNJOzs7O0NBakYzQix3QkFBQSIsImZpbGUiOiIuL0dhbWUuanMifQ==