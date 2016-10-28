(function(){
  /** Module */
  var module = angular.module('app.layout', []);

  module.controller('layoutController', Controller);
  Controller.$inject = ['$scope', '$state'];
  function Controller($scope, $state) {
    var vm = this;
    vm.logout = function() {
      sessionStorage.removeItem("token");
      $state.go("login");
    }
  }

  module.directive('wiservSidebar', [
    function() {
      return {
        restrict: 'ACE',
        link: function(scope, element, attrs) {
          element.bind('click',function() {
            console.log('2');
            $("#content-main").toggleClass('content-collapse');
            $("#sidebar").toggleClass('sidebar-collapse');
          })
          // element.sidr({
          //   name: 'sidebar',
          //   side: 'left'
          // });
        }
      }
    }
  ]);

})();
