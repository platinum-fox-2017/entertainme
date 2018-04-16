const Movie = require('../../movies/models/movie')
const axios = require('axios')

const resolvers = {
  Query: {
    movies: async () => {
      const response = await axios.get('http://localhost:3001/movies')
      return response.data.data;
    }
  }
}

module.exports = resolvers
