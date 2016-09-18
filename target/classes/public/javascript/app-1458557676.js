var jacobukcom = angular.module('jacobukcom', [])
    .config(['$interpolateProvider', function($interpolateProvider) {
        $interpolateProvider.startSymbol('{[{');
        $interpolateProvider.endSymbol('}]}');
    }]);

var OpenSourceController = function($scope, $http){
    $http({
        method: 'GET',
        url: 'https://api.github.com/users/imjacobclark/repos?per_page=100'
    }).then(function(repos){
        $scope.gitHubRepos = repos.data;
    });
};

OpenSourceController.$inject = ['$scope', '$http'];
jacobukcom.controller('OpenSourceController', OpenSourceController);

var FooterController = function($scope, $http){
    $http({
        method: 'GET',
        url: 'https://ngaas.api.jacob.uk.com'
    }).then(function(name){
        $scope.name = name.data.name;
    });
};

FooterController.$inject = ['$scope', '$http'];
jacobukcom.controller('FooterController', FooterController);