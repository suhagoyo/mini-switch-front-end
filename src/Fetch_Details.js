import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import { bindActionCreators } from 'redux';
import { getRooms } from './APICalls';

class FetchDetails extends React.Component {

    // componentDidMount() {
    //     setInterval(getRooms(res => {
    //         this.props.actions.setRoomList(res);
    //         // console.log(res);
    //     }), 10000);
    // }
    
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
            const handleClick = (roomNo) => {
                this.props.actions.toggle_switch(roomNo);
            }

            setInterval(getRooms(res => {
                this.props.actions.setRoomList(res);
                // console.log(res);
            }), 10000);
            
            return (
                <div className = "Room_Details">
                    {selected_room && 
                        <div>
                        <div className = "Device_ID"> Device Address: {roomList[0].deviceId} </div>
                        <div className = "Actualstatus"> Switch State: {roomList[0].actualSwitchStatus ? "ON" : "OFF"} </div>
                        <button onClick={() => {handleClick(selected_room)}}>Toggle Switch</button>
                        <div className = "Toggle_time">
                            {//this.props.state.toggle_time && 
                            roomList[0].actualSwitchStatus!==roomList[0].desiredSwitchStatus ?
                                    "Switch toggled at: " + this.props.state.toggle_time : ""}    
                        </div>
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