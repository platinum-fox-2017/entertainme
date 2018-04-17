import gql from 'graphql-tag'

export const CREATE_MOVIE = gql`
  mutation createMovie($movie : MovieInput!) {
    createMovie(input: $movie) {
      _id
      title
      overview
    }
  }
`
