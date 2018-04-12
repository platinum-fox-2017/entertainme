const TVModel = require('../models/tv.model');

module.exports = {
    showTVSeries(req, res) {
        TVModel.find()
            .then(data => {
                res.status(200).json({
                    message: "Success Show Data",
                    data
                })
            })
    },
    addTVSeries(req, res) {
        let item = {
            title: req.body.title,
            overview: req.body.overview,
            poster_path: req.body.poster_path,
            popularity: req.body.popularity,
            tag: req.body.tag,
            status: req.body.status
        }

        let data = new TVModel(item)
        data.save((err, data) => {
            if (err) res.status(500).json({ message: "Failed Insert Data" })
            res.status(201).json({
                message: "Insert Success",
                data
            })
        })
    },
    updateTVSeries(req, res) {
        TVModel.findOneAndUpdate(req.params.id, req.body, function (err, data) {
            if (err) return res.send(500, { error: err })
            res.status(201).json({
                message: "Update Success",
                data
            })
        })
    },
    deleteTVSeries(req, res) {
        TVModel.remove({
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