import React from 'react';
import FetchDetails from './Fetch_Details';
import { connect } from 'react-redux';

class Details extends React.Component {
    
    render(){
        const selected_room = this.props.selected_room;
        
        return (
            <div className = "container">
                <h2 className= "container">{ selected_room ? selected_room : "No room selected"}</h2>
                <br></br>
                <div className = "container-details">
                     <FetchDetails />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selected_room : state.selected_room,
    }
}

export default connect(mapStateToProps)(Details);