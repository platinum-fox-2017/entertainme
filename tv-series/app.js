const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const PORT = 3002

const tv = require('./routes/index')

require('dotenv').config()

const dbUrl = `mongodb://${process.env.MLABUSER}:${process.env.MLABPASSWORD}@ds243059.mlab.com:43059/entertainme`

const app = express()
mongoose.connect(dbUrl, (err) => {
  if(!err) console.log('Connected to MLAB!')
  else throw new Error(err)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/tv', tv)

app.listen(PORT, () => {
  console.log(`Movies running on port ${PORT}`)
})