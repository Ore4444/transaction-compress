import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Button label="Add new Transaction" />
        </p>
        
      </header>
    </div>
  );
}

export default App;
