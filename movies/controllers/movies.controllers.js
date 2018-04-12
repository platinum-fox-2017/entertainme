const Movie = require('../models/movie')

const getAllMovies = (req,res) => {
  Movie.find({}, (err, datas) => {
    res.status(200).json({
      datas
    })
  })
}

const addMovies = (req,res) => {
  const {
    title,
    popularity,
    tag,
    poster_path
  } = req.body

  const movie = new Movie()

  movie.title = title
  movie.popularity = popularity
  movie.tag = tag
  movie.poster_path = poster_path
  movie.save()
    .then((data) => {
      res.status(201).json({
        data,
        message: 'Saved'
      })
    })
    .catch((err) => {
      console.log(req.body)
      res.status(500).json({
        err
      })
    })
}


module.exports = {
  getAllMovies,
  addMovies
}