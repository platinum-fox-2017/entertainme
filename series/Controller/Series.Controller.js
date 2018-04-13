const Series = require('../Model/Series.Model')
const Tag = require('../Model/Series.Model')

const getAllSeries = async (req, res) => {
  const allSeries = await Series.find()
  if (allSeries) {
    res.status(200).json(allSeries)
  }
}

const addSeries = async (req, res) => {
  const { overview, title, poster_path, popularity } = req.body
  const newSeries = new Series({
    overview, title, poster_path, popularity: Number(popularity)
  })
  try {
    const adding = await newSeries.save()
    if (adding) {
      const getSeries = await Series.find()
      if (getSeries) {
        res.status(200).json({
          result: adding,
          newData: getSeries
        })
      } else {
        res.status(500).send('Error om')
      }
    } else {
      res.status(500).send('Error om')
    }
  } catch (err) {
    res.status(500).send('Error om')
  }
}

const addTag = async (req, res) => {
  const { name } = req.body
  const newTag = new Tag({
    name
  })
  try {
    const adding = await newTag.save()
    if (adding) {
      res.status(200).json(adding)
    } else {
      res.status(500).send('Error om')
    }
  } catch (err) {
    res.status(500).send('Error om')
  }
}

const inputTag = async (req, res) => {
  const {series, tag} = req.body
  const editseries = await Series.update({_id: series},{'$push':{tag: tag}})
  if (editseries) {
    const getSeries = await Series.find()
      if (getSeries) {
        res.status(200).json({
          result: editseries,
          newData: getSeries
        })
      } else {
        res.status(500).send('Error om')
      }
  } else {
    res.status(500).send('Error om')
  }
}

const deleteSeries = async (req, res) => {
  const seriesid = req.params.seriesid
  try {
    const deleteSer = await Movies.remove({'_id': seriesid})
    if (deleteSer) {
      const getMovie = await Movies.find()
      if (getSeries) {
        res.status(200).json({
          result: deleteSer,
          newData: getSeries
        })
      } else {
        res.status(500).send('Error om')
      }
    } else {
      res.status(500).json('Error om')  
    }
  } catch (err) {
    res.status(500).json('Error om')
  }
}

module.exports = {
  getAllSeries,
  addSeries,
  deleteSeries,
  inputTag,
  addTag
}