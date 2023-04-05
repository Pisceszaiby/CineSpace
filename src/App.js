import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import UserInput from './/components/UserInput';
import MovieInfo from './/components/MovieInfo';
import PopularMovieList from './components/MovieList';
import UserOutput from './/components/UserOutput';

class App extends Component {
  state = {
    username: 'Zainab'
  }


  setUsernameHandler = (event) => {
    this.setState({ username: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>Lab 7</code>
          </p>
          <UserInput
            username={this.state.username}
            setUsername={this.setUsernameHandler} />
          <UserOutput username={this.state.username} />
          <h5>Watchlist</h5>
          <PopularMovieList num="5" />
          <h5>Popular Movies</h5>
          <PopularMovieList num="6" />
          <h5>Action Movies</h5>
          <PopularMovieList num="6" />
          <h5>Horror Movies</h5>
          <PopularMovieList num="6" />



        </header >

      </div >
    );
  }
}

export default App;


