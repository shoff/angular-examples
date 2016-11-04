(function(){

    angular.module('myApp')
        .component('homeComponent', {
            templateUrl: "js/components/home.html",
            controller: HomeCtrl
        });

    function HomeCtrl($log, $location) {
        $log.debug($location.absUrl());
    }

})();
