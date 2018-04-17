const express = require('express');
const router = express.Router();
const {showTv,addTv} = require('../controller/entertainme');

router.get('/', showTv );
router.post('/', addTv);


module.exports = router;