const MovieModel = require('../models/movie.model');

module.exports = {

    showMovie: async (req, res) => {
        try {
            let fetchData = await MovieModel.find()
            return res.status(200).json({
                message: "Success Show Data",
                fetchData
            })
        } catch (error) {
            return res.status(500).json({
                message: "Can not find movies",
                error
            })
        }
    },
    addMovie: async (req, res) => {
        try {
            
            let item = {
                title: req.body.title,
                overview: req.body.overview,
                poster_path: req.body.poster_path,
                tag: req.body.tag,
                status: req.body.status
            }

            await MovieModel.create(item)

            return res.status(201).json({
                message: "Create Movie Success",
            })
        } catch (error) {
            return res.status(500).json({
                message: "Failed Insert Data",
                error
            })
        }

    },
    updateMovie: async (req, res) => {

        try {
            console.log(req.body)
            console.log(req.params.id)
            let updateData = await MovieModel.findByIdAndUpdate(
                req.params.id,
                req.body
            )

            return res.status(200).json({
                message: "Update data success",
                updateData
            })
        } catch (error) {
            return res.status(500).json({
                message: "Update data failed",
                error
            })
        }

    },
    deleteMovie: async (req, res) => {

        try {
            let deleteData = await MovieModel.remove({
                _id: req.params.id
            })
            return res.status(200).json({
                message: "Delete data movie success",
                deleteData
            })
        } catch (error) {
            res.status(500).json({
                message: "Delete data movie failed"
            })
        }

    } 
}