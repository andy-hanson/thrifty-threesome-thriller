"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../String-as-Seq","../Type/Type"],(exports,String_45as_45Seq_0,Type_1)=>{
	exports._get=_ms.lazy(()=>{
		_ms.getModule(String_45as_45Seq_0);
		const _$0=_ms.getModule(Type_1),_61_62=_ms.get(_$0,"=>");
		const doc=exports.doc=`Functions that write to the console (also known as shell, command prompt, stdout/stderr).`;
		const log_33=exports["log!"]=(()=>{
			const built={};
			const doc=built.doc=`Prints its arguments to the console, separated by spaces.
Always adds a newline at the end.`;
			return _ms.set(a=>{
				console.log(a)
			},built)
		})();
		const warn_33=exports["warn!"]=(()=>{
			const built={};
			const doc=built.doc=`Like \`log!\`, but prints to stderr.`;
			return _ms.set(function(){
				const args=[].slice.call(arguments,0);
				console.warn(...args)
			},built)
		})();
		const dbg_33=exports["dbg!"]=(()=>{
			const built={};
			const doc=built.doc=`Show something for debugging.`;
			return _ms.set(function(){
				const args=[].slice.call(arguments,0);
				warn_33(`-->`);
				for(let _ of args){
					warn_33(_)
				};
				warn_33(`<--`)
			},built)
		})();
		const trace_33=exports["trace!"]=(()=>{
			const built={};
			const doc=built.doc=`Logs the current stacktrace.`;
			return _ms.set(function(){
				const args=[].slice.call(arguments,0);
				console.trace(_61_62(String,args,` `))
			},built)
		})();
		const name=exports.name=`console`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvaW8vY29uc29sZS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7RUFPQSxzQkFBTTtFQUVOLDZCQUNLLEtBQUE7O0dBQUosb0JBQ0M7a0JBR0MsR0FDQztJQUFGLFlBQVk7R0FBQTs7RUFFZCwrQkFDTSxLQUFBOztHQUFMLG9CQUFNO2tCQUNKLFVBQ087O0lBQVIsYUFBYSxHQUFBO0dBQUE7O0VBR2QsNkJBQ0ssS0FBQTs7R0FBSixvQkFBTTtrQkFDSixVQUNPOztJQUFSLFFBQU87SUFDRixRQUFBLEtBQUEsS0FDSTtLQUFSLFFBQU07SUFBQTtJQUNQLFFBQU87OztFQUVULGlDQUNPLEtBQUE7O0dBQU4sb0JBQU07a0JBQ0osVUFDTzs7SUFBUixjQUFlLE9BQUcsT0FBTyxLQUFNOzs7RUFsQ2xDLHdCQUFBIiwiZmlsZSI6ImlvL2NvbnNvbGUuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==