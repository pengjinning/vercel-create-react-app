import React from 'react';
// import logo from './logo.svg';
// DatePicker, 
import { Button, version } from "antd";
// import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Counter /> */}
        <h1>antd version: {version}</h1>
        {/* <DatePicker/> */}
        <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button>
      </header>
    </div>
  );
}

export default App;
