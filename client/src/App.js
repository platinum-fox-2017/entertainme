import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloProvider } from "react-apollo";
import MovieList from './components/MovieList'
import client from './graphql/client'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client} >
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <MovieList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
