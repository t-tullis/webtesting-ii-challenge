import React from 'react';
import '../App.css';

function Dashboard(props){
    return (
      <div className="App">
          <button onClick={props.strike}>Strike</button>
          <button onClick={props.ball}>Ball</button>
          <button onClick={props.foul}>Foul</button>
          <button onClick={props.hit}>Hit</button>
      </div>
    );
  }


export default Dashboard;