var utilities = require(__dirname + '/../lib/utilities');

var GitHubAdapter = function(){
    this.url = 'api.github.com'
    this.username = 'imjacobclark'

    this.headers = {
        'User-Agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36',
        'Authorization' : 'token ' + process.env.GITHUB_TOKEN
    };
}

GitHubAdapter.prototype.getProfileData = function(){
    return new Promise(function(resolve, reject){
        utilities.doHTTPSRequest(this.url, '/users/imjacobclark/events/public', this.headers).then(function(data){
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

GitHubAdapter.prototype.getRepositories = function(){
    return new Promise(function(resolve, reject){
        utilities.doHTTPSRequest(this.url, '/users/imjacobclark/repos', this.headers).then(function(data){
            var data = JSON.parse(data);

            var stats = {
                projects: data.length,
                forks: 0,
                languages: {

                },
                forkedProjects: {

                }
            }

            data.forEach(function(repo){
                if(repo.fork === true){
                    stats["forks"] = stats["forks"] + 1;
                    stats.forkedProjects[repo.name] = repo.html_url;
                }

                if(repo.language !== null){
                    if(stats.languages[repo.language] == undefined){
                        stats.languages[repo.language] = 0;
                    }else{
                        stats.languages[repo.language] = stats.languages[repo.language] + 1;
                    }
                }

            })

            resolve(stats)
        }).catch(function(error){ 
            reject(error);
        });
    }.bind(this));
}

module.exports = GitHubAdapter;