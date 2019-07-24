import React from 'react';
import Dropdown from './Dropdown';
import Details from './Details';
import './App.css';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     roomNo : null,
  //     deviceId : null,
  //     status : false,
  //   };
  // }
  render(){
    return (
      <div className="App">
        <br></br>
        <Dropdown />
        <br></br>
        <Details />
      </div>
    );
  }
} 

export default App;
