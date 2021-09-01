<script>
import {href,log} from '../lib/helper/helper.js'
</script>
<nav>
		<div>
			<a {href}  data-target="onNav" data-x="S1" >☰</a>
		</div>
		<div>
			<a {href}  data-target="onNav" data-x="S1" >YunTube</a>
		</div>
		<div id="input-area">
			<input type="text" id="inp-search" placeholder="검색">
		</div>
		<div>
			<input type="text" id="inp-search" placeholder="검색">
		</div>
		<div id="login">
			<a {href}  data-target="onNav" data-x="S1" >로그인</a>
		</div>
</nav>
<style>
nav {
	height: 50px;
	margin: 0px auto;
	background: rgb(29, 29, 29);
	font-size: 15px;
	display: grid;
	grid-template-columns: 10% 10% 50% 5% 25% 5%;
}
nav div {
	height: 50px;
	width: 70px;
	display: flex;
	align-items: center; 
	justify-content: center;
}
nav div a{
	font-size: 20px;
	color: #818181;
}
/* nav {
  position: fixed;
	width: 100%;
	height: 50px;
	left: 0px;
	margin: 0px auto;
	background: rgb(29, 29, 29)
}
nav #css-menu a{
	width: 70px;
	padding: 0px 10px 0px 26px;
	font-size: 25px;
	margin: 0px auto;
	color: #818181;
} */
#input-area {
	width:100%;
}
#inp-search {
  width:100%;
	height: 25px;
  border:1px solid #00ae36;
  border-radius:0;
} 
#login {
	width:100%;
	
	display: flex;
	align-items: center; 
	justify-content: flex-end;
}
#inp-search {
  width:100%;
	height: 25px;
  border:1px solid #00ae36;
  border-radius:0;
} 
</style>