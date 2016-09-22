(function(){
  /** Module */
  var module = angular.module('app.judgment');

  /** Controller */
  module.controller('CaseListController', [
    'caseListService',
    function(caseListService) {
      var vm = this;
      vm.storage = function(item){
        sessionStorage.targetJudgment = JSON.stringify(item);
      };
      caseListService.getCaseList()
      .then(function(result){
        vm.list = result.data.body
      })
    }
  ]);

  /** Service */
  module.factory('caseListService', [
    '$uibModal', '$http', 'URL',
    function($uibModal, $http, URL) {
      return {
        getCaseList: getCaseList
      }
      // Get CaseList
      function getCaseList () {
        return $http.get(
          URL + '/legal/verdict'
        )
      }

    }
  ]);

})();
