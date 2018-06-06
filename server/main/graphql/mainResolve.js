const axios = require('axios')

module.exports = {
  Query: {
    fetchAll: async() => {
      var movies = await axios.get('http://localhost:3001/api/movies')
      var series = await axios.get('http://localhost:3002/api/tvseries')
      console.log('main resolve movie', movies)
      console.log('main resolve series', series)
      return {
        movies: movies.data,
        series: series.data
      }
    }
  }
}
