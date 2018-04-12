const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()

const create = async (req, res) => {
  try {
    const newMovie =  await axios.post('http://localhost:3001/movies',req.body)
    client.get('entertain', function(err, reply) {
      let entertain = JSON.parse(reply)
      entertain.movies.data.push(newMovie.data.data)
      client.set('entertain', JSON.stringify(entertain), 'EX', 300)
      res.status(201).json(newMovie.data)
    })
  } catch (e) {
    /* handle error */
    res.status(500).json({info: "Somthing Went Wrong when create movie"})
  }
}

const update = async (req, res) => {
  const id = req.params.id
  try {
    const updateMovie =  await axios.put(`http://localhost:3001/movies/${id}`,req.body)
    client.get('entertain', function(err, reply) {
      let entertain = JSON.parse(reply)
      entertain.movies.data.map(ent => {
        if (ent._id == id) {
          return  updateMovie.data
        }
        return ent
      })
      client.set('entertain', JSON.stringify(entertain), 'EX', 300)
      res.status(200).json(updateMovie.data)
    })
  } catch (e) {
    /* handle error */
    res.status(500).json({info: "Somthing Went Wrong when update movie"})
  }
}

const destroy = async (req, res) => {
  const id = req.params.id
  try {
    const deleteMovie = await axios.delete(`http://localhost:3001/movies/${id}`)
    client.get('entertain', function(err, reply) {
      let entertain = JSON.parse(reply)
      let newEntertain = entertain.movies.data.filter(ent => {
          return ent._id != id
      })
      entertain.movies.data = newEntertain
      client.set('entertain', JSON.stringify(entertain), 'EX', 300)
      res.status(200).json(deleteMovie.data)
    })
  } catch (e) {
    /* handle error */
    res.status(500).json({info: "Somthing Went Wrong when delete movie"})
  }
}

module.exports = {
  create,
  update,
  destroy
}

