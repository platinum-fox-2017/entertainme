const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const entertainme = require('./routes/entertainme')
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use('/entertainme', entertainme)

app.listen(3000, () => console.log('Example app listening on port 3000!'))