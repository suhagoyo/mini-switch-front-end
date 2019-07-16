import React from 'react';
import { connect } from 'react-redux';

class FetchDetails extends React.Component {
    
    render () {
        
        const rooms = this.props.rooms;
        const selected_room = this.props.selected_room;
        console.log(selected_room);
        //use filter instead of map
        let roomList;
        if(selected_room!=="") {
            roomList = rooms.map(room => {
                return (
                    <div className = "Room_Details" key = {room.room_number}>
                        <div className = "Room_Number"> {room.room_number} </div>
                        <div className = "Switch_State"> {room.switch_state ? "ON" : "OFF"} </div>
                        <div className = "Device_ID"> {room.device_mac} </div>
                    </div>
                )
            })
        }

        return (
            <div className = "room">
                {selected_room==="" ? "No details to display" : roomList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selected_room : state.selected,
        rooms : state.rooms
    }
}

export default connect(mapStateToProps)(FetchDetails);