import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/MovieTable'
import MovieTable from './components/MovieTable';
import AddMovie from './components/AddMovie';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <AddMovie/>
          <MovieTable/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
