(function() {
  /** Module */
  var summaryExplain = angular.module('app.repository.summary.explain', []);

  /** Controller */
  summaryExplain.controller('summaryExplainController', ['$scope', 'summaryExplainFactory',
    function($scope, summaryExplainFactory) {
      var vm = this;

      vm.detail = detail;

      function detail(ev) {
        if (!ev) ev = window.event;
        ev.stopPropagation();
        var target = ev.target || ev.srcElement;
        vm.name = target.getAttribute('data-name');
        summaryExplainFactory.getExpalinByName({
          case_brief: vm.name
        }).then(function(result) {
          if(result.data.body[0]) {
            vm.data = result.data.body[0];
            vm.showExplain = true;
          }

        })
      }
    }
  ]);

  /** Service */
  summaryExplain.factory('summaryExplainFactory', ['$http', 'URL',
    function($http, URL) {
      return {
        getExpalinByName: getExpalinByName
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
  summaryExplain.service('summaryExplain.menuTree', ['$http', 'URL',
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
  summaryExplain.directive('wiservSummaryExplain', ['summaryExplain.menuTree',
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
