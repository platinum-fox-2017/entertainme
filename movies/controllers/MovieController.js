const Movie = require('../models/Movie')

module.exports = {
    find: async(req,res) => {
      try {
        const movies = await Movie.find()
        
        if (movies.length) {
          res.status(200).json({
            message: `Get all movies success`,
            data: movies
          })
        } else {
          res.status(202).json({
            message: `No movies found yet`,
            data: []
          })
        }
      } catch (err) {
        res.status(500).json({
          message: `Get all movies err ${err}`,
          data: []
        })
      }
      

    },

    create: async(req,res) => {
      try {
        const newMovie = await Movie.create(
          {
            title: req.body.title,
            overview: req.body.overview,
            poster_path: req.body.poster_path,
            popularity: req.body.popularity,
            tag: req.body.tag,
            status : req.body.status
          }
        )

        if (newMovie) {
          res.status(200).json({
            message: `Create new movie success`,
            data: newMovie
          })
        } else {
          res.status(500).json({
            message: `Create new movie error ${err}`,
            data: {}
          })
          return
        }
      } catch (err) {
        res.status(500).json({
          message: `Create new movie error ${err}`,
          data: {}
        })
      }       
    },

    update : async (req,res) => {        
      try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {
          title: req.body.title,
          overview: req.body.overview,
          poster_path: req.body.poster_path,
          popularity: req.body.popularity,
          tag: req.body.tag,
          status : req.body.status
        }, {new : true})

        if (updatedMovie) {
          res.status(200).json({
            message : `Update movie success`,
            data    : updatedMovie
          })
        } else {
          res.status(500).json({
            message : `Failed to update movie ${err}`,
            data    : {}
          })          
        }
      } catch (err) {
        res.status(500).json({
          message : `Failed to update movie ${err}`,
          data    : {}
        })
      }
    },

    delete : async (req,res) => {
      const deletedMovie = await Movie.findByIdAndRemove(req.params.id)

      if (deletedMovie) {
        res.status(200).json({
          message : `Delete movie success !`,
          data    : deletedMovie
        })
      } else {
        res.status(500).json({
          message : `Error deleting movie ! ${err}`,
          data : {}
        })
      }
    }
}
