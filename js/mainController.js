(function(){
    var myApp = angular.module("gitHubViewer");
    var MainController = function($scope, $interval, $location){

        var decrementCountdown = function(){
            $scope.countdown-=1;
            if($scope.countdown<1){
                $scope.search($scope.username);
            }
        }

        var countDownInterval = null;
        var startCountDown = function(){
            countDownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        }

        $scope.search = function(username){
            if(countDownInterval){
                $interval.cancel(countDownInterval);
                $scope.countdown = null;
            }

            $location.path('/user/'+username);
        };

        //default values
        $scope.username='angular';
        $scope.countdown = 5;
        startCountDown();
    };

    myApp.controller('MainController', MainController);
}());