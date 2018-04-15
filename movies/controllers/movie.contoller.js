const Movie = require('../models/movie.model');

module.exports = {
    readAll: async (req, res) => {
        try {
            const readAllMovies = await Movie.find();
            res.status(200).json({
                message: 'Success get all data',
                movies: readAllMovies
            })
        } catch (error) {
            res.send(error)
        }
    },
    create: async (req, res) => {
        try {
            const createMovie = await Movie.create({
                title: req.body.title,
                overview: req.body.overview,
                poster_path: req.body.poster_path,
                popularity: req.body.popularity,
                tag: req.body.tag
            })
            res.status(200).json({
                message: 'Success create new data'
            })
        } catch (error) {
            res.status(500).json({
                message: 'Internal server error',
                error
            })
        }
    }
}