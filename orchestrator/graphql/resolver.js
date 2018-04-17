const axios = require('axios')

const resolver = {
  Query: {
    fetchData: async() => {
      console.log('masuk sini');
      const movies = await axios.get('http://localhost:3000/movies')
      const series = await axios.get('http://localhost:4000/series')
      const data = {
        Movies: movies.data.data,
        Series: series.data.data
      }
      console.log(data);
      return data
    }
  },
  Mutation: {
    addMovie: async(_,{ movie }) => {
      console.log(movie);
      return movie
    }
  }
}

module.exports = resolver
