import React, { Component } from 'react';
import Display from './components/Display'
import './App.css';

class App extends Component {
  state = {
    strikes: 0,
    balls: 0
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Baseball Stadium
          </h1>
          <Display />
        </header>
      </div>
    );
  }
}


export default App;
