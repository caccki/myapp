

export let urls = {
    home : 'http://localhost:3000',
    login : 'http://localhost:3000/login',
} 



export let options = {
    get: { 
        headers : { 
                        'method': 'GET',
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                   }                
    }
}

export let api = {
    urls, options
}

export let fetchApi = async (url , option) => 
fetch(url)
.then( res => res.json() )
.then( json=>json)



export function getTodayVisitors () {
    return go(
         getApiFormat(),
         updateApiFormat({option: "select_summary_today"}),
         fetchApi,
         getDBFromResponse,			
     );
 }