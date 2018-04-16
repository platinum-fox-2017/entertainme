const axios = require('axios')

const resolvers = {
  Query: { 
    movies: async () => {
      const movies = await axios.get('http://localhost:3000/')
      return movies.data.data
    },
    tvseries: async () => {
      const tvseries = await axios.get('http://localhost:4000/')
      return tvseries.data.data
    }
  },
  Mutation: {
    createMovie:  async (_, { input }) =>  {
      const newMovie =  await axios.post('http://localhost:3000/',input)
      return newMovie.data.data
    }
  }
}

module.exports = resolvers
