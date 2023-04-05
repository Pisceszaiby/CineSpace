import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import UserInput from './/components/UserInput';
import MovieInfo from './/components/MovieInfo';
import MovieList from './components/MovieList';
import UserOutput from './/components/UserOutput';

class App extends Component {
  state = {
    username: 'JohnDoe'
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
            <code>Hello World!!!</code>
          </p>
          <UserInput
            username={this.state.username}
            setUsername={this.setUsernameHandler} />
          <UserOutput username={this.state.username} />

        </header >

      </div>
    );
  }
}

export default App;


