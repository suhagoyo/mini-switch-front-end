import React from 'react';
import FetchDetails from './Fetch_Details';

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            room_number: "C314"
        }
    }
    
    render(){
        return (
            <div className = "container" bgcolor="grey">
                <h2 className= "container">{ this.state.room_number.length ? this.state.room_number: "No room selected"}</h2>
                <br></br>
                <div className = "container">
                     {this.state.room_number ? <FetchDetails room = {this.state.room_number} /> : "No Details to Display"}
                </div>
            </div>
        );
    }
}

export default Details;