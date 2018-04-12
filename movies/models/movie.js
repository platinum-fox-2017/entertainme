const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MoviesSchema = new Schema({
  title: String,
  overview: String,
  poster_path: String,
  popularity: Number,
  tag: []
})

const Movie = mongoose.model('Movie', MoviesSchema)

module.exports = Movie