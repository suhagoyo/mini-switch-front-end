import React from 'react';
import FetchDetails from './Fetch_Details';
import { connect } from 'react-redux';

class Details extends React.Component {
    
    render(){
        //cosnt selected = this.props.selected;
        const selected_room = this.props.selected_room;
        //console.log(selected_room);
        return (
            <div className = "container" bgcolor="grey">
                <h2 className= "container">{ selected_room ? selected_room : "No room selected"}</h2>
                <br></br>
                <div className = "container">
                     <FetchDetails />
                </div>
            </div>
            // <div>
            //     {this.props.selected_room}
            //     {selected_room}
            //     {selected_room ? selected_room : "No room selected"}
            // </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        //selected : state.selected,
        selected_room : state.selected_room
    }
}

export default connect(mapStateToProps)(Details);