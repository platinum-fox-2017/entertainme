import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

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
        <Query query={gql`
          {
            movies {
              title
            }
          }
        `}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return data.movies.map(({ title }) => (
            <div key={title}>
              <p>{`${title}`}</p>
            </div>
          ));
        }}
        </Query>
      </div>
    );
  }
}

export default App;
