angular.module('myApp', [ /* your modules here */ ])
.controller("HelloCtrl", function($scope) {
    $scope.message = "Hello World"
    $scope.name = "Awesome"

    $scope.user = {
        firstName : "Hello Mr."
    }

    $scope.logins = [];
    $scope.login = function () {
        $scope.logins.push($scope.user.firstName + " was logged in.");
    };

});