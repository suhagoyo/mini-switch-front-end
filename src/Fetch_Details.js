import React from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import * as actions from './actions';
import { bindActionCreators } from 'redux';

class FetchDetails extends React.Component {
    
render () {
        const rooms = this.props.state.rooms;
        //console.log(rooms);
        
        const selected_room = this.props.state.selected_room;
        let roomList;
        if(selected_room) {
            roomList = rooms.filter(room => {
                return room.roomNo===selected_room;
            })
        }
        else {
            roomList = "No room selected";
        }
        //console.log(roomList[0]);
        const handleClick = (roomNo) => {
            console.log("TOGGLE CLICKED");
            // console.log(rooms[0].status)
            
            this.props.actions.toggle_switch(roomNo);
            // this.props.toggle_switch(roomNo);

            let temp = this.props.state.rooms.filter(room => {
                return room.roomNo === roomNo
            })
            console.log("State after toggle: ",this.props.state.rooms[0]);
            //console.log("Filtered Object: ",temp);
            let ret_obj = {
                roomNo : temp[0].roomNo,
                deviceId : temp[0].deviceId,
                status : temp[0].status,
                isVarified : temp[0].isVarified 
            }
            console.log("Return object: ",ret_obj);
            Axios.put('http://10.1.4.234:8080/rooms/details', ret_obj)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        }
        
        return (
            <div className = "Room_Details">
                {selected_room && 
                    <div>
                    <div className = "Device_ID"> Device Address: {roomList[0].deviceId} </div>
                    <div className = "status"> Switch State: {roomList[0].status ? "ON" : "OFF"} </div>
                    <button onClick={() => {handleClick(selected_room)}}>Toggle Switch</button>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // toggle_switch : (roomNo) => { dispatch({type: "TOGGLE_SWITCH", roomNo: roomNo}) }
        actions : bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchDetails);