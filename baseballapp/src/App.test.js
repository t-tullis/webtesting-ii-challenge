import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library'
import App from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders successfully', () => {
  render(<App />);
});

it('adds a strike', () => {
  const { getByText } = render(<App />);

  const button = getByText('Strike');

  fireEvent.click(button);
  fireEvent.click(button);
  
  getByText(/Strikes: 2/i);
});

it('adds a ball', () => {
  const { getByText } = render(<App />);

  const button = getByText('Ball');

  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);

  getByText(/Balls: 3/i)
})

it('records a hit', () => {
  const { getByText } = render(<App />);

  const button = getByText('Hit');

  fireEvent.click(button);
 
  getByText(/Strikes: 0/i)
  getByText(/Balls: 0/i)
})