import React from 'react';
import Dropdown from './Dropdown';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      room_number : null,
      device_mac : null,
      switch_state : false,
    };
  }
  render(){
    return (
      <div className="App">
        <Dropdown />
        { /* The display section */ 
          /*  Selected room */
        }
      </div>
    );
  }
} 

export default App;
