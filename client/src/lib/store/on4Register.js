import {S_on4Register,F_on4Register} from './store'

export function on4Register(e) {

	let {x,y}= e.target.dataset
	console.log('로그인 시도',x,y)
	F_on4Register.update( s => {
		//f
		s = x == "id"  ? "F_id" 
			: x == "name"  ? "F_name" 
			: x == "pass1"  ? "F_pass1" 
			: x == "pass2"  ? "F_pass2" 
      : "_"
    //s
		;(
			{
			F_id: ({x,y})=> S_on4Register.update(s => { console.log(s); s[x] =  e.target.value ; return s} ),
			F_name: ({x,y})=> S_on4Register.update(s => {s[x] =  e.target.value ; return s}),
			F_pass1: ({x,y})=> S_on4Register.update(s => {s[x] =  e.target.value ; return s}),
			F_pass2: ({x,y})=> S_on4Register.update(s => {s[x] =  e.target.value ; return s}),
			_: ({x,y})=> { console.log('onLogin : 예외 상황 발생 ')},
			}[ s ]({x,y})
		);
  return s
	})
}

