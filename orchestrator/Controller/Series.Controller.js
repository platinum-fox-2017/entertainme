const axios = require('axios')
const { setSeriesCache } = require('../helpers/redis')

const getAllSeries = async (req, res) => {
  const seriesData = await axios.get('http://localhost:3002/')
  if (seriesData) {
    setSeriesCache(seriesData.data)
    res.status(200).json(seriesData.data)
  } else {
    res.status(500).json('Error')
  }
}

const addSeries = async (req, res) => {
  const data = req.body
  const addSer = await axios.post('http://localhost:3002/add', data)
  if (addSer) {
    setSeriesCache(addSer.data.newData)
    res.send(addSer.data.result)
  } else {
    res.status(500).json('Error om')
  }
}

const addTagSeries = async (req, res) => {
  const data = req.body
  const addTag = await axios.post('http://localhost:3002/addtag', data)
  if (addTag) {
    res.send(addTag.data)
  } else {
    res.status(500).json('Error om')
  }
}

const inputTagSer = async (req, res) => {
  const obj = {
    series: req.params.series,
    tag: req.body.tag
  }
  const inputting = await axios.put('http://localhost:3002/inputtag', obj)
  if (inputting) {
    setSeriesCache(addMov.data.newData)
    res.status(200).json(inputting.data.result)
  }
}

const deleteSer = async (req, res) => {
  const seriesid = req.params.seriesid
  const deleting = await axios.delete(`http://localhost:3001/deletmov/${seriesid}`)
  if (deleting) {
    setMovieCache(deleting.data.newData)
    res.status(200).json(deleting.data.result)
  }
}

module.exports = {
  getAllSeries,
  addSeries,
  addTagSeries,
  inputTagSer,
  deleteSer
}