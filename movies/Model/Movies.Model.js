const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      movieSchema = ({
        poster_path: String,
        overview: String,
        title: String,
        popularity: Number,
        tag: [{
          type: Schema.Types.ObjectId,
          ref: 'Tag'
        }],
      })
      Movies = mongoose.model('Movies', movieSchema)
module.exports = Movies