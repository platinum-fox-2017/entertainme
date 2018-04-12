const mongoose = require('mongoose'),
      Schema = mongoose.Schema
      seriesModel = new Schema({
        poster_path: String,
        popularity: String,
        overview: String,
        name: String,
        tag: [{
          type: Schema.Types.ObjectId,
          ref: 'Tag'
        }]
      })
      Series = mongoose.model('Series', seriesModel)
module.exports = Series