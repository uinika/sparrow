(function(){
  /** Module */
  var summaryRule = angular.module('app.repository.summary.rule', []);

  /** Controller */
  summaryRule.controller('summaryRuleController', ['$scope', 'summaryRuleFactory','$stateParams',
    function($scope, summaryRuleFactory, stateParams) {
      var vm = this;
      vm.name = stateParams.caseBrief;
      summaryRuleFactory.getList({
        caseBrief:vm.name
      }).then(function(result){
        var body = result.data.body;
        if(body) {
          vm.list = body;
        }
      })
    }
  ]);

  /** Service */
  summaryRule.factory('summaryRuleFactory', ['$http', 'URL',
    function($http, URL) {
      return {
        getList:getList
      }
      function getList(params) {
        return $http.get(
          URL + '/case_brief/find/findLawsByCaseBrief',{
            params:params
          }
        )
      }
    }
  ]);

})();
