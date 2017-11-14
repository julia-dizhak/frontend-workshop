(function () {
    'use strict';

    angular.module('blogApp')
        .controller('blogController', blogController);

    blogController.$inject = ['$scope', '$rootScope', '$timeout', '$location'];
    function blogController($scope, $rootScope, $timeout, $location) {
        init();

        $scope.test = 10;
        $scope.test1 = 'testterrfkgjfdgn';

        function init() {

        }
    }
})();
