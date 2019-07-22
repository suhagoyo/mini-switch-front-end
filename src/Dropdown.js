import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Dropdown extends React.Component {

    componentDidMount(){
        axios.get('http://10.1.0.193:8080/rooms/details')
        .then(res => {
            let roomList = res.data;
            //console.log(roomList);
            this.props.setRoomList(roomList);  
        })
    }

    render(){
        //console.log(this.props);
        const rooms = this.props.rooms;

        const handleClick = (roomno) => {
            this.props.setSelected(roomno)
        }

        const room_list = rooms.map(room => {
            return (
                <div className="roomButton" key={room.roomNo}>
                <button className="btn" onClick={() => {handleClick(room.roomNo)}}>  {room.roomNo} </button>
                </div>
            )
        })
        //console.log(room_list);
        
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
        setSelected : (roomNo) => { dispatch ({ type: "SET_SELECTED", roomNo: roomNo }) },
        setRoomList : (roomList) => { dispatch ({ type: "SET_ROOMS", roomList: roomList }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);