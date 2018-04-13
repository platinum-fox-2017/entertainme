const mongoose = require('mongoose'),
      Schema = mongoose.Schema
      tagModel = new Schema({
        name: String,
      })
      Tag = mongoose.model('Tag', tagModel)
module.exports = Tag