const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()

module.exports = {
    getAllData: async (req, res) => {
        try {
            const movies = await axios.get('http://localhost:3000/');
            const tvseries = await axios.get('http://localhost:4000/');
            const result = {
                movies: movies.data.data,
                tvseries: tvseries.data.data
            }
            client.set('entertainme', JSON.stringify(result));
            client.quit();
            res.status(200).json({
                message: 'Get all data success',
                data: result
            })
        } catch (err) {
            res.status(500).json({
                message: 'Internal server error',
                err
            })
        }
    }
}
