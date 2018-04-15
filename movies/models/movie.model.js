const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = Schema ({
    title: String,
    overview: String,
    poster_path: String,
    popularity: Number,
    tag: []
})

const Book = mongoose.model('Book', movieSchema);

module.exports = Book