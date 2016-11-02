(function () {

    angular.module('myModule', [])
        .component('counter', {
            bindings: {
                count: '='
            },
            templateUrl: "js/components/counter.html",
            controller: function () {
                function increment() {
                    this.count++;
                }

                function decrement() {
                    this.count--;
                }
                this.increment = increment;
                this.decrement = decrement;
            }
        }).controller('CountCtrl', function CountCtrl() {
            this.count = 4;
        });
})();