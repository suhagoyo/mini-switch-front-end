import React from 'react';

class FetchDetails extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render () {
        const {room} = this.props;
        console.log(room);
        return (
            <div className = "Details">
                <div className = "Switch State">Switch State: OFF</div>
                <div className = "Device ID">Device ID: adsfasdfasdf</div>
            </div>
        )
    }
}

export default FetchDetails;