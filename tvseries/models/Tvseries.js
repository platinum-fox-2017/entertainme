const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const tvseriesSchema = new Schema({
    title: String,
    overview: String,
    poster_path: String,
    popularity: Number,
    tag: [],
    status: String
})

let Tvseries = mongoose.model('Tvseries', tvseriesSchema)

module.exports = Tvseries