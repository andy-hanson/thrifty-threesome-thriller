"use strict";
define(["msl/private/boot","exports","./Card","./dom","./is-threesomeq","msl/math/methods","msl/at/Range","msl/compare"],(_boot,exports,Card_0,dom_1,is_45threesome_63_2,methods_3,Range_4,compare_5)=>{
	_ms.getModule(_boot);
	const Card=_ms.getDefaultExport(Card_0),_$0=_ms.getModule(dom_1),elem=_ms.get(_$0,"elem"),set_45content_33=_ms.get(_$0,"set-content!"),is_45threesome_63=_ms.getDefaultExport(is_45threesome_63_2),_$1=_ms.getModule(methods_3),_42=_ms.get(_$1,"*"),_43=_ms.get(_$1,"+"),_47=_ms.get(_$1,"/"),Range=_ms.getDefaultExport(Range_4),_$2=_ms.getModule(compare_5),_61_63=_ms.get(_$2,"=?");
	const N_45Rows=3;
	const N_45Cols=4;
	const N_45Cards=_42(N_45Rows,N_45Cols);
	const CardTable=exports.default=class CardTable{
		constructor(){
			set_45content_33(elem(`game`),this["-make-table"]())
		}
		draw(){
			const _this=this;
			for(let _ of _this.cards){
				_["draw!"]()
			}
		}
		"find-set"(){
			const _this=this;
			let res=null;
			let done=false;
			for(let i1 of new (Range)(0,N_45Cards)){
				const c1=_ms.sub(_this.cards,i1);
				for(let i2 of new (Range)(_43(1,i1),N_45Cards)){
					const c2=_ms.sub(_this.cards,i2);
					for(let i3 of new (Range)(_43(1,i2),N_45Cards)){
						const c3=_ms.sub(_this.cards,i3);
						if(is_45threesome_63(c1,c2,c3)){
							res=[c1,c2,c3];
							done=true;
							break
						}
					};
					if(done){
						break
					}
				};
				if(done){
					break
				}
			};
			return res
		}
		"reset!"(){
			const _this=this;
			_this["reset-cards!"](_this.cards)
		}
		"reset-cards!"(cards_45to_45reset){
			const _this=this;
			for(;;){
				for(let _ of cards_45to_45reset){
					_["randomize!"]()
				};
				if(_this["-board-ok?"]()){
					break
				}
			}
		}
		"resize!"(width,height){
			const _this=this;
			const card_45width=_47(width,N_45Cols);
			const card_45height=_47(height,N_45Rows);
			for(let _ of _this.cards){
				_["resize!"](card_45width,card_45height)
			}
		}
		"-make-table"(){
			const _this=this;
			return (_=>{
				_ms.newProperty(_,"id",`cardtable`);
				_ms.newProperty(_this,"cards",[]);
				for(let r of new (Range)(0,N_45Rows)){
					const row=_.insertRow(r);
					for(let c of new (Range)(0,N_45Cols)){
						_this.cards.push(new (Card)(row.insertCell(c)))
					}
				};
				return _
			})(document.createElement(`table`))
		}
		"-is-repeat-on-board?"(){
			const _this=this;
			let res=false;
			for(let i1 of new (Range)(0,N_45Cards)){
				for(let i2 of new (Range)(_43(i1,1),N_45Cards)){
					if(_61_63(_ms.sub(_this.cards,i1).data,_ms.sub(_this.cards,i2).data)){
						res=[_ms.sub(_this.cards,i1),_ms.sub(_this.cards,i2)];
						break
					}
				};
				if(res){
					break
				}
			};
			return res
		}
		"-is-set-on-board?"(){
			const _this=this;
			return ! _61_63(null,_this["find-set"]())
		}
		"-board-ok?"(){
			const _this=this;
			return (_this["-is-set-on-board?"]()&&! _this["-is-repeat-on-board?"]())
		}
	};
	const name=exports.name=`CardTable`;
	return exports
})
//# sourceMappingURL=CardTable.js.map