var express = require('express');
var router = express.Router();
var BlogAdapter = require(__dirname + '/../adapters/BlogAdapter')

/* GET home page. */
router.get('/', function(req, res, next) {
    var blogadapter = new BlogAdapter();

    blogadapter.getData().then(function(data){
        res.render('index');
    }).catch(function(error){
        res.status(500);
        res.render('error');
    })

    
});

module.exports = router;
