import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";


class tvseries extends Component {
    render() {
        return (
            <div>
                <Query query={gql`
              {
                  tvseries {
                      title
                      poster_path
                      tag,
                      overview
                  }
              }
          `
                }>
                    {({ loading, error, data }) => {
                        console.log(data)
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>{JSON.stringify(error)}</p>;
                        return data.tvseries.map((data, i) => {
                            return (
                                <p key={i}>
                                    {data.title}
                                    {data.overview}
                                </p>
                            )
                        })

                    }}
                </Query>
            </div>
        );
    }
}

export default tvseries;