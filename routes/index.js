const express = require('express');
const router = express.Router();
// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../tweetBank');
router.get('/', function (req, res) {
  let datos = tweetBank.list();
  res.render( 'index', { tweets: datos } );
});

module.exports = router;
