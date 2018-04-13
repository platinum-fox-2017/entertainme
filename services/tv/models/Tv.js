const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tvSchema = new Schema({
  poster_path:  String,
  overview: String,
  title:   String,
  popularity: Number,
  tag: Array,
  status: String
});

module.exports = mongoose.model('Tv', tvSchema)
