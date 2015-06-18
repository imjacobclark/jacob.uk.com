var http = require('http');

module.exports = {
	doHTTPRequest: function(url){
		return new Promise(function(resolve, reject) {

			var options = {
		        host: url,
		        port: 80,
		        path: '/'    
		    };

		    http.get(options, function(res) {
		        var body = '';

		        res.on('data', function(chunk) {
		            body += chunk;
		        });

		        res.on('end', function() {
		            resolve(body)
		        });
		    }).on('error', function(error) {
		        reject(error)
		    });
		})
	}
}