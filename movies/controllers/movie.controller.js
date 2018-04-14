const Movie = require('../models/movies');

module.exports = {
  addMovie: function (req, res) {
    const movie = new Movie()
    movie.title = req.body.title
    movie.overview = req.body.poster_path
    movie.popularity = req.body.popularity
    movie.tag = req.body.tag
    movie.status = req.body.status
    movie.save().then(data => {
      res.status(201).json({
        message: 'success add movie',
        data
      })
    })
  },
  showMovies: function (req, res) {
    Movie.find().then(data => {
      res.status(200).json({
        message: 'success get data',
        data
      })
    })
  },
  editMovie: function (req, res) {
    Movie.updateOne({
      _id: req.params.id
    }, {
      $set: {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        tag: req.body.tag,
        status: req.body.status
      }
    }).then(data => {
      res.status(200).json({
        message: 'success edit movie',
        data
      })
    })
  },
  deleteMovie: function (req, res) {
    Movie.remove({
      _id: req.params.id
    }).then(data => {
      res.status(200).json({
        message: 'success delete movie',
        data
      })
    }).catch(err => {
      res.status(500).json({
        message: 'error'
      })
    })
  }
}
