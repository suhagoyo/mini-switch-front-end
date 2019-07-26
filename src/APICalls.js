import Axios from 'axios';
import { baseUrl } from './constants';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

export const getRooms = (successCB) => {
    Axios.get(baseUrl,{headers: {clientId : "1", serviceKey: "2VpgMzCTl"} } )
    .then(res => {
        // console.log(res);
        if(res) successCB(res.data)
        // else {
        //     catch();
        // }
    });
}

export function toggleSwitch (obj) {
    Axios.put(baseUrl,obj,{headers: {clientId : "1", serviceKey: "2VpgMzCTl"} })
    .then(res => {
        if(res) {
            console.log(res);
            getRooms(data => {
                let roomList = data;
                actions.setRoomList(roomList);
            });
        }
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapDispatchToProps);