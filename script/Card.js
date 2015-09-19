"use strict";
define(["msl/private/boot","exports","msl/at/Seq/Array","msl/math/random","./context2d-util","./dom","msl/math/methods","msl/compare"],(_boot,exports,Array_0,random_1,context2d_45util_2,dom_3,methods_4,compare_5)=>{
	_ms.getModule(_boot);
	const _$1=_ms.getModule(Array_0),fill=_ms.get(_$1,"fill"),_$2=_ms.getModule(random_1),random_45int_45upto=_ms.get(_$2,"random-int-upto"),_$3=_ms.getModule(context2d_45util_2),pencil_45circle_33=_ms.get(_$3,"pencil-circle!"),pencil_45lines_33=_ms.get(_$3,"pencil-lines!"),pencil_45square_33=_ms.get(_$3,"pencil-square!"),pencil_45round_45rect_33=_ms.get(_$3,"pencil-round-rect!"),pencil_45tri_33=_ms.get(_$3,"pencil-tri!"),_$4=_ms.getModule(dom_3),new_45node=_ms.get(_$4,"new-node"),set_45content_33=_ms.get(_$4,"set-content!"),_$5=_ms.getModule(methods_4),_43=_ms.get(_$5,"+"),_47=_ms.get(_$5,"/"),_42=_ms.get(_$5,"*"),_45=_ms.get(_$5,"-"),_$6=_ms.getModule(compare_5),_60_63=_ms.get(_$6,"<?");
	const Card=exports.default=class Card{
		constructor(cell){
			_ms.newProperty(this,"cell",cell);
			_ms.newMutableProperty(this,"data",[0,0,0,0]);
			_ms.newMutableProperty(this,"selected?",false);
			_ms.newMutableProperty(this,"highlighted?",false)
		}
		"resize!"(width,height){
			const _this=this;
			_this.width=width;
			_this.height=height;
			_this["draw!"]()
		}
		"min-size"(){
			const _this=this;
			return Math.min(_this.width,_this.height)
		}
		"shape-id"(){
			const _this=this;
			return _ms.sub(_this.data,0)
		}
		"color-id"(){
			const _this=this;
			return _ms.sub(_this.data,1)
		}
		"shade-id"(){
			const _this=this;
			return _ms.sub(_this.data,2)
		}
		"n-shapes"(){
			const _this=this;
			return _43(1,_ms.sub(_this.data,3))
		}
		"randomize!"(){
			const _this=this;
			_this.data=fill(4,()=>{
				return random_45int_45upto(3)
			});
			_this["draw!"]()
		}
		"set-selected!"(selected_63){
			const _this=this;
			_this["selected?"]=selected_63;
			_this["draw!"]()
		}
		"set-highlight!"(highlighted_63){
			const _this=this;
			_this["highlighted?"]=highlighted_63;
			_this["draw!"]()
		}
		"draw!"(){
			const _this=this;
			set_45content_33(_this.cell,_this["-canvas"]())
		}
		"-canvas"(){
			const _this=this;
			return (_=>{
				_.width=_this.width;
				_.height=_this.height;
				const c=_.getContext(`2d`);
				_this["-draw-border!"](c);
				c.lineWidth=_47(_this["min-size"](),24);
				_ms.newProperty(c,"lineJoin",`round`);
				const shape_45regions=_this["-shape-regions"]();
				const stripe_45color=set_45stroke_45and_45get_45stripe_45color_33(c,_this["color-id"]());
				const shadow_45offset=_47(_this["min-size"](),48);
				c.shadowOffsetX=shadow_45offset;
				c.shadowOffsetY=shadow_45offset;
				c.shadowBlur=_47(shadow_45offset,2);
				_this["-do-shade!"](c,shape_45regions,stripe_45color);
				return _
			})(new_45node(`canvas`))
		}
		"-draw-border!"(c){
			const _this=this;
			const line_45width=_47(_this["min-size"](),24);
			c.lineWidth=line_45width;
			c.shadowOffsetX=line_45width;
			c.shadowOffsetY=line_45width;
			c.shadowBlur=_47(line_45width,2);
			const margin=_42(2,line_45width);
			const corner=_42(0.33,_45(_this["min-size"](),_42(2,margin)));
			if(_this["selected?"]){
				c.fillStyle=`#044`;
				c.strokeStyle=`#f80`;
				c.shadowColor=`rgba(255,128,0,0.5)`
			} else if(_this["highlighted?"]){
				c.fillStyle=`#202`;
				c.strokeStyle=`#80f`;
				c.shadowColor=`rgba(128,0,255,0.5)`
			} else {
				c.fillStyle=(_=>{
					_.addColorStop(0,`rgba(255, 255, 128, 0.2)`);
					_.addColorStop(1,`rgba(128, 255, 255, 0.2)`);
					return _
				})(c.createLinearGradient(0,0,_this.width,_this.height));
				c.strokeStyle=`#000`;
				c.shadowColor=`rgba(0,0,0,0.5)`
			};
			pencil_45round_45rect_33(c,margin,margin,_45(_this.width,margin),_45(_this.height,margin),corner);
			c.stroke();
			c.fill()
		}
		"-shape-regions"(){
			const _this=this;
			const min_45size=_this["min-size"]();
			const margin=_42(min_45size,0.1);
			const center_45x=_47(_this.width,2);
			const center_45y=_47(_this.height,2);
			return (()=>{
				switch(_this["n-shapes"]()){
					case 1:{
						const built=[];
						const size=_42(min_45size,0.32);
						_ms.add(built,(()=>{
							const built={};
							const min_45x=built["min-x"]=_45(center_45x,size);
							const min_45y=built["min-y"]=_45(center_45y,size);
							const max_45x=built["max-x"]=_43(center_45x,size);
							const max_45y=built["max-y"]=_43(center_45y,size);
							return built
						})());
						return built
					}
					case 2:{
						const wide_63=_60_63(_this.height,_this.width);
						const max_45size=(()=>{
							if(wide_63){
								return Math.min(_42(2,_this.width),_this.height)
							} else {
								return Math.min(_this.width,_42(2,_this.height))
							}
						})();
						const between_45margin=_42(max_45size,0.1);
						const total_45margin=_43(between_45margin,_42(2,margin));
						const size=_47(_45(max_45size,total_45margin),2);
						const dist_45from_45center=_43(size,_47(between_45margin,2));
						const half_45size=_47(size,2);
						const half_45between=_47(between_45margin,2);
						return (()=>{
							if(wide_63){
								const built=[];
								_ms.add(built,(()=>{
									const built={};
									const min_45x=built["min-x"]=_45(center_45x,dist_45from_45center);
									const min_45y=built["min-y"]=_45(center_45y,half_45size);
									const max_45x=built["max-x"]=_45(center_45x,half_45between);
									const max_45y=built["max-y"]=_43(center_45y,half_45size);
									return built
								})());
								_ms.add(built,(()=>{
									const built={};
									const min_45x=built["min-x"]=_43(center_45x,half_45between);
									const min_45y=built["min-y"]=_45(center_45y,half_45size);
									const max_45x=built["max-x"]=_43(center_45x,dist_45from_45center);
									const max_45y=built["max-y"]=_43(center_45y,half_45size);
									return built
								})());
								return built
							} else {
								const built=[];
								_ms.add(built,(()=>{
									const built={};
									const min_45x=built["min-x"]=_45(center_45x,half_45size);
									const min_45y=built["min-y"]=_45(center_45y,dist_45from_45center);
									const max_45x=built["max-x"]=_43(center_45x,half_45size);
									const max_45y=built["max-y"]=_45(center_45y,half_45between);
									return built
								})());
								_ms.add(built,(()=>{
									const built={};
									const min_45x=built["min-x"]=_45(center_45x,half_45size);
									const min_45y=built["min-y"]=_43(center_45y,half_45between);
									const max_45x=built["max-x"]=_43(center_45x,half_45size);
									const max_45y=built["max-y"]=_43(center_45y,dist_45from_45center);
									return built
								})());
								return built
							}
						})()
					}
					case 3:{
						const size=_42(0.33,_45(min_45size,_42(2,margin)));
						const rad=_42(size,0.8);
						const middle_45y=_43(center_45y,_42(rad,0.2));
						const half_45rad=_47(rad,2);
						const x_45rad=_42(half_45rad,Math.sqrt(3));
						const points=(()=>{
							const built=[];
							_ms.add(built,(()=>{
								const built={};
								const x=built.x=center_45x;
								const y=built.y=_45(middle_45y,rad);
								return built
							})());
							_ms.add(built,(()=>{
								const built={};
								const x=built.x=_45(center_45x,x_45rad);
								const y=built.y=_43(middle_45y,half_45rad);
								return built
							})());
							_ms.add(built,(()=>{
								const built={};
								const x=built.x=_43(center_45x,x_45rad);
								const y=built.y=_43(middle_45y,half_45rad);
								return built
							})());
							return built
						})();
						const half_45size=_47(size,2);
						return (()=>{
							const built=[];
							for(let _ of points){
								const _$0=_,x=_$0.x,y=_$0.y;
								_ms.add(built,(()=>{
									const built={};
									const min_45x=built["min-x"]=_45(x,half_45size);
									const min_45y=built["min-y"]=_45(y,half_45size);
									const max_45x=built["max-x"]=_43(x,half_45size);
									const max_45y=built["max-y"]=_43(y,half_45size);
									return built
								})())
							};
							return built
						})()
					}
					default:throw new (Error)("No branch of `switch` matches.")
				}
			})()
		}
		"-do-shade!"(c,shape_45regions,stripe_45color){
			const _this=this;
			pencil_33(c,shape_45regions,_this["shape-id"]());
			switch(_this["shade-id"]()){
				case 0:{
					c.stroke();
					break
				}
				case 1:{
					c.save();
					c.clip();
					const stripe_45width=_47(_this["min-size"](),32);
					c.lineWidth=stripe_45width;
					c["stroke-style"]=stripe_45color;
					pencil_45lines_33(c,_this.width,_this.height,_42(2,stripe_45width));
					c.stroke();
					c.restore();
					pencil_33(c,shape_45regions,_this["shape-id"]());
					c.stroke();
					break
				}
				case 2:{
					c.fill();
					break
				}
				default:throw new (Error)("No branch of `switch` matches.")
			}
		}
	};
	const set_45stroke_45and_45get_45stripe_45color_33=function set_45stroke_45and_45get_45stripe_45color_33(c,color_45id){
		const shadow_45alpha=0.2;
		return (()=>{
			switch(color_45id){
				case 0:{
					c.strokeStyle=`#ea0`;
					c.fillStyle=`#ea0`;
					c.shadowColor=`rgba(255, 255, 0, ${shadow_45alpha})`;
					return `#ff8`
				}
				case 1:{
					c.strokeStyle=`#280`;
					c.fillStyle=`#280`;
					c.shadowColor=`rgba(0, 255, 0, ${shadow_45alpha})`;
					return `#8f8`
				}
				case 2:{
					c.strokeStyle=`#a0a`;
					c.fillStyle=`#a0a`;
					c.shadowColor=`rgba(255, 0, 255, ${shadow_45alpha})`;
					return `#f8f`
				}
				default:throw new (Error)("No branch of `switch` matches.")
			}
		})()
	};
	const pencil_33=function pencil_33(c,shape_45regions,shape_45id){
		c.globalCompositeOperation=`source-over`;
		c.beginPath();
		for(let _ of shape_45regions){
			switch(shape_45id){
				case 0:{
					pencil_45tri_33(c,_["min-x"],_["min-y"],_["max-x"],_["max-y"]);
					break
				}
				case 1:{
					pencil_45square_33(c,_["min-x"],_["min-y"],_["max-x"],_["max-y"]);
					break
				}
				case 2:{
					pencil_45circle_33(c,_["min-x"],_["min-y"],_["max-x"],_["max-y"]);
					break
				}
				default:throw new (Error)("No branch of `switch` matches.")
			}
		};
		return c.closePath()
	};
	const name=exports.name=`Card`;
	return exports
})
//# sourceMappingURL=Card.js.map