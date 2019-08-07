import React, { Component } from 'react';
import Dashboard from './Dashboard'
import '../App.css';

class Display extends Component {
  state = {
    strikes: 0,
    balls: 0
  }

  render() {
    return (
      <div className="App">
          <h2>At Bat</h2>
          <p>Strikes: {this.state.strikes}</p>
          <p>Balls: {this.state.balls}</p>
          <Dashboard 
          strike={this.strike}
          ball={this.ball}
          hit={this.hit}
          foul={this.foul}
          resetCount={this.resetCount} />
      </div>
    );
  }
  
  strike = () => {
    if(this.state.strikes !== 2){
    this.setState({
      strikes: this.state.strikes + 1
    })
  }else{
    this.resetCount()
  }
}

  ball = () => {
    if(this.state.balls !== 3){
    this.setState({
      balls: this.state.balls + 1
    })
  }else{
    this.resetCount()
  }
}

  hit = () => {
    this.resetCount()
  }

  foul = () => {
    if(this.state.strikes !== 2){
    this.setState({
      strikes: this.state.strikes + 1
    })
  }else if(this.state.strikes === 2){
    this.setState({
      strikes: 2
    })
}
}
  resetCount = () => {
    this.setState({
      strikes: 0,
      balls: 0
    })
  }
}


export default Display;