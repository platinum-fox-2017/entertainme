const Tv = require('../models/Tv')

module.exports = {
  createShow (req, res) {
    const { title, overview, poster_path, popularity, tag, status } = req.body
    const tv = new Tv({
      title,
      overview,
      poster_path,
      popularity,
      tag,
      status
    })

    tv.save(function (err, show) {
      if(err) return res.status(500).json({ message: err})
      return res.status(201).json({
        message: 'show created!',
        show
      })
    })
  },

  getShows: async function (req, res) {
    try {
      let shows = await Tv.find()
      return res.status(200).json({
        message: 'getting all shows',
        shows
      })
    } catch (err) {
      return res.status(500).json({
        message: err
      })
    }
  }
}