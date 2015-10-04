"use strict";
define(["msl/private/boot","exports","howler","msl/io/time","msl/cash","./dom","./is-threesomeq","msl/at/at","msl/compare"],(_boot,exports,howler_0,time_1,$_2,dom_3,is_45threesome_63_4,_64_5,compare_6)=>{
	_ms.getModule(_boot);
	const _$0=_ms.getModule(howler_0),Howl=_ms.get(_$0,"Howl"),_$1=_ms.getModule(time_1),$after_45time=_ms.get(_$1,"$after-time"),_$2=_ms.getModule($_2),$done=_ms.get(_$2,"$done"),_$3=_ms.getModule(dom_3),elem=_ms.get(_$3,"elem"),on=_ms.get(_$3,"on"),is_45threesome_63=_ms.getDefaultExport(is_45threesome_63_4),_$4=_ms.getModule(_64_5),empty_63=_ms.get(_$4,"empty?"),empty_33=_ms.get(_$4,"empty!"),_45_33=_ms.get(_$4,"-!"),_$5=_ms.getModule(compare_6),_61_63=_ms.get(_$5,"=?");
	const get_45set=new (Howl)({
		src:`sound/get-set.wav`
	});
	const bad_45set=new (Howl)({
		src:`sound/bad-set.wav`
	});
	const CardSelect=exports.default=class CardSelect{
		constructor(game){
			_ms.newProperty(this,"game",game);
			_ms.newMutableProperty(this,"selected-cards",[]);
			_ms.newMutableProperty(this,"hint-cards",[]);
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
			for(let _ of _this["selected-cards"]){
				_["set-selected!"](false)
			};
			for(let _ of _this["hint-cards"]){
				_["set-highlight!"](false)
			};
			_this["select-on"]=true;
			_this["selected-ards"]=[];
			_this["hint-cards"]=[]
		}
		"is-hinting?"(){
			const _this=this;
			return ! empty_63(_this["hint-cards"])
		}
		"show-hint!"(hint_45cards){
			const _this=this;
			_this["-deselect-all!"]();
			_this["hint-cards"]=hint_45cards;
			for(let _ of _this["hint-cards"]){
				_["set-highlight!"](true)
			}
		}
		"-card-clicked!"(card){
			const _this=this;
			if((_this.game.isPlaying()&&_this["select-on"])){
				if(card["selected?"]){
					_this["-deselect-card!"](card)
				} else {
					_this["-select-card!"](card)
				}
			}
		}
		"-select-card!"(card){
			const _this=this;
			_this["selected-cards"].push(card);
			card["set-selected!"](true);
			_this["-check-for-set!"]()
		}
		"-check-for-set!"(){
			const _this=this;
			if(_61_63(_this["selected-cards"].length,3)){
				const ok_63=is_45threesome_63(_ms.sub(_this["selected-cards"],0),_ms.sub(_this["selected-cards"],1),_ms.sub(_this["selected-cards"],2));
				(ok_63?get_45set:bad_45set).play();
				_this["select-on"]=false;
				$done($after_45time(600,()=>{
					_this["select-on"]=true;
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
			_this.game.table["reset-cards!"](_this["selected-cards"]);
			_this["-deselect-all!"]();
			_this.game.onSet()
		}
		"-deselect-all!"(){
			const _this=this;
			for(let _ of _this["selected-cards"]){
				_["set-selected!"](false)
			};
			empty_33(_this["selected-cards"]);
			for(let _ of _this["hint-cards"]){
				_["set-highlight!"](false)
			};
			empty_33(_this["hint-cards"])
		}
		"-deselect-card!"(card){
			const _this=this;
			_45_33(_this["selected-cards"],card);
			card["set-selected!"](false)
		}
		"-context-menu!"(){
			const _this=this;
			const any_45selected_45cards_63=(! empty_63(_this["selected-cards"])&&_this["select-on"]);
			if(any_45selected_45cards_63){
				_this["-deselect-all!"]()
			};
			return ! any_45selected_45cards_63
		}
	};
	const name=exports.name=`CardSelect`;
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvQ2FyZFNlbGVjdC5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0NBT0EsZ0JBQVUsS0FBSSxNQUFLO01BQU87O0NBQzFCLGdCQUFVLEtBQUksTUFBSztNQUFPOztDQUUxQixpQ0FDaUI7RUFBTCxZQUFBLEtBQ0s7OzBCQUFmLHNCQUFvQjswQkFDcEIsa0JBQWdCO0dBRWYsS0FBTSxzQkFDeUIsSUFBQTtXQUEvQjs7R0FFSSxRQUFBLEtBQUEsc0JBQ2lCO0lBQXJCLEdBQUksUUFBTyxPQUNTLElBQUE7S0FBbkIsdUJBQWdCO0lBQUE7R0FBQTtFQUFBO1lBR1I7U0FrRVQ7R0FsRUksUUFBQSxLQWtFSix3QkFqRW1CO0lBQW5CLG1CQUFnQjtHQUFBO0dBQ1osUUFBQSxLQWdFSixvQkEvRGU7SUFBZixvQkFBaUI7R0FBQTtHQStEakIsbUJBN0RhO0dBNkRiLHVCQTVEaUI7R0E0RGpCLG9CQTNEYztFQUFBO2lCQUdEO1NBd0RiO1VBeERELEVBc0QrQixTQUU5Qjs7ZUF0RGEsYUFDVTtTQXFEdkI7R0FBQTtHQUFBLG9CQXBEYztHQUNWLFFBQUEsS0FtREosb0JBbERlO0lBQWYsb0JBQWlCO0dBQUE7RUFBQTttQkFFQSxLQUNJO1NBK0NyQjtHQS9DRCxHQUFJLENBK0NILDRDQTlDbUM7SUFDOUIsR0FBSixrQkFDYztLQTRDZix5QkE1Q21CO0lBQUEsT0FFZDtLQTBDTCx1QkExQ2lCO0lBQUE7R0FBQTtFQUFBO2tCQUVELEtBQ0k7U0F1Q3BCO0dBQUEsNkJBdkNvQjtHQUNyQixzQkFBbUI7R0FzQ2xCOztxQkFsQ2tCO1NBa0NsQjtHQWxDRCxHQUFJLE9Ba0NILCtCQWxDNkIsR0FDQztJQUM5QixZQUFNLDBCQWdDTix3QkFoQ29DLFdBZ0NwQyx3QkFoQ3VELFdBZ0N2RCx3QkFoQzBFO0lBQ3BFLENBQUEsTUFBSSxVQUFRO0lBK0JsQixtQkE3QmM7SUFDZCxNQUFPLGNBQVksSUFDTSxJQUFBO0tBMkJ6QixtQkEzQmU7S0FFVCxHQUFKLE1BQ0c7TUF3Qkw7WUF0Qk07TUFzQk47Ozs7O2NBbkJXO1NBbUJYO0dBQUE7R0FBQTtHQUFBOztvQkFkaUI7U0FjakI7R0FkSSxRQUFBLEtBY0osd0JBYm1CO0lBQW5CLG1CQUFnQjtHQUFBO0dBSWpCLFNBU0M7R0FYSSxRQUFBLEtBV0osb0JBVmU7SUFBZixvQkFBaUI7R0FBQTtHQUNsQixTQVNDOztvQkFQa0IsS0FDSTtTQU10QjtHQU5ELE9BTUMsd0JBTmtCO0dBQ25CLHNCQUFtQjtFQUFBO29CQUdGO1NBRWhCO0dBRkQsZ0NBQXNCLENBQUssRUFBSSxTQUU5QjtHQURELEdBQUksMEJBQ21CO0lBQXRCOztVQUNELEVBQUk7RUFBQTtDQUFBO0NBMUZOLHdCQUFBIiwiZmlsZSI6Ii4vQ2FyZFNlbGVjdC5qcyJ9