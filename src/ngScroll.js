/**
 * Angular scroll top listener
 *
 * @author  Jorge Arco  <jorge.arcoma@gmail.com>
 */
(function(angular){

    /**
     * Scroll
     *
     * @param $window
     *
     * @returns {Function}
     *
     * @constructor
     */
    function Scroll($window) {

        return function(scope, element, attrs) {

            /**
             * Calculate offset
             */
            function scrollWorker() {

                scope.scroller = (this.pageYOffset > (attrs.ngScrollTop || 99999) &&
                                  this.pageYOffset < (attrs.ngScrollTopEnd || 99999));

                scope.$apply();
            }

            /**
             * Add listener
             */
            angular.element($window).bind("scroll", scrollWorker);
        };
    }

    /**
     * Definition
     */
    angular
        .module('arc.scroll', ['ng'])
        .directive('ngScrollTop', Scroll);

})(angular);