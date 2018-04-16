import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Display from './components/Display.jsx';

let data = `
title
overview
poster_path,
popularity`

let query = gql`
{ all {
  movies { ${data} }
  tv { ${data} }
} }`

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          return <div className='container'>
            <h1>Movies</h1>
            {
              data.all.movies.map((movie, i) => (
                <Display key={ i } data={ movie }/>
              ))
            }
            <h1>Tv Series</h1>
            {
              data.all.tv.map((tv, i) => (
                <Display key={ i } data={ tv }/>
              ))
            }
          </div>
        }}
        </Query>
      </div>
    );
  }
}

export default App;
