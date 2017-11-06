(function () {
    'use strict';

    angular.module('savingsPlanApp')
        .controller('SavingsPlanController', SavingsPlanController);

    SavingsPlanController.$inject = ['$scope', '$rootScope', '$timeout', '$location'];
    function SavingsPlanController($scope, $rootScope, $timeout, $location) {
        init();

        const print = 'Hello';

        $scope.infoAreaBlock = true;

        function init() {
            $rootScope.$on('$locationChangeSuccess', function () {
                $scope.selectedTab = $location.$$hash;
            });
            // default selected tab - 'home'
            // if ($location.$$hash === '') {
            //     $scope.selectedTab = 'immo';
            // } else {
            //     $scope.selectedTab = $location.$$hash;
            // }
            // // scroll to block
            // $scope.scrollToBlock = function(element) {
            //     $timeout(function() {
            //         var calculationBlock = angular.element(element).offset().top,
            //             headerHeight = 54;
            //         angular.element('body, html').animate({
            //             scrollTop: calculationBlock - headerHeight
            //         }, 1000);
            //     }, 100);
            // };

            // switch tab
            // $scope.switchTab = function(value) {
            //     $scope.selectedTab = value;
            //     $location.hash(value);
            // };
            //
            // $scope.switchTab($scope.selectedTab);
            // // hide/show info block on mobile version
            // $scope.showMobileInfoBlock = function(value) {
            //     $scope.mobileInfoBlock = value || false;
            // };
        }
    }
})();
