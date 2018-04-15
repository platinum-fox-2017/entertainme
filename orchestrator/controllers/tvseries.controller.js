const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()

module.exports = {
    createTvSeries: async (req, res) => {
        try {
            const createTvSeries = await axios.post('http://localhost:4000/', {
                title: req.body.title,
                overview: req.body.overview,
                poster_path: req.body.poster_path,
                popularity: req.body.popularity,
                tag: req.body.tag
            })
            client.del('entertainme');
            res.status(200).json(createTvSeries.data)
            client.quit();
        } catch (error) {
            res.status(500).json({
                message: 'Internal server error',
                error
            })
        }
    }
}