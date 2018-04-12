const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tvSchema = Schema ({
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

const Tv = mongoose.model('Tv', tvSchema)
module.exports = Tv;