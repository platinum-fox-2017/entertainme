const axios = require('axios');

async function getData (req, res) {
    try {
        let movie = await axios('http://localhost:3001/api/movies')
        let tvseries = await axios('http://localhost:3002/api/tvseries')
        let data = {
            movie: movie.data,
            tvseries: tvseries.data
        }
        res.status(200).json({
           data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Data Not Found'
        })
    }
}


module.exports = {
    getData
}