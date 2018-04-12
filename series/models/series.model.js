const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Series', new Schema({
  title: String,
  overview: String,
  poster_path: String,
  popularity: Number,
  tag: [],
  status: String,
}));