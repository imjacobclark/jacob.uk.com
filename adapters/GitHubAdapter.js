var utilities = require(__dirname + '/../lib/utilities');

var GitHubAdapter = function(){
    this.url = 'api.github.com'
    this.path = '/users/imjacobclark/events'
    this.username = 'imjacobclark'
}

GitHubAdapter.prototype.getProfileData = function(){
    return new Promise(function(resolve, reject){
        utilities.doHTTPSRequest(this.url, this.path).then(function(data){
            var latestData = [];
            
            JSON.parse(data).forEach((data, i) => {
                if(i >= 5) return
                latestData.push(data);
            });

            resolve(latestData)
        }).catch(function(error){ 
            reject(error);
        });
    }.bind(this));
}

module.exports = GitHubAdapter;