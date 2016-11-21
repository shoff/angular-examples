(function () {

    angular.module('myApp')
        .component('helloWorld', {
            template: "<h1 class='text-center'>Hello World - {{$ctrl.message}}</h1>",
            controller: MainCtrl
        });

    function MainCtrl() {
        this.message = "Durga";
    }

})();