var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.render('index');
});

router.get('/status', function(req, res, next) {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0 post-check=0, pre-check=0, no-cache');
    res.end('ok');
});

module.exports = router;
