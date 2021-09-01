import {writable} from 'svelte/store'

export let S_on2LoginRegister =  writable("S1")
export let F_on2LoginRegister =  writable("_")

export let S_on4Register =  writable({id: "",name: "" ,pass1: "" , pass2: "" })
export let F_on4Register =  writable("_")

export let S_on2Login =  writable({id: "",pass: ""})
export let F_on2Login =  writable("_")




// export let S_onRegisterFetch =  writable({id: "" ,  name: "" ,pass1: "" , pass2: "" })
// export let F_onRegisterFetch =  writable("_")
