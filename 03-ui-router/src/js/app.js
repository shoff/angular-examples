var cart = angular.module('ShoppingCart', ['ui.router']);

cart.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/src/partials/home.html'
        })
        .state('home.list', {
            url: '/list',
            templateUrl: '/src/partials/home-list.html',
            controller: function ($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })
        .state('about', {
            // Do Something       
        });

});