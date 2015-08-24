var express = require('express');
var router = express.Router();
var BlogAdapter = require(__dirname + '/../adapters/BlogAdapter')
var GitHubAdapter = require(__dirname + '/../adapters/GitHubAdapter')


/* GET home page. */
router.get('/', function(req, res, next) {
    var blogadapter = new BlogAdapter();
    var githubadapter = new GitHubAdapter();

    Promise.all([githubadapter.getProfileData(), githubadapter.getRepositories()])
            .then(values => {
                res.render('index', {github: values[1], repositories: values[2]});
            }).catch(e => {
                res.status(500);
                console.log(e)
                res.render('error');
            });
});

module.exports = router;
