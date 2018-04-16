const axios = require('axios')

const resolvers = {
  Query: {
    getData: async () => {
      try {
        const movies = await axios({
          method: `GET`,
          url: `http://localhost:3001/api/movies`
        })
    
        const tvseries = await axios({
          method: `GET`,
          url: `http://localhost:3002/api/tvseries`
        })
    
        const spreadObj = {
          movies: movies.data.data,
          tvseries: tvseries.data.data
        }

        return spreadObj

      } catch (err) {
        return err
      }
    }
  },

  Mutation: {
    createMovie: async (root, {newMovie}) => {
      const new_movie = await axios({
        method: `POST`,
        url: `http://localhost:3001/api/movies`,
        data: newMovie
      })

      return new_movie.data.data
    },

    updateMovie: async (root, {movieId, updateMovie}) => {
      const updatedMovie = await axios({
        method: `PUT`,
        url: `http://localhost:3001/api/movies/${movieId}`,
        data: updateMovie
      })

      return updatedMovie.data.data
    },

    deleteMovie: async (root, {movieId}) => {
      const deletedMovie = await axios({
        method: `DELETE`,
        url: `http://localhost:3001/api/movies/${movieId}`
      })

      return deletedMovie.data.data
    }
  }
}

module.exports = resolvers;
