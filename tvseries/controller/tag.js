const Tag = require('../model/tag')

module.exports = {
  show: async(req,res)=> {
    try{
      const showTag = await Tag.find().populate('Tag')
        res.status(201).send({
          message: 'show all Tag success',
          data: showTag
        })
    }catch(err){
      res.status(500).send({
        message: 'errorr show all Tag'
      })
    }
  },
  add: async(req,res) => {
    try{
      const Tags = await Tag.create({
        text: req.body.text
      })
      res.status(200).json({
        message: 'success add Tag',
        data: Tags
      })
    }catch(err){
      res.status(500).send({
        message: `error create Tags ${err}`
      })
    }
  }
}