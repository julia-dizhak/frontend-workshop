(function() {
    'use strict';

    angular.module('reverseFilter', []).filter('reverse', function() {
        return function(string) {
            return string.split('').reverse().join('');
        };
    });
})();

