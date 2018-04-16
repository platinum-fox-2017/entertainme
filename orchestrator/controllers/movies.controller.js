const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()

module.exports = {
    findMovies: async (req, res) => {
        try {
            const movies = await axios.get('http://localhost:3000/');
            res.status(200).json({
                message: 'Success get movies data',
                data: movies.data.data
            })
        } catch (error) {
            res.status(500).json({
                message: 'Internal server error',
                error
            })
        }
    },
    findByIdMovies: async (req, res) => {
        try {
            const movie = await axios.get(`http://localhost:3000/${req.params.id}`);
            res.status(200).json({
                message: 'Success get movie data',
                data: movie.data.data
            })
        } catch (error) {
            res.status(500).json({
                message: 'Internal server error',
                error
            })
        }
    },
    createMovies: async (req, res) => {
        try {
            const create = await axios.post('http://localhost:3000/', {
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
    updateMovies: async (req, res) => {
        try {
            const update = await axios.put(`http://localhost:3000/${req.params.id}`, {
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
    deleteMovies: async (req, res) => {
        try {
            const remove = await axios.delete(`http://localhost:3000/${req.params.id}`)
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