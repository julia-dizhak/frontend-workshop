(function () {
    'use strict';

    angular.module('homepageApp').controller('homepageCtrl', homepageHyperliteCtrl);

    homepageHyperliteCtrl.$inject = ['$http', '$scope', '$window'];

    function homepageHyperliteCtrl($scope, $window) {
        $scope.windowWidth = $window.innerWidth;

        $scope.newsSlickSettings = {
            method: {},
            lazyLoad: 'ondemand',
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: true,
            dots: true,
            infinite: true,
            autoplay: false,
            arrows: true,
            prevArrow: '<button type="button" data-role="none" class="left carousel-control" tabindex="0" role="button"><span class="sr-only"></span></button>',
            nextArrow: '<button type="button" data-role="none" class="right carousel-control" tabindex="0" role="button"><span class="sr-only"></span></button>',
            responsive: [
                {
                    breakpoint: 1025,
                    settings: 'unslick'
                }
            ]
        };

        this.reInitSlickSlider = function() {
            $scope.windowWidth = $window.innerWidth;
            if ($scope.windowWidth > $scope.newsSlickSettings.responsive[0].breakpoint) {
                $('slick').slick('init');
            }
        };

        angular.element($window).on('resize', this.reInitSlickSlider);

        function init() {

        }

        init();
    }
})();
