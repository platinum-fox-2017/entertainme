const Movies = require('../models/Movies')

const createMovie = async (req, res) => {
  try {
    const addMovie = await Movies.create({
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      tag: req.body.tag,
      status: req.body.status
    })
    res.status(200).json({
      info: '1 Movie added successfully',
      data: addMovie
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  } 
} 

const getMovies = async (req, res) => {
  try {
    console.log('masuk movies/ getMovies')
    const movies = await Movies.find()
    res.status(200).json({
      info: 'Fetch Movies successfully',
      data: movies
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const updateMovie = async (req, res) => {
  try {
    const movieUpdated = await Movies.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      tag: req.body.tag,
      status: req.body.status,
    })
    res.status(200).json({
      info: 'Update Movie Success!',
      data: movieUpdated
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const deleteMovie = async (req, res) => {
  try {
    await Movies.findByIdAndRemove(req.params.id)

    res.status(200).json({
      info: 'Delete Movie Success !'
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

module.exports = { 
  createMovie, 
  getMovies, 
  updateMovie,
  deleteMovie 
}
