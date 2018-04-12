const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      tagSchema = ({
        name: String,
      })
      Tag = mongoose.model('Tag', tagSchema)
module.exports = Tag