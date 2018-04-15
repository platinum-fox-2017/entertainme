const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tvSeriesSchema = Schema ({
    title: String,
    overview: String,
    poster_path: String,
    popularity: Number,
    tag: []
})

const TvSeries = mongoose.model('TvSeries', tvSeriesSchema);

module.exports = TvSeries