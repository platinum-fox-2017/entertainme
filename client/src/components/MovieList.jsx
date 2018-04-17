import React from 'react';
import gql from "graphql-tag";
import {  Query } from "react-apollo";
import { GET_MOVIES } from '../graphql/query'

function MovieList({...props}) {
  return (
    <div className="movie-list">
        <Query 
          query={GET_MOVIES}
        >
          {({ loading, error, data }) => {
            console.log(error)
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return data.movies.slice(0).reverse().map((movie, i) => (
              <div key={i}>
                <h4>{ movie.title }</h4>
                <p>{ movie.overview }</p>
              </div>
            ))
          }}
        </Query>
      
    </div>
  );
}


export default MovieList;
