const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const serialSchema = new Schema({
  title: {
    type: String,
    default: 'Untitled Series'
  },
  overview: {
    type: String,
    default: 'Undescribed Series'
  },
  poster_path: {
    type: String,
    default: '../public/images/no-image.png'
  },
  popularity: {
    type: Number,
    default: 0
  },
  tag: [],
  status: {
    type: String,
    default: 'PG13'
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('TVserial', serialSchema)