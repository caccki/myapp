<script>
import Login from './login.svelte'
import Register from './register.svelte'
import {S_on2LoginRegister} from '../../lib/store/store.js'

// console.log($S_onLogin)
console.log($S_on2LoginRegister)

</script>

<div data-target="onLogin" data-x="S1" data-y={$S_on2LoginRegister}>
    <Login/>
</div>
<div data-target="onLogin" data-x="S2" data-y={$S_on2LoginRegister}>
    <Register/>
</div>

<style>

[data-target="onLogin"] {
    display: none;
}
[data-x="S1"][data-y="S1"] {
    display: block;
}
[data-x="S2"][data-y="S2"] {
    display: block;
}
</style>
  