const TVModel = require('../models/tv.model');

module.exports = {
    showTVSeries: async (req, res) =>  {
        
        try {
            let fetchData = await TVModel.find()
            return res.status(200).json({
                message: "Fetch data",
                fetchData
            })
            
        } catch (error) {
            return res.status(500).json({
                message: "Failed fetch data"
            })
        }
       
    },
    addTVSeries: async (req, res) => {
 
        try {

            let item = {
                title: req.body.title,
                overview: req.body.overview,
                poster_path: req.body.poster_path,
                popularity: req.body.popularity,
                tag: req.body.tag,
                status: req.body.status
            }   
            
            let addTVSeries = await TVModel.create(item)

            return res.status(201).json({
                message: "Add TV Series successfully",
                addTVSeries
            })

        } catch (error) {
            
            return res.status(500).json({
                message: "Can not add TV Series"
            })
            
        }

    },
    updateTVSeries: async (req, res) => {

        try {
            let updateData = await TVModel.findOneAndUpdate(
                req.params.id,
                req.body
            )

            res.status(200).json({
                message: "Update data TV series successfully",
                updateData
            })

        } catch (error) {
            res.status(500).json({
                message: "Failed update data TV series"
            })
        }

    },
    deleteTVSeries: async (req, res) => {

        try {
            let deleteData = await TVModel.remove({
                _id: req.params.id
            })

            res.status(200).json({
                message: "Delete data successfully",
                deleteData
            })

        } catch (error) {
            res.status(500).json({
                message: "Failed delete data"
            })
        }

    }
}