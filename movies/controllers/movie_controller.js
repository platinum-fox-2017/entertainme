const Movie = require('../models/Movie')

module.exports = {
  createMovie (req, res) {
    const { title, overview, poster_path, popularity, tag, status } = req.body
    const movie = new Movie({
      title,
      overview,
      poster_path,
      popularity,
      tag,
      status
    })

    movie.save(function (err, movie) {
      if(err) return res.status(500).json({ message: err})
      return res.status(201).json({
        message: 'movie created!',
        movie
      })
    })
  },

  getMovies: async function(req, res) {
    try {
      let movies = await Movie.find()
      return res.status(200).json({
        message: 'Getting all movies',
        movies
      })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  }
}