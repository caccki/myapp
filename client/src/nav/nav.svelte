<script>
import {href,log} from '../lib/helper/helper.js'
</script>
<nav>
		<div>
			<a {href}  data-target="onNav" data-x="S1" >홈</a>
		</div>
		<div>
			<a {href}  data-target="onNav" data-x="S1" >구독</a>
		</div>
</nav>
<style>
nav {
  position: fixed;
  top: 50px;
	height: 100%;
	width: 70px;
	margin: 0px auto;
	background: rgb(29, 29, 29);
	font-size: 15px;
}
nav div {
	height: 70px;
	display: flex;
	align-items: center; 
	justify-content: center;
}
nav div a{
	font-size: 20px;
	color: #818181;
}
</style>