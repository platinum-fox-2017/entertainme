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

const updateTV = (req,res) => {
  Tv.findByIdAndUpdate(req.params.tvId,req.body, {new: true}, (err, tv) => {
    if (err) return res.status(500).send(err);
    return res.send(tv);
  })
}

const deleteTV = (req,res) => {
  Tv.findOneAndRemove({_id : req.params.tvId }, (err, tv) => {
    if (err) return res.status(500).send(err);
    const response = {
        message: "tv successfully deleted"
    }
    return res.status(200).send(response);
  })
}


module.exports = {
  getAllTv,
  addTv,
  updateTV,
  deleteTV
}