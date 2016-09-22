(function() {
  /** Module */
  var summaryStructure = angular.module('app.repository.summary.structure', []);

  /** Controller */
  summaryStructure.controller('summaryStructureController', ['$scope', 'summaryStructureFactory',
    function($scope, summaryStructureFactory) {
      var vm = this;
      vm.getNumber = getNumber;
      vm.detail = detail;

      function getNumber(ev) {
        if (!ev) ev = window.event;
        ev.stopPropagation();
        var target = ev.target || ev.srcElement;
        vm.name = target.getAttribute('data-name');
        console.log(target);
        console.log(vm.name);
        summaryStructureFactory.getSummary({
          caseBrief: vm.name
        }).then(function(result) {
          if(result.data.body[0]) {
            vm.total = result.data.body[0];
            vm.showExplain = false;
            vm.showTotal = true;
          }
        });


      }

      function detail(ev) {
        if (!ev) ev = window.event;
        ev.stopPropagation();
        summaryStructureFactory.getExpalinByName({
          case_brief: vm.name
        }).then(function(result) {
          if(result.data.body[0]) {
            vm.explain = result.data.body[0];
            vm.showTotal = false;
            vm.showExplain = true;
          }
        })
      }

    }
  ]);

  /** Service */
  summaryStructure.factory('summaryStructureFactory', ['$http', 'URL',
    function($http, URL) {
      return {
        getSummary: getSummary,
        getExpalinByName: getExpalinByName
      }

      // Get summary data
      function getSummary(params) {
        return $http.get(
          URL + '/case_brief/find/findLawsAndWrit',{
            params:params
          }
        )
      }

      function getExpalinByName(param) {
        return $http.get(
          URL + '/case_brief/find/explain', {
            params: param
          }
        )
      }
    }
  ]);

  // Menu Tree
  summaryStructure.service('summaryStructure.menuTree', ['$http', 'URL',
    function($http, URL) {
      if (URL) {
        return $http({
          method: 'GET',
          url: URL + '/case_brief/find/list',
          withCredentials: true
        });
      } else {
        console.error('API Not Found in config.js');
      }
    }
  ]);

  /** Directive*/
  summaryStructure.directive('wiservSummaryStructure', ['summaryStructure.menuTree',
    function(menuTree) {
      return {
        restrict: 'ACE',
        link: function(scope, element, attrs) {
          menuTree.then(function(response) {
            scope.data = response.data.body;
            scope.$applyAsync(function() {
              element.metisMenu({
                preventDefault: false
              });
            });
          }, function(response) {
            console.error(response.status + response.statusText);
          });
        }
      }
    }
  ]);

})();
