(function () {

    angular.module('myApp')
        .component('helloWorld', {
            template: "<h1>Hello World</h1>",
            controller: mainController
        });

    function mainController() {

    }

})();