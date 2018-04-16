import gql from "graphql-tag";

export let addTestShow = gql`
  mutation addMovie($input: MovieInput!){
    addMovie(movie: $input) {
      title
      overview
      poster_path
      popularity
      status
      tag
    }
  }
`
