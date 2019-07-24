import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import { bindActionCreators } from 'redux';
import { getRooms } from './APICalls';

class Dropdown extends React.Component {

    componentDidMount(){
        // axios.get('http://10.1.4.234:8080/rooms/details')
        // .then(res => {
        //     let roomList = res.data;
        //     this.props.actions.setRoomList(roomList);  
        //     // console.log(roomList)
        // })
        getRooms(res => {
            let roomList = res;
            this.props.actions.setRoomList(roomList);
            console.log(roomList);
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
        // setSelected : (roomNo) => { dispatch ({ type: "SET_SELECTED", roomNo: roomNo }) },
        // setRoomList : (roomList) => { dispatch ({ type: "SET_ROOMS", roomList: roomList }) }
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);