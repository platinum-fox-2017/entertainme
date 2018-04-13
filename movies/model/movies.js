const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema ({
  title: String,
  overview: String,
  poster_path: String,
  popularity: Number,
  tag: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag'
  }]
})

module.exports = mongoose.model('Movies', movieSchema)