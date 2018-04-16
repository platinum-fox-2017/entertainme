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
    findById: async (req, res) => {
        try {
            const tvseries = await TvSeries.findById(req.params.id, function (err, data) {
                if (err) return handleError(err);
                res.status(200).json({
                    message: 'Success to get data',
                    data
                })
            });
        } catch (error) {
            res.status(500).json({
                message: 'Internal server error',
                error
            })
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
    },
    update: async (req, res) => {
        try {
            const updateTvSeries = await
                TvSeries.update({ _id: req.params.id }, { $set: { ...req.body } }, function (err, data) {
                    if (err) return res.status(500).json({ message: 'Internal server error' })
                    res.status(200).json({
                        message: 'Success to update data',
                        data
                    })
                });
        } catch (error) {
            res.status(500).json({
                message: 'Internal server error',
                error
            })
        }
    },
    remove: async (req, res) => {
        try {
            const deleteTvSeries = await TvSeries.remove({ _id: req.params.id }, function (err) {
                if (err) return handleError(err);
                res.status(200).json({
                    message: 'Success to delete tvseries'
                })
            });
        } catch (error) {
            res.status(500).json({
                message: 'Internal server error',
                error
            })
        }
    }
}