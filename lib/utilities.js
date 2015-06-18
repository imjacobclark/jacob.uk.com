var http = require('http');
var https = require('https');

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
    },

    doHTTPSRequest: function(url, path){
        return new Promise(function(resolve, reject) {
            var options = {
                host: url,
                port: 443,
                path: path,
                headers : {
                    'User-Agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
                }
            };

            https.get(options, function(res) {
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