const axios = require('axios');
const ipAddressMovie = 'http://127.0.0.1:3001';

module.exports = resolvers = {
  Query: {
    movies: async() => {
      let { data } = await axios.get(ipAddressMovie);
      return data.data;
    }
  },
  Mutation: {
    createMovie: async (_, args) => {
      let { data } = await axios.post(ipAddressMovie,args);
      return data.data;
    }
  }
};