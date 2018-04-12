const Shows = require('../model/Shows')

module.exports = {

  getShows: async (req, res) => {
    try {
      let movies = await Shows.find().limit(50)
      res.status(200).send(movies)
    } catch (e) {
      res.status(500).send(e)
    }
  },

  addShow: (req, res) => {
    let newShows = new Shows({
      poster_path: req.body.poster_path,
      overview: req.body.overview,
      title: req.body.title,
      popularity: req.body.popularity,
      status: req.body.status
    })
    newShows.save((err, createdShows) => {
      if (err) { return res.status(500).send(err) }
      return res.status(200).send(createdShows)
    })
  },

  updateShow: async (req, res) => {
    const id = req.params.id
    let updateData = {}
    if (req.body.poster_path) {updateData.poster_path = req.body.poster_path}
    if (req.body.overview) {updateData.overview = req.body.overview}
    if (req.body.title) {updateData.title = req.body.title}
    if (req.body.popularity) {updateData.popularity = req.body.popularity}
    if (req.body.status) {updateData.status = req.body.status}

    try {
      let update = await Shows.findByIdAndUpdate({_id: id}, updateData, {new:true})
      res.status(200).send(update)
    } catch (e) {
      res.status(500).send(e)
    }
  },

  deleteShow: async (req, res) => {
    const id = req.params.id
    try {
      let deleted = await Shows.findOneAndRemove({_id: id})
      res.status(200).send(deleted)
    } catch (e) {
      res.status(500).send(e)
    }
  }

};
