import React from 'react';
import { connect } from 'react-redux';

class Dropdown extends React.Component {
    render(){
        console.log(this.props);
        const rooms = this.props.rooms;

        const handleClick = (roomno) => {
            this.props.setSelected(roomno)
        }

        const room_list = rooms.map(room => {
            return (
                <div className="roomButton" key={room.room_number}>
                <button className="btn" onClick={() => {handleClick(room.room_number)}}>  {room.room_number} </button>
                </div>
            )
        })
        console.log(room_list);
        // room_list = {

        // }
        
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
        setSelected : (room_number) => { dispatch ({ type: "SET_SELECTED", room_number: room_number }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);