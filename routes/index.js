var express = require('express');
var router = express.Router();
var BlogAdapter = require(__dirname + '/../adapters/BlogAdapter')
var GitHubAdapter = require(__dirname + '/../adapters/GitHubAdapter')

/* GET home page. */
router.get('/', function(req, res, next) {
    var blogadapter = new BlogAdapter();
    var githubadapter = new GitHubAdapter();

    Promise.all([blogadapter.getData(), githubadapter.getProfileData()])
    	.then(values => {
			res.render('index', {posts: values[0], github: values[1]});
		});
});

module.exports = router;
