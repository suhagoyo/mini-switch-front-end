import React from 'react';
import { connect } from 'react-redux';

class Dropdown extends React.Component {
    render(){
        //console.log(this.props.rooms);
        const rooms = this.props.rooms;

        const room_list = rooms.map(room => {
            return (
                <a href="https://www.google.com" key={room.room_number}>  {room.room_number} </a>
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

export default connect(mapStateToProps)(Dropdown);