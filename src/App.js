import logo from './logo.svg';
import './App.css';
import React from 'react';
import UserInput from './/components/UserInput';
import MovieInfo from './/components/MovieInfo';
import UserOutput from './/components/UserOutput';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Hello World!!!</code>
        </p>
        <div>
          <UserInput />
          <MovieInfo poster="images.jpg" title="Avatar" cast='["Liam", "Nial", "Harry"]' genre="Genre: " plot="Plot: " />
          <MovieInfo poster="images.jpg" title="Avatar" cast='["Liam", "Nial", "Harry"]' genre="Genre: " plot="Plot: " />
          <MovieInfo poster="images.jpg" title="Avatar" cast='["Liam", "Nial", "Harry"]' genre="Genre: " plot="Plot: " />
          <MovieInfo poster="images.jpg" title="Avatar" cast='["Liam", "Nial", "Harry"]' genre="Genre: " plot="Plot: " />
          <MovieInfo poster="images.jpg" title="Avatar" cast='["Liam", "Nial", "Harry"]' genre="Genre: " plot="Plot: " />

          <UserOutput p1="Hello" p2="This is my component." />
          <UserOutput username="Username: " p2="zanwaar.bese20seecs" />
        </div>
      </header>
    </div>
  );
}




export default App;
