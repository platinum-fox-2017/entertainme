const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tagSchema = Schema ({
  name: String,
  shows: [{
    type: Schema.Types.ObjectId,
    ref: 'Tv'
  }],
  status: String
}, { timestamps: true })

const Tag = mongoose.model('Tag', tagSchema)
module.exports = Tag;