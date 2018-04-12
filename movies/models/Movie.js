const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = Schema ({
  title: String,
  overview: String,
  poster_path: String,
  popularity: Number,
  tag: [{
    type: Schema.Types.ObjectId,
    ref: 'Tag'
  }],
  status: String
}, { timestamps: true })

const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie;