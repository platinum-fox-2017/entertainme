const typeDefs = `
  type Query { movies: [Movie] }

  type Movie {
    title: String
    overview: String,
    poster_path: String,
  }

  type Mutation {
    addMovie(movie: MovieData): Movie
  }

  input MovieData {
    title: String!
    overview: String!
  }
`

module.exports = typeDefs