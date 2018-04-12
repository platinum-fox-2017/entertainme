const axios = require('axios')
const { setMovieCache } = require('../helpers/redis')

const getAllMovie = async (req, res) => {
  const moviesData = await axios.get('http://localhost:3001/')
  if (moviesData) {
    setMovieCache(moviesData.data)
    res.status(200).json(moviesData.data)
  } else {
    res.status(500).json('Error')
  }
  
}

const addMovie = async (req, res) => {
  const data = req.body
  const addMov = await axios.post('http://localhost:3001/add', data)
  if (addMov) {
    res.send(addMov.data)
  } else {
    res.status(500).json('Error om')
  }
}

const addTagMovie = async (req, res) => {
  const data = req.body
  const addTag = await axios.post('http://localhost:3001/addtag', data)
  if (addTag) {
    res.send(addTag.data)
  } else {
    res.status(500).json('Error om')
  }
}

const inputTag = async (req, res) => {
  const obj = {
    movie: req.params.movie,
    tag: req.body.tag
  }
  const inputting = await axios.put('http://localhost:3001/inputtag', obj)
  if (inputting) {
    console.log(inputting)
  }
}

module.exports = {
  getAllMovie,
  addMovie,
  addTagMovie,
  inputTag
}