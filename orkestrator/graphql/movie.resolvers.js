const Movie = require('../../movies/models/movie')
const axios = require('axios')

const resolvers = {
  Query: {
    movies: async () => {
      const response = await axios.get('http://localhost:3001/movies')
      return response.data.data;
    }
  },
  Mutation: {
    addMovie: async(_,{ movie }) => {
      console.log(movie);
      const response = await axios.post('http://localhost:3001/movies', movie)
      return response.data
    }
  }
}

module.exports = resolvers
