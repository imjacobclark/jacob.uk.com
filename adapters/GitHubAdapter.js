var utilities = require(__dirname + '/../lib/utilities');

var GitHubAdapter = function(){
    this.url = 'api.github.com'
    this.path = '/users/imjacobclark/events/public'
    this.username = 'imjacobclark'
    console.log(process.env.GITHUB_TOKEN);
    this.headers = {
        'User-Agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36',
        'Authorization' : 'token ' + process.env.GITHUB_TOKEN
    };
}

GitHubAdapter.prototype.getProfileData = function(){
    return new Promise(function(resolve, reject){
        utilities.doHTTPSRequest(this.url, this.path, this.headers).then(function(data){
            var latestData = [];
            
            JSON.parse(data).forEach((data, i) => {
                if(i >= 5) return

                var date = new Date(data.created_at);
                data.created_at = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
                latestData.push(data);
            });

            resolve(latestData)
        }).catch(function(error){ 
            reject(error);
        });
    }.bind(this));
}

module.exports = GitHubAdapter;