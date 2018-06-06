const Tvseries = require('../models/tvseries')

module.exports = {
  readData: (req, res) => {
    Tvseries.find()
    .then(data => {
      res.status(200).json({
        message: 'success to get all tv-series',
        data
      }) 
    })
    .catch(err => console.error(err))
  },

  readDataById: (req, res) => {
    Tvseries.findById(req.params.id)
    .then(data => {
      // console.log(data)
      if (data) {
        res.status(200).json({
          message: 'success to get spesific tv-series',
          data
        })
      } else {
        res.status(403).json({ message: 'data not found !!' })
      }
    })
    .catch(err => console.error(err))
  },

  createData: (req, res) => {
    Tvseries.create({
      title       : req.body.title,
      overview    : req.body.overview,
      poster_path : req.body.poster_path,
      popularity  : req.body.popularity,
      tag         : req.body.tag,
      status      : req.body.status
    })
    .then(data => {
      res.status(200).json({
        message : 'success insert record in tv-series',
        data
      })
    })
    // .catch(err => console.error(err))
    .catch(err => {
      res.status(400).json(err.message)
    })
  },

  updateData: (req, res) => {
    Tvseries.findByIdAndUpdate(req.params.id, {
      title       : req.body.title,
      overview    : req.body.overview,
      poster_path : req.body.poster_path,
      popularity  : req.body.popularity,
      tag         : req.body.tag,
      status      : req.body.status
    }, { new: true })
    .then(data => {
      res.status(200).json({
        message : 'success update record in tv-series',
        data
      })
    })
    .catch(err => console.error(err.message))
  },

  deleteData: (req, res) => {
    Tvseries.findByIdAndRemove(req.params.id)
    .then(data => {
      res.status(200).json({
        message: 'success delete record in tv-series'
      })
    })
    .catch(err => console.error(err))
  }
}