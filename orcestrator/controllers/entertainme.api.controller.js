const axios = require('axios');
const ipAddressMovies = 'http://127.0.0.1:3001';
const ipAddressSeries = 'http://127.0.0.1:3002';

module.exports = {
  loadAll: async(req, res) => {
    let dataSeries = null;
    let dataMovies = null;
    
    if (req.headers.cacheSeries) dataSeries = req.headers.cacheSeries;
    else {
      try {
        let response = await axios.get(ipAddressSeries);
        dataSeries = response.data;
      } catch (err) {
        return res.status(500).send({ info: err.message });
      }
    }

    if (req.headers.cacheMovies) dataMovies = req.headers.cacheMovies;
    else {
      try {
        let response = await axios.get(ipAddressMovies);
        dataMovies = response.data;
      } catch (err) {
        return res.status(500).send({ info: err.message });
      }
    }

    return res.status(200).send({
      info: 'movies and series found successfully',
      movies: dataMovies,
      series: dataSeries
    })
    
  }
}