"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./at/Range","./compare"],(exports,Range_0,compare_1)=>{
	exports._get=_ms.lazy(()=>{
		const Range=_ms.lazy(()=>_ms.getDefaultExport(Range_0)),_$0=_ms.lazyGetModule(compare_1),_61_63=_ms.lazyProp(_$0,"=?");
		const doc=exports.doc=`Functions implementing behavior native to JavaScript.`;
		const op=function op(op_45name){
			return Function(`a`,`b`,`return a ${op_45name} b`)
		};
		const unary_45op=function unary_45op(op_45name){
			return Function(`_`,`return ${op_45name} _`)
		};
		const js_45and=exports["js-and"]=op(`&`);
		const js_45caret=exports["js-caret"]=op(`^`);
		const js_60_60=exports["js<<"]=op(`<<`);
		const js_62_62=exports["js>>"]=op(`>>`);
		const js_62_62_62=exports["js>>>"]=op(`>>>`);
		const js_61_61_61=exports["js==="]=op(`===`);
		const js_61_61=exports["js=="]=op(`==`);
		const js_60=exports["js<"]=op(`<`);
		const js_62=exports["js>"]=op(`>`);
		const js_60_61=exports["js<="]=op(`<=`);
		const js_62_61=exports["js>="]=op(`>=`);
		const js_43=exports["js+"]=op(`+`);
		const js_45=exports["js-"]=op(`-`);
		const js_42=exports["js*"]=op(`*`);
		const js_47=exports["js/"]=op(`/`);
		const js_45mod=exports["js-mod"]=op(`%`);
		const js_45bar=exports["js-bar"]=op(`|`);
		const js_126=exports["js~"]=unary_45op(`~`);
		const js_33=exports["js!"]=unary_45op(`!`);
		const js_45sub=exports["js-sub"]=Function(`obj`,`prop`,`return obj[prop]`);
		const js_45set=exports["js-set"]=Function(`obj`,`prop`,`val`,`obj[prop] = val`);
		const js_45delete=exports["js-delete"]=Function(`obj`,`prop`,`delete obj[prop]`);
		const js_45instanceof=exports["js-instanceof"]=op(`instanceof`);
		const regex=exports.regex=(()=>{
			const built={};
			const doc=built.doc=`TODO`;
			const test=built.test=function test(){
				_ms.assert(_ms.unlazy(_61_63),regex`a${1}b`,RegExp(`a1b`))
			};
			return _ms.set(function(strings){
				const values=[].slice.call(arguments,1);
				let _="";
				for(let i of new (_ms.unlazy(Range))(0,values.length)){
					_=`${_}${_ms.sub(strings,i)}${_ms.sub(values,i)}`
				};
				_=`${_}${_ms.sub(strings,values.length)}`;
				return RegExp(_)
			},built)
		})();
		const defined_63=exports["defined?"]=(()=>{
			const built={};
			const doc=built.doc=`True for any value except \`undefined\`.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[void 0],false);
				_ms.assoc(built,[0],true);
				return built
			};
			return _ms.set(_=>{
				return ! id_61_63(_,void 0)
			},built)
		})();
		const id_61_63=exports["id=?"]=(()=>{
			const built={};
			const doc=built.doc=`For Objects, whether they are the same place in memory.
For primitive types, whether they have the same data.
TODO: Explain (and test) difference between this and js===`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[`a`,`a`],true);
				_ms.assoc(built,[[`a`],[`a`]],false);
				return built
			};
			return _ms.set(Object.is,built)
		})();
		const truthy_63=exports["truthy?"]=(()=>{
			const built={};
			const doc=built.doc=`Whether javascript's \`if\` statement would consider the value to be true.`;
			const test=built.test=function test(){
				for(let _ of [null,void 0,0,Number.NaN,"",false]){
					_ms.assertNot(truthy_63,_)
				};
				_ms.assert(truthy_63,[]);
				_ms.assert(truthy_63,true)
			};
			return _ms.set(_=>{
				return ! js_33(_)
			},built)
		})();
		const js_45typeof=exports["js-typeof"]=(()=>{
			const built={};
			const doc=built.doc=`JavaScript's \`typeof\` operator.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[void 0],`undefined`);
				_ms.assoc(built,[null],`object`);
				_ms.assoc(built,[true],`boolean`);
				_ms.assoc(built,[0],`number`);
				_ms.assoc(built,[`a`],`string`);
				_ms.assoc(built,[Symbol(`s`)],`symbol`);
				_ms.assoc(built,[js_45typeof],`function`);
				_ms.assoc(built,[{
					a:1
				}],`object`);
				return built
			};
			return _ms.set(unary_45op(`typeof`),built)
		})();
		const name=exports.name=`js`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvanMubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFLQSxzQkFBTTtFQUVOLFNBQU0sWUFBQSxVQUNPO1VBeUJGLFNBekJBLElBQUksSUFBSSxZQUFVOztFQUM3QixpQkFBWSxvQkFBQSxVQUNPO1VBdUJSLFNBdkJBLElBQUksVUFBUTs7RUFFdkIsaUNBQVEsR0FBSTtFQUNaLHFDQUFVLEdBQUk7RUFDZCwrQkFBTSxHQUFJO0VBQ1YsK0JBQU0sR0FBSTtFQUNWLG1DQUFPLEdBQUk7RUFDWCxtQ0FBTyxHQUFJO0VBQ1gsK0JBQU0sR0FBSTtFQUNWLDJCQUFLLEdBQUk7RUFDVCwyQkFBSyxHQUFJO0VBQ1QsK0JBQU0sR0FBSTtFQUNWLCtCQUFNLEdBQUk7RUFDViwyQkFBSyxHQUFJO0VBQ1QsMkJBQUssR0FBSTtFQUNULDJCQUFLLEdBQUk7RUFDVCwyQkFBSyxHQUFJO0VBQ1QsaUNBQVEsR0FBSTtFQUNaLGlDQUFRLEdBQUk7RUFDWiw0QkFBSyxXQUFVO0VBQ2YsMkJBQUssV0FBVTtFQUNmLGlDQUVXLFNBRk8sTUFBTSxPQUFPO0VBQy9CLGlDQUNXLFNBRE8sTUFBTSxPQUFPLE1BQU07RUFDckMsdUNBQVcsU0FBVSxNQUFNLE9BQU87RUFDbEMsK0NBQWUsR0FBSTtFQUVuQiwwQkFDTSxLQUFBOztHQUFMLG9CQUFNO0dBQ04sc0JBQ1EsZUFBQTtrQ0FBSSxLQUFNLElBQUUsS0FPbkIsT0FQaUM7O2tCQUVqQyxTQUFBLFFBQ2lCOztJQUFqQixNQTJCbUM7SUExQjlCLFFBQUEsS0FBSyx3QkFBVSxFQUFFLGVBQ2E7T0FBNUIsR0FBQyxZQUFHLFFBQVEsYUFBSSxPQUFPOztNQUN4QixHQUFDLFlBQUcsUUFBUTtXQUNsQixPQUFPO0dBQUE7O0VBRVQscUNBQ1MsS0FBQTs7R0FBUixvQkFBTTtHQUNOLHNCQUNPLGVBQUE7O29CQUFOLENBQUMsUUFBYztvQkFDZixDQUFDLEdBQU07OztrQkFDUCxHQUNDO1dBQUQsRUFBSSxTQUFLLEVBQUU7OztFQUViLCtCQUNLLEtBQUE7O0dBQUosb0JBQ0M7R0FHRCxzQkFDTyxlQUFBOztvQkFBTixDQUFFLElBQUksS0FBTztvQkFDYixDQUFDLENBQUUsS0FBSSxDQUFFLE1BQVE7OztrQkFDbEI7O0VBRUQsbUNBQ1EsS0FBQTs7R0FBUCxvQkFBTTtHQUNOLHNCQUNRLGVBQUE7SUFBRixRQUFBLEtBQUEsQ0FBQyxLQUFLLE9BQVUsRUFBRSxXQUFZLEdBQUUsT0FDTTttQkFBbEMsVUFBUTtJQUFBO2VBQ1QsVUFBUTtlQUNSLFVBQVE7R0FBQTtrQkFDaEIsR0FDQztXQUFELEVBQUksTUFBQTtHQUFBOztFQUVOLHVDQUNVLEtBQUE7O0dBQVQsb0JBQU07R0FDTixzQkFDTyxlQUFBOztvQkFBTixDQUFDLFFBQWU7b0JBQ2hCLENBQUMsTUFBVTtvQkFDWCxDQUFDLE1BQVU7b0JBQ1gsQ0FBQyxHQUFPO29CQUNSLENBQUUsS0FBUTtvQkFDVixDQUFFLE9BQVEsTUFBUztvQkFDbkIsQ0FBQyxhQUFlO29CQUNoQixDQUFDO09BQUk7SUFBQSxHQUFROzs7a0JBQ2QsV0FBVTs7RUF2Rlgsd0JBQUEiLCJmaWxlIjoianMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==