import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Display from './Display.jsx';

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

let queryTvInput = gql`
mutation createTvSeries(
		$title: String
    $overview: String,
    $poster_path: String,
    $popularity: Float,
    $status:  String,
) {
	createTv(
		title: $title,
    overview: $overview,
    poster_path: $poster_path,
    popularity: $popularity,
    status:  $status
	) {
		title
		overview
		poster_path
		popularity
		status
	}
}
`

let mockInput = {
	"title": "Daredevil",
	"overview": "matt murdock, with his other senses superhumanly enhanced, fights crime as a blind lawyer by day, and vigilante by night.",
	"poster_path": "https://ia.media-imdb.com/images/M/MV5BNzUwMDEyMTIxM15BMl5BanBnXkFtZTgwNDU3OTYyODE@._V1_.jpg",
	"popularity": 8.7,
	"status": "Completed"
}

export default  MovieListing => {
  return (
    <Query query={query}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        return <div className="container">
          <Mutation mutation={queryTvInput}>
            {(addTodo, { data }) => (
              <div>
                {/* <form
                  onSubmit={e => {
                    e.preventDefault();
                    addTodo({ variables: { type: input.value } });
                    input.value = "";
                  }}
                >
                  <input
                    ref={node => {
                      input = node;
                    }}
                  />
                  <button type="submit">Add Todo</button>
                </form> */}
                  <button type='submit'>Add Dummy Tv Series</button>
              </div>
            )}
          </Mutation>
          <h1>Movies</h1>
          {data.all.movies.map((movie, i) => (
            <Display key={ `movie-${i}` } data={ movie }/>
          ))}
          <h1>Tv Series</h1>
          {data.all.tv.map((tv, i) => (
            <Display key={ `tv-${i}` } data={ tv }/>
          ))}
        </div>
      }}
    </Query>
  )
}
