(function(){
  /** Module */
  var module = angular.module('app.dashboard', [])
    .config([
      '$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('dashboard', {
            parent: 'layout',
            url: '/dashboard',
            templateUrl: 'partials/dashboard/view.html',
            controller: 'dashboardController',
            controllerAs: 'dashboard',
          });
      }
    ]);

  /** Controller */
  module.controller('dashboardController', [
    '$scope', 'dashboardService',
    function($scope, dashboardFactory) {
      var vm = this;

    }
  ]);

  /** Service */
  module.factory('dashboardService', [
    function() {
      return {

      }
    }
  ]);

})();
