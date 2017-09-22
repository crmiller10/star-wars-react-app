import React, { Component } from 'react';
import './styles/App.css';
import Planet from './components/Planets';
import Pilot from './components/Pilot';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
    };
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Pilot />
          <Planet className="row"/>
        </div>
      </div>
    );
  };
}

export default App;
