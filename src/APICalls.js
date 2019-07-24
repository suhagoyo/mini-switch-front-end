import Axios from 'axios';
import { baseUrl } from './constants';

export const getRooms = (successCB) => {
    Axios.get(baseUrl,{headers: {clientId : "1", serviceKey: "2VpgMzCTl"} } )
    .then(res => {
        console.log(res);
        if(res) successCB(res.data)
    });
}

export function toggleSwitch (obj) {
    Axios.put(baseUrl,obj,{headers: {clientId : "1", serviceKey: "2VpgMzCTl"} })
    .then(res => {
        console.log(res);
    })
}