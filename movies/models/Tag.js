const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tagSchema = Schema ({
  name: String,
  movies: [{
    type: Schema.Types.ObjectId,
    ref: 'Movie'
  }],
  status: String
}, { timestamps: true })

const Tag = mongoose.model('Tag', tagSchema)
module.exports = Tag;