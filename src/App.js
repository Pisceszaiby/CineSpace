import './App.css';
import React from 'react';
import NavBar from './/components/NavBar';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <div class="container-fluid">
        <NavBar />
        <Router />

      </div>
    </div>)

};

export default App;
