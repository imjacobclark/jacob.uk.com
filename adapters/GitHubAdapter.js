var utilities = require(__dirname + '/../lib/utilities');

var GitHubAdapter = function(){
    this.url = 'api.github.com'
    this.path = '/users/imjacobclark/events'
    this.username = 'imjacobclark'
}

GitHubAdapter.prototype.getProfileData = function(){
    return new Promise(function(resolve, reject){
        utilities.doHTTPSRequest(this.url, this.path).then(function(data){
            resolve(data)
        }).catch(function(error){ 
            reject(error);
        });
    }.bind(this));
}

module.exports = GitHubAdapter;