import React, { Component } from 'react';

class Pilot extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      message: '',
    };
  }

  updateName(event){
    this.setState({
      name: event.target.value,
    });
  }

  handleSubmit(){
    this.setState({
      message: 'Welcome ' + this.state.name + '!'
    });
    console.log(this.state.name);
  }

  render(){
    return(
      <div className="card form-card text-center">
        <div className="card-body">
          <h3>What is your name, Pilot? </h3>
          <input className="form-control" type="text" placeholder="Enter your name" onChange={(event) => this.updateName(event)} value={this.state.name} />
          <button className="btn btn-primary" onClick={() => this.handleSubmit()}>Submit</button>
        <p>{this.state.message}</p>
      </div>
    </div>
    );
  };
}

export default Pilot;
