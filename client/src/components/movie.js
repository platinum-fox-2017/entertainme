import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

class movie extends Component {
    render() {
        return (
            <div>
                <Query query={gql`
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
                                <p key={i}>
                                    {data.title}
                                    {data.poster_path}
                                </p>
                            )
                        })

                    }}
                </Query>
            </div>
        );
    }
}

export default movie;