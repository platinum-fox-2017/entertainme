  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  const movieSchema = new Schema({
    poster_path:  String,
    overview: String,
    title:   String,
    popularity: Number,
    tag: Array,
    status: String
  });

module.exports = mongoose.model('Movie', movieSchema)
