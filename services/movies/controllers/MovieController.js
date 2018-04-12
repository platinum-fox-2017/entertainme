const Movie = require('../models/Movie')

const get = async (req, res) => {
  try {
    const movies = await Movie.find()
    res.status(200).json({
      info: 'movies found successfully',
      data: movies
    })
  } catch (e) {
    /* handle error */
    res.status(500).json({ info: 'Something Went Wrong', error: e })
  }
}

const create = async function (req,res) {
  try {
    const data = await Movie.create(req.body)
    res.status(201).json({
      info: "Success Add Movie",
      data
    })
  } catch (e) {
    /* handle error */
    res.status(500).json({
      info: e
    })
  } 
}

const update = async function (req,res) {
  const id = req.params.id;
  try {
    const data = await Movie.findOneAndUpdate({_id:id}, req.body) 
    res.status(200).json({
      info: "Success Update Movie",
      data
    })
  } catch (e) {
    /* handle error */
    res.status(500).json({
      info: e
    })
  } 
}
const destroy =  async function (req,res) {

  const id = req.params.id;
  try {
    const data = await Movie.findOneAndRemove({_id:id}, req.body) 
    res.status(200).json({
      info: "Success Delete Movie",
      data
    })
  } catch (e) {
    /* handle error */
info: e
    res.status(500).json({
    })
  } 
}

module.exports = {
  get,
  create,
  update,
  destroy
}
