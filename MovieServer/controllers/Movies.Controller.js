const Movie = require ('../models/Movies.model');

const getMovies = (req, res) => {
  Movie.find()
  .exec()
  .then(movies => {
    res.status(200).send(movies)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

const addMovies = (req,res) => {
  Movie.create(req.body)
  .then(() => {
    res.status(201).json({
      message: "successfully add new Movie"
    })
  })
  .catch(err => {
    res.status(500).send(err)
  })
}


module.exports = { getMovies, addMovies }
