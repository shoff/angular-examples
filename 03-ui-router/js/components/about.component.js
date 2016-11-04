(function(){

    angular.module('myApp')
        .component('aboutComponent', {
            templateUrl: "js/components/about.html",
            controller: HomeCtrl
        });

    function HomeCtrl($log, $location) {
        $log.debug($location.absUrl());
    }

})();
