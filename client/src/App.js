import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  { movieGQL}  from './graphql/movie';
import { Query } from "react-apollo";



class App extends Component {
    
  render() {

    return (
    
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Query query={movieGQL} >
              {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
                // return JSON.stringify(data)
                return data.fetchData.movies.map((movie, idx) => (
                  <div>
                    { movie.title }
                  </div>
                ));
              }}
          </Query>
        </p>
      </div>
    );
  }
}

export default App;
