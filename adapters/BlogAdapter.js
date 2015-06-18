var utilities = require(__dirname + '/../lib/utilities');
var cheerio = require('cheerio');

var BlogAdapter = function(){
	this.url = 'blog.jacob.uk.com'
}

BlogAdapter.prototype.getData = function() {
	return new Promise(function(resolve, reject){
		utilities.doHTTPRequest(this.url).then(function(data){
		/*
		* The following code is hacky and expensive, I wish Ghost would hurry up and ship it's API...
		*/

		var $ = cheerio.load(data);

		var titles = [];
		var links = [];
		var excerpts = [];

		$('.post-title').each(function(i, link){
			if(i >= 5) return;

			titles.push($(link)[0].children[0].next.attribs.title);
			links.push($(link)[0].children[0].next.attribs.href);
		});

		$('.post-excerpt').each(function(i, excerpt){
			if(i >= 5) return;

			excerpts.push(excerpt.children[0].data.slice(0,150) + "...");
		});

		var posts = {};

		titles.forEach(function(title, index){
			posts[title] = {
			href: links[index],
			excerpt: excerpts[index]
			}
		})

		resolve(posts);
		}).catch(function(error){ 
			reject(error);
		});
	}.bind(this));
};

module.exports = BlogAdapter;