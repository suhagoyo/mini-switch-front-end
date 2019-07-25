import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import { bindActionCreators } from 'redux';
import { getRooms } from './APICalls';

class Dropdown extends React.Component {

    componentDidMount(){
        getRooms(res => {
            let roomList = res;
            this.props.actions.setRoomList(roomList);
        })
    }

    render(){
        const rooms = this.props.rooms;

        const handleClick = (roomno) => {
            this.props.actions.setSelected(roomno)
        }

        const room_list = rooms.map(room => {
            return (
                <div className="roomButton" key={room.roomNo}>
                <button className="btn" onClick={() => {handleClick(room.roomNo)}}>  {room.roomNo} </button>
                </div>
            )
        })
        
        return (
            <div className = "container-fluid" align="center">
                <div className="dropdown">
                    <button className="dropbtn">Select Room</button>
                    <div className="dropdown-content">
                        { room_list }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        rooms : state.rooms
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);