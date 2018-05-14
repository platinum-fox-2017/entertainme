const axios = require('axios');

const resolvers = {
    Query: {
        movies: async () => {
            try {
                let fetchData = await axios.get('http://localhost:3001/api/movies');
                return fetchData.data.fetchData      
            } catch (error) {
                return error
            }
        },
        tvseries: async () => {
            try {
                let fetchData = await axios.get('http://localhost:3002/api/tvseries');
                return fetchData.data.fetchData
            } catch (error) {
                return error
            }
        }
    },
    Mutation: {
        addMovie: async (_, { movie }) => {
            console.log(movie, 'ini movie')
            try {
                await axios.post('http://localhost:3001/api/movies', movie)
                return movie
            } catch (error) {
                return error
            }
        },
        editMovie: async (_, { movie, id }) => {
            try {
                await axios.put(`http://localhost:3001/api/movies/${id}`, movie)
                return movie
            } catch (error) {
                return error
            }
        },
        deleteMovie: async (_, {id} ) =>{
            try {
                await axios.delete(`http://localhost:3001/api/movies/${id}`)
                return 'Success Delete Data'
              
            } catch (error) {
                return error
            }
        },
        addTVSeries: async (_, { tvseries }) => {
            try {
                await axios.post('http://localhost:3002/api/tvseries', tvseries)
                return tvseries
            } catch (error) {
                return error
            }
        },
        editTVSeries: async (_, { tvseries, id }) => {
            try {
                await axios.put(`http://localhost:3002/api/tvseries/${id}`, tvseries)
                return movie
            } catch (error) {
                return error
            }
        },
        deleteTVSeries: async (_, { id }) => {
            try {
                await axios.delete(`http://localhost:3002/api/tvseries/${id}`)
                return 'Success Delete Data'

            } catch (error) {
                return error
            }
        },
    }
}

module.exports = resolvers