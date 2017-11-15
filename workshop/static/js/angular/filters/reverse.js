(function() {
    'use strict';

    angular.module('reverseStringFilter', []).filter('reverseString', function() {
        return function(string) {
            return string.split('').reverse().join('');
        };
    });
})();

