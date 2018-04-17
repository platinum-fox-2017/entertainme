module.exports = typeDefs = `
  type Query { movies: [Movie] }
  type Mutation {
    createMovie(
      title: String,
      overview: String,
      poster_path: String,
      popularity: Float,
      status:  String
    ): Movie
  }
  type Movie {
    _id: String,
    title: String,
    overview: String,
    poster_path: String,
    popularity: Float,
    tag: [String],
    status: String,
  }
`