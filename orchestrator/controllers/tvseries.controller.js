const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()

module.exports = {
    findTvSeries: async (req, res) => {
        try {
            const tvseries = await axios.get('http://localhost:4000/');
            res.status(200).json({
                message: 'Success get tvseries data',
                data: tvseries.data.data
            })
        } catch (error) {
            res.status(500).json({
                message: 'Internal server error',
                error
            })
        }
    },
    findByIdTvSeries: async (req, res) => {
        try {
            const singletvseries = await axios.get(`http://localhost:4000/${req.params.id}`);
            res.status(200).json({
                message: 'Success get singletvseries data',
                data: singletvseries.data.data
            })
        } catch (error) {
            res.status(500).json({
                message: 'Internal server error',
                error
            })
        }
    },
    createTvSeries: async (req, res) => {
        try {
            const create = await axios.post('http://localhost:4000/', {
                title: req.body.title,
                overview: req.body.overview,
                poster_path: req.body.poster_path,
                popularity: req.body.popularity,
                tag: req.body.tag
            })
            client.del('entertainme');
            res.status(200).json(create.data)
        } catch (error) {
            res.status(500).json({
                message: 'Internal server error',
                error
            })
        }
    },
    updateTvSeries: async (req, res) => {
        try {
            const update = await axios.put(`http://localhost:4000/${req.params.id}`, {
                ...req.body
            })
            client.del('entertainme');
            res.status(200).json(update.data)
        } catch (error) {
            res.status(500).json({
                message: 'Internal server error',
                error
            })
        }
    },
    deleteTvSeries: async (req, res) => {
        try {
            const remove = await axios.delete(`http://localhost:4000/${req.params.id}`)
            client.del('entertainme');
            res.status(200).json(remove.data)
        } catch (error) {
            res.status(500).json({
                message: 'Internal server error',
                error
            })
        }
    },
}