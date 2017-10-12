var express = require('express');
var router = express.Router();
var mongo = require('../mongo.js');

/* GET home page. */
outer.get('/', function(req, res, next) {

  rongo(function(results) {
    res.render('index', { title: process.env.TITLE | 'plop', results: results.length });
  });


});

module.exports = router;
