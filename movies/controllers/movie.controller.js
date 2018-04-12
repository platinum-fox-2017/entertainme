const MovieModel = require('../models/movie.model');

module.exports = {
    showMovie(req, res) {
        MovieModel.find()
            .then(data => {
                res.status(200).json({
                    message: "Success Show Data",
                    data
                })
            })
    },
    addMovie(req, res) {
        let item = {
            title: req.body.title,
            overview: req.body.overview,
            poster_path: req.body.poster_path,
            tag: req.body.tag,
            status: req.body.status
        }

        let data = new MovieModel(item)
        data.save((err, data) => {
            if (err) res.status(500).json({ message: "Failed Insert Data" })
            res.status(201).json({
                message: "Insert Success",
                data
            })
        })
    },
    updateMovie(req, res) {
        MovieModel.findOneAndUpdate(req.params.id, req.body, function (err, data) {
            if (err) return res.send(500, { error: err })
            res.status(201).json({
                message: "Update Success",
                data
            })
        })
    },
    deleteMovie(req, res) {
        MovieModel.remove({
            _id: req.params.id
        })
        .then(data => {
            res.status(200).json({
                data
            })
        })
        .catch(err => {
            res.status(500).json({
                message: "Failed Delete Data"
            })
        })
    } 
}