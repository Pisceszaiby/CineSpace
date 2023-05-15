import './App.css';
import React from 'react';
import NavBar from './/components/NavBar';
import Router from './Router';

function App() {
  return (
    <div className='App container-fluid movie-app'>
      <NavBar />
      <h1>CINESPACE</h1>
      <Router />
    </div>
  );
};

export default App;
