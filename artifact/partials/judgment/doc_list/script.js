(function(){
  /** Module */
  var module = angular.module('app.judgment');

  /** Controller */
  module.controller('DocListController', [
    '$scope', 'docListService',
    function($scope, docListService) {
      var vm = this;
      docListService.getDocList()
      .then(function(result){
        vm.list = result.data.body
      })
    }
  ]);

  /** Service */
  module.factory('docListService', [
    '$uibModal', '$http', 'URL',
    function($uibModal, $http, URL) {
      return {
        getDocList: getDocList
      }
      // Get DocList
      function getDocList () {
        return $http.get(
          URL + '/verdict/writ'
        )
      }
    }
  ]);

})();
