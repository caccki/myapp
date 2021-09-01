import {S_on2Login,F_on2Login} from './store'
export function on2Login(e) {
	let {x,y}= e.target.dataset
	console.log('로그인 시도',x,y)
	F_on2Login.update( s => {
		//f
		s = x == "id"  ? "F_id" 
			: x == "pass"  ? "F_pass" 
      : "_"
    //s
		;(
			{
			F_id: ({x,y})=> S_on2Login.update(s => { console.log(s); s[x] =  e.target.value ; return s} ),
			F_pass: ({x,y})=> S_on2Login.update(s => {s[x] =  e.target.value ; return s}),
			_: ({x,y})=> { console.log('onLogin : 예외 상황 발생 ')},
			}[ s ]({x,y})
		);
  return s
	})
}

