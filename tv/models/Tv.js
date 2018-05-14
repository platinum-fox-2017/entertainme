'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

module.exports = mongoose.model('Tv', schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  overview: {
    type: String,
    lowercase: true,
    trim: true,
    required: true
  },
  poster_path: String,
  popularity: Number,
  tag: [{
    type: String,
  }],
  status: String
}, {
  timestamps: true
})
)