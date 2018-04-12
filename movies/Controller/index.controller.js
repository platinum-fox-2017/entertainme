const Movies = require('../Model/Movies.Model')
const Tag = require('../Model/Tag.Model')

const getAllMovies = async (req, res) => {
  console.log('hello')
  const allmovies = await Movies.find()
  if (allmovies) {
    console.log(allmovies)
    res.status(200).json(allmovies)
  }
}

const addMovies = async (req, res) => {
  const { overview, title, poster_path, popularity } = req.body
  const newMovie = new Movies({
    overview, title, poster_path, popularity: Number(popularity)
  })
  try {
    const adding = await newMovie.save()
    if (adding) {
      res.status(200).json(adding)
    } else {
      res.status(500).send('Error om')
    }
  } catch (err) {
    res.status(500).send('Error om')
  }
}

const addTag = async (req, res) => {
  console.log(req.body)
  const { name } = req.body
  const newTag = new Tag({
    name
  })
  console.log(newTag)
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
  const {movie, tag} = req.body
  const editmovie = await Movies.update({_id: movie},{'$push':{tag: tag}})
  if (editmovie) {
    console.log(editmovie)
  } else {
    res.status(500).send('Error om')
  }
}

module.exports = {
  getAllMovies,
  addMovies,
  addTag,
  inputTag
}