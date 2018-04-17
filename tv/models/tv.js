const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TvSchema = new Schema({
  title: String,
  overview: String,
  poster_path: String,
  popularity: Number,
  tag: []
})

const Tv = mongoose.model('Tv', TvSchema)

module.exports = Tv