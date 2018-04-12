const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Movie', new Schema({
  title: String,
  overview: String,
  poster_path: String,
  popularity: Number,
  tag: [],
  status: String,
}));