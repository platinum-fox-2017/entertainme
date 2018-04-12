const Tv = require('../models/tv')

const getAllTv = (req,res) => {
  Tv.find({}, (err, data) => {
    res.status(200).json({
      info: 'tv found successfully',
      data
    })
  })
}

const addTv = (req,res) => {
  const {
    title,
    popularity,
    tag,
    poster_path
  } = req.body

  const tv = new Tv()

  tv.title = title
  tv.popularity = popularity
  tv.tag = tag
  tv.poster_path = poster_path
  tv.save()
    .then((data) => {
      res.status(201).json({
        data,
        message: 'Saved'
      })
    })
    .catch((err) => {
      console.log(req.body)
      res.status(500).json({
        err
      })
    })
}


module.exports = {
  getAllTv,
  addTv
}