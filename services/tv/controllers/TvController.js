const Tv = require('../models/Tv')

const get = async (req, res) => {
  try {
    const tv = await Tv.find()
    res.status(200).json({
      info: 'tv found successfully',
      data: tv
    })
  } catch (e) {
    /* handle error */
    res.status(500).json({ info: 'Something Went Wrong', error: e })
  }
}

const create = async function (req,res) {
  try {
    const data = await Tv.create(req.body)
    res.status(201).json({
      info: "Success Add Tv",
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
    const data = await Tv.findOneAndUpdate({_id:id}, req.body) 
    res.status(200).json({
      info: "Success Update Tv",
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
    const data = await Tv.findOneAndRemove({_id:id}, req.body) 
    res.status(200).json({
      info: "Success Delete Tv",
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
