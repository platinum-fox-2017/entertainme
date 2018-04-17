const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tvSchema = new Schema ({
  title: String,
  overview: String,
  poster_path: String,
  popularity: Number,
  tag: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag'
  }]
})

module.exports = mongoose.model('Tv', tvSchema)