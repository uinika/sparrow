(function(){
  /** Module */
  var lawsStructure = angular.module('app.repository.laws.structure', []);

  /** Controller */
  lawsStructure.controller('lawsStructureController', ['$scope', 'lawsStructureFactory',
    function($scope, lawsStructureFactory) {
    }
  ]);

  /** Service */
  lawsStructure.factory('lawsStructureFactory', [
    function() {
      return {
        'hank':'uinika'
      }
    }
  ]);

  /** Directive*/
  lawsStructure.directive('wiservLawsStructure', [
    function() {
      return {
        restrict: 'ACE',
        link: function(scope, element, attrs) {
          element.metisMenu();
        }
      }
    }
  ]);

})();
