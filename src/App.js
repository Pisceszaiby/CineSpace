import './App.css';
import React from 'react';
import NavBar from './/components/NavBar';
import Router from './Router';


function App() {
  return (
    <div className='App container-fluid movie-app'>
      <NavBar />
      <Router />

    </div>

  );

};

export default App;
