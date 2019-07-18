import React from 'react';
import Dropdown from './Dropdown';
import Details from './Details';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     room_number : null,
  //     device_mac : null,
  //     switch_state : false,
  //   };
  // }
  render(){
    return (
      <div className="App">
        <br></br>
        <Dropdown />
        <br></br>
        <Details />
        { /* The display section */ 
          /*  Selected room */
        }
      </div>
    );
  }
} 

export default App;
