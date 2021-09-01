import {log,yymmdd} from '../helper/helper'
import {curry, go, map} from "fxjs";
import { cloneDeep } from "lodash"
import { STATE_S_current_client_id } from "../store/store"

export function getApiFormat () {
    return {
        "reqid": "40137",
        "input": {
            "items": [
                {
                    "query_type": "", // "select"
                    "params": {
                        "keys": [],
                        "table_name": "", // "summary"
                        "conditions": []
                    }
                }
            ]
        }
    }
}
export let updateApiFormat = curry(( {conditions,query_type,keys,table_name,option} , api_format  )  => {
    let client_id ;
    STATE_S_current_client_id.update(s=>client_id = s);

    let api_format_copy = cloneDeep(api_format)
    switch(option) {
        case 'select_summary_today':
            table_name =  "summary";
            query_type =  "select" ;
            keys = ["visitor_id","client_id","timeline","timeline_end", "visit_cnt_1",	"visit_cnt_7", "last_visit_date","masked","img","c_name","c_position","c_phone_number"];
            conditions = [`last_visit_date=${yymmdd()}`,`client_id='${client_id}'`,]
            break;
        case 'update_summary':
            table_name =  "summary";
            query_type =  "update" ;
            keys = [
                "c_name='vsc_000'",
                // "c_position='직책'",
                // "c_phone_number='전화번호'"
            ]
            conditions = [ "visitor_id='visitor_000_M'" ,  `client_id='${client_id}'`]
            break;
        case 'select_statics':
            table_name =  "daily_statistic";
            query_type =  "select" ;
            keys = [
                "date",
                "timeline",
                "client_id"
            ]
            conditions = [ `client_id='${client_id}'`]
            break;
        default:
            log("updateApiFormat-default")
    }
    query_type && ( api_format_copy.input.items[0].query_type = query_type )
    conditions && ( api_format_copy.input.items[0].params.conditions = conditions )
    keys && ( api_format_copy.input.items[0].params.keys = keys )
    table_name && ( api_format_copy.input.items[0].params.table_name = table_name )
    return api_format_copy
})
let fetch_api = (api_fomat)=> fetch(`http://aiio.gridone.net:18080/api/visitor_checker_db_query/v2/predict`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(api_fomat),
  })
export  let fetchApiFormat  = async (api_format) => fetch_api(api_format).then(response=> response.json()).then( json => json )
export  let getDBFromResponse = (json)  => json.output.items[0].results
export  let getCurrentVisitorsFromDB = curry((visitors,db)  => db.filter(v=>visitors.map(v=>v.visitor_id).includes(v.visitor_id)))


export function getTodayVisitors () {
   return go(
        getApiFormat(),
        updateApiFormat({option: "select_summary_today"}),
        fetchApiFormat,
        getDBFromResponse,			
    );
}

