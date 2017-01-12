(function(){


var app = angular.module("gitHubViewer");


var userController = function($scope, github, $routeParams, $location){

    var onUserComplete = function(data){
        console.log(data)
        $scope.user = data;
        github.getRepos($scope.user).then(onRepos,onError);
    }

    var onRepos = function(data){
        $scope.repos = data;
        console.log(data)
    }

    var onError = function(reason){
        $scope.error = "Could not fetch the data";
    }

    $scope.goToRepo = function(repo){
        $location.path('repos/'+repo);
    }

    //default values
    $scope.username= $routeParams.username;
    $scope.repoSortOrder = '-stargazers_count';
    github.getUser($scope.username).then(onUserComplete,onError);
};

    app.controller('userController', userController);
}());