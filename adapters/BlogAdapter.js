var utilities = require(__dirname + '/../lib/utilities');
var cheerio = require('cheerio');

var BlogAdapter = function(){
    this.url = 'blog.jacob.uk.com'
}

BlogAdapter.prototype.getData = function() {
    return new Promise(function(resolve, reject){
        utilities.doHTTPRequest(this.url).then(function(data){
        	var $ = cheerio.load(data);

        	var posts = {};

        	var links = $('.post-title').each(function(i, link){
        		if(i >= 5) return;
        		posts[$(link)[0].children[0].next.attribs.title] = $(link)[0].children[0].next.attribs.href;
        	});

            resolve(posts);
        }).catch(function(error){ 
            reject(error);
        });
    }.bind(this));
};

module.exports = BlogAdapter;