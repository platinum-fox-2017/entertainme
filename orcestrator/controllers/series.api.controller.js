const axios = require('axios');
const ipAddress = 'http://127.0.0.1:3002';

module.exports = {
  addSeries: async(req, res) => {
    try {
      let response = await axios.post(ipAddress, req.body, { headers: { cache: JSON.stringify(req.headers.cacheSeries) } });
      return res.status(201).send(response.data);
    } catch (err) {
      return res.status(500).send({ info: err.message });
    }
  },

  loadSeries: async(req, res) => {
    if (req.headers.cacheSeries)
      return res.status(200).send({
        info: 'series found successfully',
        data: req.headers.cacheSeries
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

  updateSeries: async(req, res) => {
    try {
      let response = await axios.put(`${ipAddress}/${req.params.id}`, req.body, { headers: { cache: JSON.stringify(req.headers.cacheSeries) } });
      return res.status(200).send(response.data);
    } catch (err) {
      return res.status(500).send({ info: err.message });
    }
  },

  dropSeries: async(req, res) => {
    try {
      let response = await axios.delete(`${ipAddress}/${req.params.id}`, { headers: { cache: JSON.stringify(req.headers.cacheSeries) } });
      return res.status(200).send(response.data);
    } catch (err) {
      return res.status(500).send({ info: err.message });
    }
  }
}