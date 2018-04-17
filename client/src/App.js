import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import  { movieGQL}  from './graphql/movie';
import { Query } from "react-apollo";
import gql from "graphql-tag";

class App extends Component {    
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Query query={ gql`
              {
                  movies {
                      title
                      poster_path
                      tag
                  }
              }
          `
          }>
              {({ loading, error, data }) => {
                console.log(data)
                if (loading) return <p>Loading...</p>;
                if (error) return <p>{JSON.stringify(error)}</p>;
                return data.movies.map((data, i) => {
                  return (
                  <p key={ i }>
                    { data.title }
                   </p>
                  )
                })                

              }}
          </Query>
        </div>
      </div>
    );
  }
}

export default App;
