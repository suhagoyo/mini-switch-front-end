import Axios from 'axios';
import { baseUrl } from './constants';

export const getRooms = (successCB) => {
    Axios.get(baseUrl)
    .then(res => {
        console.log(res);
        if(res) successCB(res.data)
    });
}

export function toggleSwitch (obj) {
    Axios.put(baseUrl,obj)
    .then(res => {
        console.log(res);
    })
}