"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../at/at","../../at/Range","../../math/Number","../../Object","../../Type/Type","../../at/Seq/Seq"],(exports,_64_0,Range_1,Number_2,Object_3,Type_4,Seq_5)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(_64_0),empty_63=_ms.get(_$0,"empty?"),map_126=_ms.get(_$0,"map~"),Range=_ms.getDefaultExport(Range_1),_$1=_ms.getModule(Number_2),divisible_63=_ms.get(_$1,"divisible?"),Nat=_ms.get(_$1,"Nat"),_$2=_ms.getModule(Object_3),Object_45_62Map=_ms.get(_$2,"Object->Map"),_$3=_ms.getModule(Type_4),_61_62=_ms.get(_$3,"=>"),_$4=_ms.lazyGetModule(Seq_5),seq_61_63=_ms.lazyProp(_$4,"seq=?"),take_126=_ms.lazyProp(_$4,"take~");
		const make_45fizz_45buzz=exports["make-fizz-buzz"]=(()=>{
			const built={};
			const doc=built.doc=`Infinite Seq of Fizz Buzz game.
Spec is an Obj whose values are divisors and
whose keys are strings to be printed when the divisor matches.`;
			const test=built.test=function test(){
				const fizz_45buzz=make_45fizz_45buzz({
					Fizz:3,
					Buzz:5
				});
				_ms.assert(_ms.unlazy(seq_61_63),_ms.unlazy(take_126)(fizz_45buzz,6),(()=>{
					const built=[];
					_ms.add(built,1);
					_ms.add(built,2);
					_ms.add(built,`Fizz`);
					_ms.add(built,4);
					_ms.add(built,`Buzz`);
					_ms.add(built,`Fizz`);
					return built
				})());
				const fizz_45buzz_45jazz=(()=>{
					return make_45fizz_45buzz((()=>{
						const built={};
						const Fizz=built.Fizz=3;
						const Jazz=built.Jazz=4;
						const Buzz=built.Buzz=5;
						return built
					})())
				})();
				_ms.assert(_ms.unlazy(seq_61_63),_ms.unlazy(take_126)(fizz_45buzz_45jazz,17),(()=>{
					const built=[];
					_ms.add(built,1);
					_ms.add(built,2);
					_ms.add(built,`Fizz`);
					_ms.add(built,`Jazz`);
					_ms.add(built,`Buzz`);
					_ms.add(built,`Fizz`);
					_ms.add(built,7);
					_ms.add(built,`Jazz`);
					_ms.add(built,`Fizz`);
					_ms.add(built,`Buzz`);
					_ms.add(built,11);
					_ms.add(built,`FizzJazz`);
					_ms.add(built,13);
					_ms.add(built,14);
					_ms.add(built,`FizzBuzz`);
					_ms.add(built,`Jazz`);
					_ms.add(built,17);
					return built
				})())
			};
			return _ms.set(spec=>{
				const tests=_61_62(Array,map_126(Object_45_62Map(spec),_=>{
					const built={};
					const shout=_ms.checkContains(String,built.shout=_ms.sub(_,0),"shout");
					const divisor=_ms.checkContains(Nat,built.divisor=_ms.sub(_,1),"divisor");
					return built
				}));
				return map_126(new (Range)(1,Number.POSITIVE_INFINITY),n=>{
					let s="";
					for(let _ of tests){
						if(divisible_63(n,_.divisor)){
							s=`${s}${_.shout}`
						}
					};
					return empty_63(s)?n:s
				})
			},built)
		})();
		const name=exports.name=`fizz-buzz`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvbWV0YS9kZW1vL2ZpenotYnV6ei5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQVNBLG1EQUNlLEtBQUE7O0dBQWQsb0JBQ0M7R0FHRCxzQkFDUSxlQUFBO0lBQVAsa0JBQVksbUJBQWU7VUFBTztVQUFRO0lBQUE7MERBQ3JCLFlBQVUsR0FDRSxLQUFBOzttQkFBOUI7bUJBQ0E7bUJBQ0M7bUJBQ0Q7bUJBQ0M7bUJBQ0E7OztJQUVKLHlCQUNnQixLQUFBO1lBQWYsbUJBQ2MsS0FBQTs7TUFBYixzQkFBTTtNQUNOLHNCQUFNO01BQ04sc0JBQU07Ozs7MERBQ2EsbUJBQWUsSUFDRyxLQUFBOzttQkFBcEM7bUJBQ0E7bUJBQ0M7bUJBQ0E7bUJBQ0E7bUJBQ0E7bUJBQ0Q7bUJBQ0M7bUJBQ0E7bUJBQ0E7bUJBQ0Q7bUJBQ0M7bUJBQ0Q7bUJBQ0E7bUJBQ0M7bUJBQ0E7bUJBQ0Q7Ozs7a0JBQ0gsTUFDSTtJQUNKLFlBQVEsT0FBRyxNQUFPLFFBQU0sZ0JBQVksTUFBTyxHQUNDOztLQUMzQyw4QkFBTSwyQkFBUSxFQUFFO0tBQ2hCLGdDQUFRLDBCQUFLLEVBQUU7OztXQUNoQixRQUFNLEtBQUksT0FBTSxFQUFFLDBCQUEyQixHQUNDO0tBQTdDLE1BQU87S0FDRixRQUFBLEtBQUEsTUFDSztNQUFULEdBQUksYUFBVyxFQUFFLFdBQ1M7U0FBbkIsR0FBQyxJQUFHOzs7WUFDTixTQUFPLEdBQUcsRUFBRTtJQUFBO0dBQUE7O0VBMURyQix3QkFBQSIsImZpbGUiOiJtZXRhL2RlbW8vZml6ei1idXp6LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=