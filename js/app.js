(function(){
    var app = angular.module('gitHubViewer', ["ngRoute"]);

    app.config(function($routeProvider){
        $routeProvider
            .when('/main', {
                templateUrl: './lib/main.html',
                controller: "MainController"
            })
            .when('/user/:username', {
                templateUrl: './lib/user.html',
                controller: "userController"
            })
            .when('/repos/:username/:repo', {
                templateUrl: './lib/repo.html',
                controller: 'repoController'
            })
            .otherwise({redirectTo:"/main"})
    })

}())