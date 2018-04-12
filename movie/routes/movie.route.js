const express = require('express');
const router = express.Router();
const { create, loadAll, update, drop } = require('../controllers/movie.controller');

module.exports = router
  .get('/', loadAll)
  .post('/', create)
  .put('/:id', update)
  .delete('/:id', drop)