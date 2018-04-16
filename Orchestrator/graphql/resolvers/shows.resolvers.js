// shows\
const axios = require('axios');

const resolvers = {
  Query: {
    shows: async () => {
      let showsURL = 'http://localhost:3002/shows'
      try {
        let shows = await axios.get(showsURL)
        console.log(shows.data);
        return shows.data
      } catch (e) {
        console.log(e);
      }
    }
  },
  Mutation: {
    addShow: async (_, { show }) => {
      let ShowsURL = 'http://localhost:3002/shows/add/'
      try {
        let response = await axios.post(ShowsURL, show)
        return response.data
      } catch (e) {
        console.log(e.message);
        return {error: e.message}
      }
    },
    editShow: async (_, { show, id }) => {
      let ShowsURL = 'http://localhost:3002/shows/update/' + `${id}`
      try {
        let response = await axios.put(ShowsURL, show)
        return response.data
      } catch (e) {
        console.log(e.message);
        return {error: e.message}
      }
    },
    deleteShow: async (_,{ id }) => {
      let ShowsURL = 'http://localhost:3002/shows/delete/' + `${id}`
      try {
        let response = await axios.delete(ShowsURL)
        console.log(response);
        return response.data
      } catch (e) {
        console.log(e.message);
        return {error: e.message}
      }
    }
  }
}

module.exports = resolvers;
// 5ad45be6d1c9ad2b2b08f365
/*
mutation example

mutation {
  addMovie(movie: {
    poster_path: "test",
    overview: "test",
    title: "test2",
    popularity: "String",
  	status: "String",
  	tag: ["String"]
  }) {
    poster_path
    overview
    tag
    title
    status
  }
}

*/
