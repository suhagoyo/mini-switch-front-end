import React from 'react';

class Dropdown extends React.Component {
    render(){
        return (
            <div className = "container-fluid" align="center">
                <div className="dropdown">
                    <button className="dropbtn">Select Room</button>
                    <div className="dropdown-content">
                        <a href="https://google.com">Room 1</a>
                        <a href="https://google.com">Room 2</a>
                        <a href="https://google.com">Room 3</a>
                        <a href="https://google.com">Room 2</a>
                        <a href="https://google.com">Room 2</a>
                        <a href="https://google.com">Room 2</a>
                        <a href="https://google.com">Room 2</a>
                        <a href="https://google.com">Room 2</a>
                        <a href="https://google.com">Room 2</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dropdown;