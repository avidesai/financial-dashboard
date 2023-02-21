import React, { Component } from 'react';
import StockGrid from './components/StockGrid';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StockGrid />
      </div>
    );
  }
}

export default App;
