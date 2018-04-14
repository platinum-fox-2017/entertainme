const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const tvshowSchema = new Schema ({
  title: String,
  overview: String,
  poster_path: String,
  popularity: Number,
  tag: [String]
})

module.exports = mongoose.model('Tvshow', tvshowSchema)