import React from 'react';
import logo from './logo.svg';
import './App.css';
import WaterJugSimulator from './WaterJugSimulator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <WaterJugSimulator />
      </header>
    </div>
  );
}

export default App;
