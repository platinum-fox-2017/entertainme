const typeDefs = `
  type Query { movies: [Movie] }
  type Movie {
    title: String
    overview: String,
    poster_path: String,
  }
`

module.exports = typeDefs