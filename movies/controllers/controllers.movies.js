const Movie = require('../models/models.movies')

module.exports = {
  findAll: async (req, res) => {
    try {
      let data = await Movie.find()
      return res.status(200).json({
        message: 'succed get all movies',
        data
      })
    } catch (err) {
      return res.status(500).json({
        message: 'error get all movies',
        err
      })
    }
  },
  create: async (req, res) => {
    try {
      let { title, overview, poster_path, popularity, tag } = req.body
      await Movie.create({
        title,
        overview,
        poster_path,
        popularity,
        tag
      })
      return res.status(201).json({
        message: 'succeed create new movies',
      })
    } catch (err) {
      return res.status(500).json({
        message: 'error create new movies',
        err
      })
    }
  },
  update: async (req, res) => {
    try {
      let data = await Movie.findByIdAndUpdate(
        req.params.id,
        req.body, {
            new: true
        }
      )
      return res.status(200).json({
          message: "Succeed to update post data",
          data
      })
    } catch (err) {
      return res.status(400).json({
          message: "failed to update data"
      })
    }
  },
  destroy: async (req, res) => {
    try {
      await Movie.findByIdAndRemove(
        req.params.id
      )
      return res.status(200).json({
          message: "Succeed to delete data"
      })
    } catch (err) {
      return res.status(400).json({
          message: "Failed to delete data"
      })
    }
  },
}

