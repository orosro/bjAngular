(function(){
    var AP = '?access_token=d6aae6f6f247849eeab414c56dfa0a1305f48265'
    var github = function($http){

        var getUser = function(username){
           return  $http.get('https://api.github.com/users/'+ username +AP).then(
            function(response){
                return response.data;
            }
           );
        };

        getRepos = function(user){
            return $http.get(user.repos_url+AP).then(
                function(response){
                    return response.data;
                });
        }
        getRepoCollaborators = function(user, repo){
           return  $http.get('https://api.github.com/repos/'+user+'/'+repo+'/contributors'+AP).then(
            function(response){
                return response.data;
            }
           );
        }

        return {
            getUser: getUser,
            getRepos: getRepos,
            getRepoCollaborators: getRepoCollaborators
        };
    };

    var module = angular.module('gitHubViewer');
    module.factory('github', github);

}());