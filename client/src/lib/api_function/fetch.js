


let home_url = 'http://localhost:3000'
let login_url = 'http://localhost:3000/login'

let option = {
  headers : { 
    'method': 'GET',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
   }
  }

fetch(home_url)
.then( res => res.json() )
.then( data=>console.log(data))


fetch(login_url)
.then( res => res.json() )
.then( data=>console.log(data))

let tester = '';
console.log(tester)


function login() {
console.log("asdasd")
const req = {
    id: id.value,
    psword: psword.value,
};

fetch(login_url, {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
})
.then((res) => res.json())
.then((res) => {
    if (res.success) {
    location.href = "/";
    } else {
    alert(res.msg);
    }
})
.catch((err) => {
    console.error("로그인 중 에러 발생");
});
}
