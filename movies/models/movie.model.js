var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
    title: String,
    overview: String,
    poster_path: String,
    tag: String,
    status: String
})

module.exports = mongoose.model('Movie', MovieSchema)