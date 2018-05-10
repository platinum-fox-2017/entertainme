const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const seriesSchema = new Schema({
  title: String,
  overview: String,
  poster_path: String,
  popularity: String,
  tag: String,
  status: String
},{
  timestamps: true
});

const Series = mongoose.model('Series', seriesSchema);
module.exports = Series
