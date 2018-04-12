const axios = require('axios');
const ipAddress = 'http://127.0.0.1:3002';

module.exports = {
  addSeries: async(req, res) => {
    try {
      let data = await axios.post(ipAddress, req.body, req.headers.cache);
      return res.status(201).send(data);
    } catch (err) {
      return res.status(500).send({ info: err.message });
    }
  },

  loadSeries: async(req, res) => {
    if (req.headers.cache)
      return res.status(200).send({
        info: 'series found successfully',
        data: req.headers.cache
      });
    else {
      try {
        let data = await axios.get(ipAddress, req.headers.cache);
        return res.status(200).send(data);
      } catch (err) {
        return res.status(500).send({ info: err.message });
      }
    }
  },

  updateSeries: async(req, res) => {
    try {
      let data = await axios.put(`${ipAddress}/${req.params.id}`, req.body, req.headers.cache);
      return res.status(200).send(data);
    } catch (err) {
      return res.status(500).send({ info: err.message });
    }
  },

  dropSeries: async(req, res) => {
    try {
      let data = await axios.delet(`${ipAddress}/${req.params.id}`, req.headers.cache);
      return res.status(200).send(data);
    } catch (err) {
      return res.status(500).send({ info: err.message });
    }
  }
}