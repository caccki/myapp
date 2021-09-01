import {S_on2Login} from './store'

function login({id,pass}) {
  const req = {
    id: id,
    psword: pass,
  };
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        // location.href = "/";
        console.log("로그인 성공")
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("로그인 중 에러 발생");
    });
}

export function do1LoginFetch(e) {
	let fetchData;
	S_on2Login.update(s => {fetchData = s; return s})
  console.log(fetchData)
	login(fetchData)
}

