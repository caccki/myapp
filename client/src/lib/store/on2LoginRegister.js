import {S_on2LoginRegister,F_on2LoginRegister} from './store'

export function on2LoginRegister(e) {
	console.log('onLoginRegister')
	let {x,y}= e.target.dataset
	F_on2LoginRegister.update( s => {
		//f
		s = x == "S1"  ? "F_12" 
			: x == "S2"  ? "F_21" 
      : "_"
    //s
		;(
			{
			F_12: ({x,y})=> S_on2LoginRegister.update(s => "S2" ),
			F_21: ({x,y})=> S_on2LoginRegister.update(s => "S1"),
			_: ({x,y})=> { console.log('onLogin : 예외 상황 발생 ')},
			}[ s ]({x,y})
		);
  return s
	})
}

