<script>
    import {on2LoginRegister} from '../../lib/store/on2LoginRegister.js'
    import {on4Register} from '../../lib/store/on4Register.js'
    import {do1RegisterFetch} from '../../lib/store/do1RegisterFetch.js'
  // const id = document.querySelector("#id"),
  // name = document.querySelector("#name"),
  // psword = document.querySelector("#psword");

  // console.log('id',id)
//   confirmPsword = document.querySelector("#confirm-psword"),
//   registerBtn = document.querySelector("#button");

// registerBtn.addEventListener("click", register);

// function register() {
//   if (!id.value) return alert("아이디를 입력해주십시오.");
//   if (psword.value !== confirmPsword.value)
//     return alert("비밀번호가 일치하지 않습니다.");

//   const req = {
//     id: id.value,
//     name: name.value,
//     psword: psword.value,
//   };

//   fetch("/register", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(req),
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       if (res.success) {
//         location.href = "/login";
//       } else {
//         alert(res.msg);
//       }
//     })
//     .catch((err) => {
//       console.error("회원가입 중 에러 발생");
//     });
// }

// on:keydown={(e)=>{ 
// 				  if (e.key === "Enter") {
// 						e.preventDefault();
// 						e.stopImmediatePropagation();
// 						onVoice_Gate({target:
// 								{
// 									text: e.target.value, 
// 									visitors: $STATE_S_c_vsc , 
// 									id: $STATE_S_c_vsc.length > 0 ? $STATE_S_c_vsc[0].visitor_id : "guest"         , 
// 									isEnd: true , 
// 									time:  time(),
// 									type: "v1"
// 								}}
// 							)						
					
// 							e.target.value = ""
// 							return
// 					}
// 							onVoice_Gate({target:
// 								{
// 									text: e.target.value, 
// 									visitors: $STATE_S_c_vsc , 
// 									id: $STATE_S_c_vsc.length > 0 ? $STATE_S_c_vsc[0].visitor_id : "guest"         , 
// 									isEnd: false , 
// 									time:  time(),
// 									type: "v1"
// 								}}
// 							)
		
// 					}}

</script>
<div class="login-page">
    <div class="form">
      <form class="login-form">
        <input id="id" type="text" placeholder="아이디" data-x="id"  on:change={on4Register} />
        <input id="name" type="text" placeholder="이름" data-x="name"  on:change={on4Register} />
        <input id="psword" type="password" placeholder="비밀번호" data-x="pass1"  on:change={on4Register}/>
        <input id="confirm-psword" type="password" placeholder="비밀번호 확인" data-x="pass2"  on:change={on4Register}/>
        <p id="button"  on:click={do1RegisterFetch}  >SIGN UP</p>
        <p class="message"  on:click={on2LoginRegister} data-x="S2">Already registered? login</p>
      </form>
    </div>
  </div>
<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form #button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4c77af;
  width: 80%;
  border: 0;
  margin: 0 auto;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form #button:hover,.form #button:active,.form #button:focus {
  background: #425785;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}


</style>