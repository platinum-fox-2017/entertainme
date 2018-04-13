const TVseries = require ('../models/TVseries.model');

const getTVseries = (req, res) => {
  TVseries.find()
  .then(tvseries => {
    res.status(200).send(tvseries)
    })
  .catch(err => {
    res.status(500).send(err)
  })
}

const addTVseries = (req,res) => {
  TVseries.create(req.body)
  .then(() => {
    res.status(201).json({
      message: "successfully add new Movie"
    })
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

module.exports = { getTVseries, addTVseries }
