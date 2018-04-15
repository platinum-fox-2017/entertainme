const TvSeries = require('../models/tvseries.model');

module.exports = {
    readAll: async (req, res) => {
        try {
            const readAllTvSeries = await TvSeries.find();
            res.status(200).json({
                message: 'Success get all data',
                data: readAllTvSeries
            })
        } catch (error) {
            res.send(error)
        }
    },
    create: async (req, res) => {
        try {
            const createTvSeries = await TvSeries.create({
                title: req.body.title,
                overview: req.body.overview,
                poster_path: req.body.poster_path,
                popularity: req.body.popularity,
                tag: req.body.tag
            })
            res.status(200).json({
                message: 'Success create new data',
                data: createTvSeries
            })
        } catch (error) {
            res.status(500).json({
                message: 'Internal server error',
                error
            })
        }
    }
}