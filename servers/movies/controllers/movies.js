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
      info: 'error creating data'
    })
  } 
} 

const getMovies = async (req, res) => {
  try {
    const movies = await Movies.find().populate('tag')
    res.status(200).json({
      info: 'Fetch Movies successfully',
      data: movies
    })
  } catch (error) {
    res.status(500).json({
      info: 'error while fetching data' 
    })
  }
}

module.exports = { createMovie, getMovies }
