var express = require('express');
var router = express.Router();
var BlogAdapter = require(__dirname + '/../adapters/BlogAdapter')
var GitHubAdapter = require(__dirname + '/../adapters/GitHubAdapter')


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

module.exports = router;
