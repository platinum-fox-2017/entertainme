const express = require ('express');
const { getTVseries, addTVseries } = require ('../controllers/TVseries.Controller');
const router = express.Router()

router
.get('/', getTVseries)
.post('/', addTVseries)

module.exports = router;