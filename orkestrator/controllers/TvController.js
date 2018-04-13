const redis = require('redis')
  const axios = require('axios')
const client = redis.createClient()

const create = async (req, res) => {
  try {
    const newTv =  await axios.post('http://localhost:3002/tvs',req.body)
    client.get('entertain', function(err, reply) {
      let entertain = JSON.parse(reply)
      entertain.series.data.push(newTv.data.data)
      client.set('entertain', JSON.stringify(entertain), 'EX', 300)
      res.status(201).json(newTv.data)
    })
  } catch (e) {
    /* handle error */
    res.status(500).json({info: "Somthing Went Wrong when create tv"})
  }
}

const update = async (req, res) => {
  const id = req.params.id
  try {
  
    const updateTv =  await axios.put(`http://localhost:3002/tvs/${id}`,req.body)
    client.get('entertain', function(err, reply) {
      let entertain = JSON.parse(reply)
      entertain.series.data.map(ent => {
        if (ent._id == id) {
          return  updateTv.data
        }
        return ent
      })
      client.set('entertain', JSON.stringify(entertain), 'EX', 300)
      res.status(200).json(updateTv.data)
    })
  } catch (e) {
    /* handle error */
    res.status(500).json({info: "Somthing Went Wrong when update tv"})
  }
}

const destroy = async (req, res) => {
  const id = req.params.id
  try {
    const deleteMovie = await axios.delete(`http://localhost:3002/tvs/${id}`)
    client.get('entertain', function(err, reply) {
      let entertain = JSON.parse(reply)
      let newEntertain = entertain.movies.data.filter(ent => {
          return ent._id != id
      })
      entertain.series.data = newEntertain
      client.set('entertain', JSON.stringify(entertain), 'EX', 300)
      res.status(200).json(deleteMovie.data)
    })
  } catch (e) {
    /* handle error */
    res.status(500).json({info: "Somthing Went Wrong when delete tv"})
  }
}

module.exports = {
  create,
  update,
  destroy
}

