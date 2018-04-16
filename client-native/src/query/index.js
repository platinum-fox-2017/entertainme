import gql from "graphql-tag";

export let movieQuery = gql`
  {
    movies {
      title
      overview
      poster_path
    }
  }
`

export let entertainMe = gql`
  {
    movies {
      title
      overview
      poster_path
    }
    shows {
      title
      overview
      poster_path
    }
  }
`
