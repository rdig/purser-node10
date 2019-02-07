import React, { Component } from 'react';
import logo from './purser_logo.svg';
import './App.css';
import purserTesting from './purserTesting';

class App extends Component {
  componentDidMount() {
    purserTesting();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Open your console...</p>
        </header>
      </div>
    );
  }
}

export default App;
