require 'rest-client'
require 'json'

module PageHelper
  def get_github_count
    return JSON.parse(RestClient.get 'https://api.github.com/users/imjacobclark/repos?per_page=200').size
  end
end
