(function() {
    'use strict';

    angular.module('percentFilter', []).filter('percent', function() {
        return function(input) {
            return !isNaN(input) && input !== undefined ? input + '%' : '';
        };
    });
})();
