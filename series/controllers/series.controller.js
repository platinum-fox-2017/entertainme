const Series = require('../models/series.model');
const client = require('redis').createClient();

module.exports = {
  create: async(req, res) => {
    try {
      let series = await new Series(req.body).save();

      if(req.headers.cache) {
        let newCache = JSON.parse(req.headers.cache);
        newCache.push(series);
        client.set('series', JSON.stringify(newCache));
      }
      
      return res.status(201).send({
        info: 'series add successfully',
        data: series
      });
    } catch (err) {
      return res.status(500).send({ info: err.message });
    }
  },

  loadAll: async(req, res) => {

    if (req.headers.cache)
      return res.status(200).send({
        info: 'series found successfully',
        data: req.headers.cache
      });

    else {
      try {
        let series = await Series.find();
  
        client.set('series', JSON.stringify(series));
  
        return res.status(200).send({
          info: 'series found successfully',
          data: series
        });
      } catch (err) {
        return res.status(500).send({ info: err.message });
      }
    }
  },

  update: async(req, res) => {
    try {
      let series = await Series.findById(req.params.id);
      series.set(req.body).save();

      if(req.headers.cache) {
        let newCache = JSON.parse(req.headers.cache);
        let index = newCache.findIndex(mov => mov._id == req.params.id);
        newCache.splice(index, 1, series);
        client.set('series', JSON.stringify(newCache));
      }

      return res.status(201).send({ info: 'series update successfully' });
    } catch (err) {
      return res.status(500).send({ info: err.message });
    }
  },

  drop: async(req, res) => {
    try {
      let series = await Series.findByIdAndRemove(req.params.id);

      if(req.headers.cache) {
        let newCache = JSON.parse(req.headers.cache);
        let index = newCache.findIndex(mov => mov._id == req.params.id);
        newCache.splice(index, 1);
        client.set('series', JSON.stringify(newCache));
      }

      return res.status(201).send({ info: 'series delete successfully' });
    } catch (err) {
      return res.status(500).send({ info: err.message });
    }
  }
}