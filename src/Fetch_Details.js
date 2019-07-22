import React from 'react';
import { connect } from 'react-redux';

class FetchDetails extends React.Component {
    
render () {
        const rooms = this.props.state.rooms;
        console.log(rooms);
        
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
            // console.log("TOGGLE CLICKED");
            // console.log(rooms[0].status)
            this.props.toggle_switch(roomNo);
            // console.log("State after toggle: ",this.props.state);
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
        // selected_room : state.selected_room,
        // rooms : state.rooms
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggle_switch : (roomNo) => { dispatch({type: "TOGGLE_SWITCH", roomNo: roomNo}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchDetails);