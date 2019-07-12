import React from 'react';

class Dropdown extends React.Component {
    render(){
        return (
            <div className="dropdown">
                <button className="dropbtn">Dropdown</button>
                <div className="dropdown-content">
                    <a href="https://google.com">Link 1</a>
                    <a href="https://google.com">Link 2</a>
                    <a href="https://google.com">Link 3</a>
                </div>
            </div>
        )
    }
}

export default Dropdown;