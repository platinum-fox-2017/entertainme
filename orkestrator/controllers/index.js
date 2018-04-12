const redis = require("redis");
const axios = require('axios');

const client = redis.createClient();

module.exports = {

  getAll: async (req, res) => {
    let cache = req.headers.cache
    if(cache) { return res.status(200).send(cache); };
    console.log('blum ada')
    const movie = await axios.get('http://localhost:3001/movie');
    const tv = await axios.get('http://localhost:3002/tv');

    const data = {
      movie: movie.data,
      tv: tv.data
    }
    
    
    client.set('entertainme', JSON.stringify(data));
    client.expire('entertainme', 5);
    return res.status(200).send(data);
  }
};