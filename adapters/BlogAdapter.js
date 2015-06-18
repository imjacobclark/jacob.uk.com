var utilities = require(__dirname + '/../lib/utilities');

var BlogAdapter = function(){
    this.url = 'http://blog.jacob.uk.com'
}

BlogAdapter.prototype.getData = function() {
    return new Promise(function(resolve, reject){
        utilities.doHTTPRequest(this.url).then(function(data){
            resolve(data);
        }).catch(function(error){ 
            reject(error);
        });
    });
};

module.exports = BlogAdapter;