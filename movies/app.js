const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/movies', function (err) {
  if (err) {
      throw new Error()
  }else{
    console.log('MongoDB Movies is Connected')
  }
})

const movies = require('./routes/movies.js')

app.use('/movies', movies)

app.listen(3001, () => console.log('Example app listening on port 3001!'))