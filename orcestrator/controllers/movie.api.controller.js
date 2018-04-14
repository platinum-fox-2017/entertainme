const axios = require('axios');
const ipAddress = 'http://127.0.0.1:3001';

module.exports = {
  addMovie: async(req, res) => {
    try {
      let response = await axios.post(ipAddress, req.body, { headers: { cache: JSON.stringify(req.headers.cacheMovies) } });
      return res.status(201).send(response.data);
    } catch (err) {
      return res.status(500).send({ info: err.message });
    }
  },

  loadMovies: async(req, res) => {
    if (req.headers.cacheMovies)
      return res.status(200).send({
        info: 'movies found successfully',
        data: req.headers.cacheMovies
      });
    else {
      try {
        let response = await axios.get(ipAddress);
        return res.status(200).send(response.data);
      } catch (err) {
        return res.status(500).send({ info: err.message });
      }
    }
  },

  updateMovie: async(req, res) => {
    try {
      let response = await axios.put(`${ipAddress}/${req.params.id}`, req.body, { headers: { cache: JSON.stringify(req.headers.cacheMovies) } });
      return res.status(200).send(response.data);
    } catch (err) {
      return res.status(500).send({ info: err.message });
    }
  },

  dropMovie: async(req, res) => {
    try {
      let response = await axios.delete(`${ipAddress}/${req.params.id}`, { headers: { cache: JSON.stringify(req.headers.cacheMovies) } });
      return res.status(200).send(response.data);
    } catch (err) {
      return res.status(500).send({ info: err.message });
    }
  }
}