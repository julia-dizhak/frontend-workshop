(function () {
    'use strict';

    angular.module('blogApp')
        .controller('blogController', blogController);

    blogController.$inject = ['$scope'];

    function blogController($scope) {
        init();

        $scope.link = 'erom nrael';

        function init() {
            console.log('test');
        }
    }
})();
