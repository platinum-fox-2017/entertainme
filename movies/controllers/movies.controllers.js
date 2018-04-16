const Movie = require('../models/movie')

const getAllMovies = (req,res) => {
  Movie.find({}, (err, data) => {
    res.status(200).json({
      info: 'Movies Found Successfully',
      data
    })
  })
}

const addMovies = (req,res) => {
  const {
    title,
    popularity,
    tag,
    poster_path,
    overview
  } = req.body

  const movie = new Movie()

  movie.title = title
  movie.popularity = popularity
  movie.tag = tag
  movie.poster_path = poster_path
  movie.overview = overview
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

const updateMovie = (req,res) => {
  Movie.findByIdAndUpdate(req.params.movieId,req.body, {new: true}, (err, movie) => {
    if (err) return res.status(500).send(err);
    return res.send(movie);
  })
}

const deleteMovie = (req,res) => {
  Movie.findOneAndRemove({_id : req.params.movieId }, (err, movie) => {
    if (err) return res.status(500).send(err);
    const response = {
        message: "movie successfully deleted"
    }
    return res.status(200).send(response);
  })
}


module.exports = {
  getAllMovies,
  addMovies,
  updateMovie,
  deleteMovie,
}