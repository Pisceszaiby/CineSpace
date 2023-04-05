import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import UserInput from './/components/UserInput';
import MovieInfo from './/components/MovieInfo';
import MovieList from './components/MovieList';
import UserOutput from './/components/UserOutput';
function App() {
  const [username, setUsername] = useState("John");
  const usernameChangedHandler = (event) => {
    setUsername(event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Hello World!!!</code>
        </p>

        <UserInput
          changed={usernameChangedHandler}
          currentName={username}
        ></UserInput>
        <UserOutput userName={username}></UserOutput>
        <UserOutput userName={username}></UserOutput>
        <UserOutput userName={username}></UserOutput>
        <MovieInfo poster="images.jpg" title="Avatar" cast='["Liam", "Nial", "Harry"]' genre="Genre: " plot="Plot: " />
        <MovieList poster="images.jpg" title="Avatar" />
        <MovieList poster="images.jpg" title="Avatar" />
        <MovieList poster="images.jpg" title="Avatar" />
        <MovieList poster="images.jpg" title="Avatar" />
        <MovieList poster="images.jpg" title="Avatar" />


      </header >
    </div >
  );
}




export default App;
