import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from "react-apollo";

class MovieTable extends Component {
  render() {
    return (
      <div>
          <Query
            query={gql`
              {
                getData {
                  movies {
                    _id,
                    title,
                    overview
                  }
                }
              }
            `}
          >
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;
              return data.getData.movies.map((movie, idx) => (
                <div key={idx}>
                  <p>{`${movie.title}: ${movie.overview}`}</p>
                </div>
              ));
            }}
          </Query>
      </div>
    );
  }
}

export default MovieTable;