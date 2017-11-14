(function() {
    'use strict';

    angular.module('reversetestFilter', []).filter('reversetest', function() {
        return function(string) {
            // console.log(string);
            // return string;
            return string.split('').reverse().join('');
        };
    });
})();



(function() {
    'use strict';

    angular.module('percentFilter', []).filter('percent', function() {
        return function(input) {
            return !isNaN(input) && input !== undefined ? input + '%' : '';
        };
    });
})();
