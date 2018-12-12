import React, { Component } from 'react';
import './App.css';
import WithoutHooks from './components/WithoutHooks';
import WithHooks from './components/WithHooks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WithoutHooks/>
        <WithHooks/>
      </div>
    );
  }
}

export default App;
