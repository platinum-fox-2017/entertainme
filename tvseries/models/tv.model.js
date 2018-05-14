var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TVSchema = new Schema({
    title: String,
    overview: String,
    poster_path: String,
    popularity: String,
    tag: String,
    status: String
})

module.exports = mongoose.model('TVSeries', TVSchema)