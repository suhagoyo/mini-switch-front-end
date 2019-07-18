import React from 'react';
import { connect } from 'react-redux';

class FetchDetails extends React.Component {
    
    render () {
        
        const rooms = this.props.rooms;
        const selected_room = this.props.selected_room;
        //console.log(selected_room);
        //use filter instead of map
        let roomList;
        if(selected_room) {
            roomList = rooms.filter(room => {
                return room.room_number===selected_room;
            })
        }
        else {
            roomList = "No room selected";
        }
        //console.log(roomList[0]);

        return (
                <div className = "Room_Details">
                    <div className = "Switch_State"> Switch State: {selected_room ? (roomList[0].switch_state ? "ON" : "OFF") : ""} </div>
                    <div className = "Device_ID"> Device Address: {selected_room ? roomList[0].device_mac : ""} </div>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selected_room : state.selected_room,
        rooms : state.rooms
    }
}

export default connect(mapStateToProps)(FetchDetails);