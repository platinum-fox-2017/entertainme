const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  poster_path: String,
  overview: String,
  title: String,
  popularity: String,
  status: String,
  tag: [
    {
      type: Schema.Types.String
    }
  ]
})
 module.exports = mongoose.model('Movie', MovieSchema);
