import React from 'react';
import FetchDetails from './Fetch_Details';
import { connect } from 'react-redux';

class Details extends React.Component {
    
    render(){
        const selected_room = this.props.selected_room;
        return (
            <div className = "container" bgcolor="grey">
                <h2 className= "container">{ selected_room!=="" ? selected_room: "No room selected"}</h2>
                <br></br>
                <div className = "container">
                     <FetchDetails />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selected_room : state.selected
    }
}

export default connect(mapStateToProps)(Details);