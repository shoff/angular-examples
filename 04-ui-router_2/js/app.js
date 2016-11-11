(function () {
    angular.module('myApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        
        //If URI is not matched
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: '/home',
                template: '<home-component></home-component>'
            })
            .state('about', {
                url: '/about',
                template: '<about-component></about-component>'
            })
    })
})();