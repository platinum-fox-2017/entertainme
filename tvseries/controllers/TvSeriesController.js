const Tvseries = require('../models/Tvseries')

module.exports = {
    find: async(req,res) => {
      try {
        const tvseries = await Tvseries.find()
        
        if (tvseries.length) {
          res.status(200).json({
            message: `Get all TV Series success`,
            data: tvseries
          })
        } else {
          res.status(202).json({
            message: `No TV Series found yet`,
            data: []
          })
        }
      } catch (err) {
        res.status(500).json({
          message: `Get all TV Series err ${err}`,
          data: []
        })
      }
    },

    create: async(req,res) => {
      try {
        const newTvSeries = await Tvseries.create(
          {
            title: req.body.title,
            overview: req.body.overview,
            poster_path: req.body.poster_path,
            popularity: req.body.popularity,
            tag: req.body.tag,
            status : req.body.status
          }
        )

        if (newTvSeries) {
          res.status(200).json({
            message: `Create new TV Series success`,
            data: newTvSeries
          })
        } else {
          res.status(500).json({
            message: `Create new TV Series error ${err}`,
            data: {}
          })
          return
        }
      } catch (err) {
        res.status(500).json({
          message: `Create new TV Series error ${err}`,
          data: {}
        })
      }       
    }
}
