const axios = require('axios');
const redis = require("redis");
const client = redis.createClient();

async function showData(req, res) {
  try {
    let movies = await axios.get('http://localhost:3000/movies')
    let series = await axios.get('http://localhost:4000/series')
    let data = {
      movies: movies.data,
      series: series.data
    }

    client.set('entertainme', JSON.stringify(data), 'EX', 600)

    res.status(200).json({
      message: 'succes get each data',
      data
    })
  } catch (e) {
    res.status(500).json({
      message: 'error getting data'
    })
  }
}

async function addMovie(req, res) {
  try {
    let body = {
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      tag: req.body.tag,
      status: req.body.status
    }

    await axios.post('http://localhost:3000/movies', body)

    return res.status(201).json({
      message: 'success add Movies'
    })
  } catch (e) {
    res.status(500).json({
      message: 'error'
    })
  }
}

async function addSeries(req, res) {
  try {
    let body = {
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      tag: req.body.tag,
      status: req.body.status
    }

    await axios.post('http://localhost:4000/series', body)

    return res.status(201).json({
      message: 'success add Series'
    })
  } catch (e) {
    res.status(500).json({
      message: 'error'
    })
  }
}

async function editMovie(req, res) {

  try {
    await axios.put(`http://localhost:3000/movies/${req.params.id}`, req.body)

    return res.status(200).json({
      message: 'success update movie'
    })
  } catch (e) {
    return res.status(500).json({
      message: 'error update movie'
    })
  }
}

async function editSeries(req, res) {

  try {
    await axios.put(`http://localhost:4000/series/${req.params.id}`, req.body)

    return res.status(200).json({
      message: 'success update series'
    })
  } catch (e) {
    return res.status(500).json({
      message: 'error update series'
    })
  }
}

async function deleteMovie (req, res) {

    try {
        await axios.delete(`http://localhost:3000/movies/${req.params.id}`)

        return res.status(200).json({
            message: "success delete data movie",
        })
    } catch (error) {
        res.status(500).json({
            message: "error delete data movie"
        })
    }

}

async function deleteSeries (req, res) {

    try {
        await axios.delete(`http://localhost:4000/series/${req.params.id}`)

        return res.status(200).json({
            message: "success delete data series",
        })
    } catch (error) {
        res.status(500).json({
            message: "error delete data series"
        })
    }

}

module.exports = {
  showData,
  addMovie,
  addSeries,
  editMovie,
  editSeries,
  deleteMovie,
  deleteSeries
};
