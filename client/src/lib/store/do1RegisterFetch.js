import {S_on4Register} from './store'

function register({id,name,pass1,pass2}) {
  if (!id) return alert("아이디를 입력해주십시오.");
  if (pass1 !== pass2)
    return alert("비밀번호가 일치하지 않습니다.");

  const req = {
    id: id,
    name: name,
    psword: pass1,
  };

  fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        // location.href = "/login";
      } else {
        alert(res.msg);
		console.log(res)
      }
    })
    .catch((err) => {
      console.log("회원가입 중 에러 발생");
    });
}

export function do1RegisterFetch(e) {
	let fetchData;
	S_on4Register.update(s => {fetchData = s; return s})
	console.log(fetchData); 
	register(fetchData)
}

