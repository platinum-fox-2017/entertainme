const axios = require('axios');
const redis = require("redis");
const client = redis.createClient();

async function getData (req, res) {
    if (req.cache) {
        res.status(200).json({
            message: "Data from cache",
            data: req.data
        })
    } else {
        try {
            let movie = await axios('http://localhost:3001/api/movies')
            let tvseries = await axios('http://localhost:3002/api/tvseries')
            let data = {
                movie: movie.data,
                tvseries: tvseries.data
            }
    
            client.set('entertainme', JSON.stringify(data), 'EX', 600)
    
            res.status(200).json({
               data
            })
        } catch (error) {
            res.status(500).json({
                message: 'Data Not Found'
            })
        }
    }
}

async function addMovie (req, res) {

    try {
        let item = {
            title: req.body.title,
            overview: req.body.overview,
            poster_path: req.body.poster_path,
            tag: req.body.tag,
            status: req.body.status
        }

        await axios.post('http://localhost:3001/api/movies', item)

        return res.status(201).json({
            message: "Create Movie Success",
        })

    } catch (error) {
        res.status(500).json({
            message: "Delete movie failed",
        })
    }

}

async function addTVseries (req, res) {

    try {
        let item = {
            title: req.body.title,
            overview: req.body.overview,
            poster_path: req.body.poster_path,
            popularity: req.body.popularity,
            tag: req.body.tag,
            status: req.body.status
        }

        await axios.post('http://localhost:3002/api/tvseries', item)

        return res.status(201).json({
            message: "Add TV Series successfully",
        })

    } catch (error) {
        res.status(500).json({
            message: "Delete movie failed",
        })
    }

}

async function updateMovie (req, res) {

    try {
        console.log(req.body)
        await axios.put(`http://localhost:3001/api/movies/${req.params.id}`, req.body)
  
        return res.status(200).json({
            message: "Update data success",
        })
    } catch (error) {
        return res.status(500).json({
            message: "Update data failed",
            error
        })
    }
}

async function updateTVSeries (req, res) {

    try {
        console.log(req.body)
        let updateData = await axios.put(`http://localhost:3002/api/tvseries${req.params.id}`, req.body)

        res.status(200).json({
            message: "Update data TV series successfully",
            updateData
        })

    } catch (error) {
        res.status(500).json({
            message: "Failed update data TV series"
        })
    }

}

async function deleteMovie (req, res) {

    try {
        console.log('masuk')
        await axios.delete(`http://localhost:3001/api/movies/${req.params.id}`)

        return res.status(200).json({
            message: "Delete data movie success",
        })
    } catch (error) {
        res.status(500).json({
            message: "Delete data movie failed"
        })
    }

} 

async function deleteTVSeries (req, res) {

    try {

        await axios.delete(`http://localhost:3002/api/tvseries/${req.params.id}`)

        res.status(200).json({
            message: "Delete data successfully",
        })

    } catch (error) {
        res.status(500).json({
            message: "Failed delete data"
        })
    }

}




module.exports = {
    getData,
    addMovie,
    addTVseries,
    updateMovie,
    updateTVSeries,
    deleteMovie,
    deleteTVSeries
}