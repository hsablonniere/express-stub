var express = require('express');
var router = express.Router();
var mongo = require('../mongo.js');

/* GET home page. */
router.get('/', function(req, res, next) {

  mongo(function(results) {
    res.render('index', { title: process.env.TITLE , results: results.length });
  });


});

module.exports = router;
