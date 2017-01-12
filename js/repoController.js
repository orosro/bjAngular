(function(){


var app = angular.module("gitHubViewer");


var repoController = function($scope, github, $routeParams){

    var onRepoComplete = function(data){
        $scope.repo = data;
    }

    var onError = function(reason){
        $scope.error = "Could not fetch the data";
    }

    //default values
    $scope.username= $routeParams.username;
    $scope.reponame = $routeParams.repo;
    github.getRepoCollaborators($scope.username, $scope.reponame).then(onRepoComplete,onError);
};

    app.controller('repoController', repoController);
}());