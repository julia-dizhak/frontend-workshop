angular.module('MMP', ['ngResource'])
  .config(['$interpolateProvider', '$resourceProvider', '$httpProvider',
      function ($interpolateProvider, $resourceProvider, $httpProvider) {
          $interpolateProvider.startSymbol('{$');
          $interpolateProvider.endSymbol('$}');
          $resourceProvider.defaults.stripTrailingSlashes = false;
          $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

          $httpProvider.defaults.xsrfCookieName = 'csrftoken';
          $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
      }
  ]);
