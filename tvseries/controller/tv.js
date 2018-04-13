const Tv = require('../model/tv')

module.exports = {
  showTv: async(req,res)=> {
    try{
    const showTv = await Tv.find().populate('Tag')
        res.status(201).send({
          message: 'show all tv success',
          data: showTv
        })
    }catch(err){
      res.status(500).send({
        message: 'errorr show all tv'
      })
    }
  },
  addTv: async(req,res) => {
    try{
      const tv = await Tv.create({
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        tag: req.body.tag
      })
      res.status(200).json({
        message: 'success add tv',
        data: tv
      })
    }catch(err){
      res.status(500).send({
        message: `error create tv ${err}`
      })
    }
  },
  updateTv: async (req,res) => {
    try{
      let id = req.params.id
      const updateTv = await Tv.updateOne({_id:id},{
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      tag: req.body.tag
      })
      res.status(201).send({
        message: 'update movie success',
        data: updateTv
      }) 
    }catch(err){
      res.status(500).send({
        message: 'error update movies'
      })
    }
  },
  deleteTv: async (req,res) => {
    try{
      let id = req.params.id
      const deleteTv = await Tv.deleteOne({_id:id})
      res.status(201).send({
        message: 'success delete data',
        data: deleteTv 
      })
    }catch(err){
      res.status(500).send({
        message: `errorr delete data ${err}`
      })
    }
  }
}