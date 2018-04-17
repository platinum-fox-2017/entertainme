const Movies = require('../model/Movies')

module.exports = {

  getMovies: async (req, res) => {
    try {
      let movies = await Movies.find().limit(50)
      res.status(200).send(movies)
    } catch (e) {
      res.status(500).send(e)
    }
  },

  addMovie: (req, res) => {
    let newMovie = new Movies({
      poster_path: req.body.poster_path,
      overview: req.body.overview,
      title: req.body.title,
      popularity: req.body.popularity,
      status: req.body.status
    })
    newMovie.save((err, createdMovie) => {
      if (err) { return res.status(500).send(err) }
      return res.status(200).send(createdMovie)
    })
  },

  updateMovie: async (req, res) => {
    const id = req.params.id
    let updateData = {}
    if (req.body.poster_path) {updateData.poster_path = req.body.poster_path}
    if (req.body.overview) {updateData.overview = req.body.overview}
    if (req.body.title) {updateData.title = req.body.title}
    if (req.body.popularity) {updateData.popularity = req.body.popularity}
    if (req.body.status) {updateData.status = req.body.status}

    try {
      let update = await Movies.findByIdAndUpdate({_id: id}, updateData, {new:true})
      res.status(200).send(update)
    } catch (e) {
      res.status(500).send(e)
    }
  },

  deleteMovie: async (req, res) => {
    const id = req.params.id
    try {
      let deleted = await Movies.findOneAndRemove({_id: id})
      res.status(200).send(deleted)
    } catch (e) {
      res.status(500).send(e)
    }
  }

};
