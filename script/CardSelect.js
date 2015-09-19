"use strict";
define(["msl/private/boot","exports","howler","msl/io/time","msl/cash","./dom","./is-threesomeq","msl/compare","msl/at/at"],(_boot,exports,howler_0,time_1,$_2,dom_3,is_45threesome_63_4,compare_5,_64_6)=>{
	_ms.getModule(_boot);
	const _$0=_ms.getModule(howler_0),Howl=_ms.get(_$0,"Howl"),_$1=_ms.getModule(time_1),$after_45time=_ms.get(_$1,"$after-time"),_$2=_ms.getModule($_2),$done=_ms.get(_$2,"$done"),_$3=_ms.getModule(dom_3),elem=_ms.get(_$3,"elem"),on=_ms.get(_$3,"on"),is_45threesome_63=_ms.getDefaultExport(is_45threesome_63_4),_$4=_ms.getModule(compare_5),_61_63=_ms.get(_$4,"=?"),_$5=_ms.getModule(_64_6),empty_33=_ms.get(_$5,"empty!"),_45_33=_ms.get(_$5,"-!"),empty_63=_ms.get(_$5,"empty?");
	const get_45set=new (Howl)({
		src:`sound/get-set.wav`
	});
	const bad_45set=new (Howl)({
		src:`sound/bad-set.wav`
	});
	const CardSelect=exports.default=class CardSelect{
		constructor(game){
			_ms.newProperty(this,"game",game);
			_ms.newMutableProperty(this,"selectedCards",[]);
			_ms.newMutableProperty(this,"hintCards",[]);
			elem(`game`).oncontextmenu=()=>{
				return this["-context-menu!"]()
			};
			for(let _ of this.game.table.cards){
				on(`click`,_.cell,()=>{
					this["-card-clicked!"](_)
				})
			}
		}
		"reset!"(){
			const _this=this;
			for(let _ of _this.selectedCards){
				_["set-selected!"](false)
			};
			for(let _ of _this.hintCards){
				_["set-highlight!"](false)
			};
			_this.selectOn=true;
			_this.selectedCards=[];
			_this.hintCards=[]
		}
		"show-hint!"(hint_45cards){
			const _this=this;
			_this["-deselect-all!"]();
			_this.hintCards=hint_45cards;
			for(let _ of _this.hintCards){
				_["set-highlight!"](true)
			}
		}
		"-card-clicked!"(card){
			const _this=this;
			if((_this.game.isPlaying()&&_this.selectOn)){
				if(card["selected?"]){
					_this["-deselect-card!"](card)
				} else {
					_this["-select-card!"](card)
				}
			}
		}
		"-select-card!"(card){
			const _this=this;
			_this.selectedCards.push(card);
			card["set-selected!"](true);
			_this["-check-for-set!"]()
		}
		"-check-for-set!"(){
			const _this=this;
			if(_61_63(_this.selectedCards.length,3)){
				const ok_63=is_45threesome_63(_ms.sub(_this.selectedCards,0),_ms.sub(_this.selectedCards,1),_ms.sub(_this.selectedCards,2));
				(ok_63?get_45set:bad_45set).play();
				_this.selectOn=false;
				$done($after_45time(600,()=>{
					_this.selectOn=true;
					if(ok_63){
						_this["-on-set!"]()
					} else {
						_this["-deselect-all!"]()
					}
				}))
			}
		}
		"-on-set!"(){
			const _this=this;
			_this.game.table["reset-cards!"](_this.selectedCards);
			_this["-deselect-all!"]();
			for(let _ of _this.hintCards){
				_["set-highlight!"](false)
			};
			_this.game.onSet()
		}
		"-deselect-all!"(){
			const _this=this;
			for(let _ of _this.selectedCards){
				_["set-selected!"](false)
			};
			empty_33(_this.selectedCards)
		}
		"-deselect-card!"(card){
			const _this=this;
			_45_33(_this.selectedCards,card);
			card["set-selected!"](false)
		}
		"-context-menu!"(){
			const _this=this;
			const any_45selected_45cards_63=(! empty_63(_this.selectedCards)&&_this.selectOn);
			if(any_45selected_45cards_63){
				_this["-deselect-all!"]()
			};
			return ! any_45selected_45cards_63
		}
	};
	const name=exports.name=`CardSelect`;
	return exports
})
//# sourceMappingURL=CardSelect.js.map