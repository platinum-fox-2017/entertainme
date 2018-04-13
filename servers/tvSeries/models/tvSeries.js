const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TvSeriesSchema = new Schema({
  title: String,
  overview: String,
  poster_path: String,
  popularity: Number,
  tag: Array,
  status: Boolean
})

module.exports = mongoose.model('tvSeries', TvSeriesSchema)
