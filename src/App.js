import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import Counter from './components/Counter';
// import LifecycleA from './components/LifecycleA';
// import Clock from './components/Clock';
import TableExercise from './components/TableExercise';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TableExercise />
        {/* <Greet name="Darshan">YOu KNOW WHAT!!</Greet> */}
        {/* <Welcome></Welcome> */}
        {/* <Hello /> */}
        {/* <Counter /> */}
        {/* <LifecycleA /> */}
        {/* <Clock /> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
