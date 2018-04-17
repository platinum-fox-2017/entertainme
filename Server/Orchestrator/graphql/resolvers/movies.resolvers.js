// movies
const axios = require('axios');

const resolvers = {
  Query: {
    movies: async () => {
      let moviesURL = 'http://localhost:3001/movies'
      try {
        let movies = await axios.get(moviesURL)
        console.log(movies.data);
        return movies.data
      } catch (e) {
        console.log(e);
      }
    }
  },
  Mutation: {
    addMovie: async (_, { movie }) => {
      let moviesURL = 'http://localhost:3001/movies/add/'
      try {
        let response = await axios.post(moviesURL, movie)
        return response.data
      } catch (e) {
        console.log(e.message);
        return {error: e.message}
      }
    },
    editMovie: async (_, { movie, id }) => {
      let MoviesURL = 'http://localhost:3001/movies/update/' + `${id}`
      try {
        let response = await axios.put(MoviesURL, movie)
        return response.data
      } catch (e) {
        console.log(e.message);
        return {error: e.message}
      }
    },
    deleteMovie: async (_,{ id }) => {
      let MoviesURL = 'http://localhost:3001/movies/delete/' + `${id}`
      try {
        let response = await axios.delete(MoviesURL)
        return response.data
      } catch (e) {
        console.log(e.message);
        return {error: e.message}
      }
    }
  }
}

module.exports = resolvers;
