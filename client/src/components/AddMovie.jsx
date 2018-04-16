import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const CREATE_MOVIE = gql`
  mutation createMovie($newMovie: MovieInput!) {
    createMovie(newMovie: $newMovie) {
      _id,
      title,
      overview
    }
  }
`;

const GET_MOVIE = gql`
  {
    getData {
      movies {
        _id,
        title,
        overview
      }
    }
  }
`

class AddMovie extends Component {
  constructor () {
    super()
    this.state = {
      title: ``,
      overview: ``
    }
  }

  handleInput = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div style={{ marginTop: '40px' }}>
        <input type="text" name="title" placeholder="Movie Title.." onChange={ this.handleInput}/>
        <br/>
        <br/>
        <input type="text" name="overview" placeholder="A little bit of overview" onChange={ this.handleInput}/>
        <br/>
        <br/>
        <Mutation 
          mutation={CREATE_MOVIE}
          update={(cache, {data: { createMovie }}) => {
            const { getData } = cache.readQuery({ query: GET_MOVIE });
            const movie  = getData.movies;
            const tvseries = getData.tvseries;
            console.log(`========> ${JSON.stringify(createMovie)}`)
            cache.writeQuery({
              query: GET_MOVIE,
              data: { 
                getData: {
                  movies: movie.concat([createMovie]),
                  tvseries: tvseries
                }
              }
            })
          }}  
        >
          {(createMovie) => (
            <button type="submit"
              onClick={
                () => {
                  createMovie({variables: 
                    {
                      newMovie: {
                        title: this.state.title,
                        overview: this.state.overview
                      }
                    }
                  })
                }
              }
            >
              Add Movie
            </button>
          )}
        </Mutation>
      </div>
    );
  }
}

export default AddMovie;


{/* <div style={{ marginTop: '40px' }}>
<input type="text" name="title" placeholder="Movie Title.." onChange={ this.handleInput}/>
<br/>
<br/>
<input type="text" name="overview" placeholder="A little bit of overview" onChange={ this.handleInput}/>
<br/>
<br/>
<Mutation mutation={CREATE_MOVIE}>
  {(createMovie, { data }) => (
    <button type="submit"
      onClick={
        () => {
          createMovie({variables: 
            {
              newMovie: {
                title: this.state.title,
                overview: this.state.overview
              }
            }
          })
        }
      }
    >
      Add Movie
    </button>
  )}
</Mutation>
</div> */}