angular.module('AnimateApp', ['ngAnimate'])

.controller('mainController', function($scope) {
  
  // set the default states for lions and cranes
  $scope.lions = false;
  $scope.cranes = false;
});