(function(){
  /** Module */
  var module = angular.module('app.repository.result', []);

  /** Controller */
  module.controller('repositoryController', ['$scope', 'repositoryFactory',
    function($scope, repositoryFactory) {
      var repository = this;
      repository.hank='uinika'
    }
  ]);

  /** Service */
  module.factory('repositoryFactory', [
    function() {
      return {
        'hank':'uinika'
      }
    }
  ]);

  /** Directive */
  module.directive('myChartItem',[
    function() {
      return {
        restrict: 'ACE',
        template: "<div id='item'></div>",
        link: function( scope, element, attrs ) {
          var option = {
            title : {
              text: '法条库',
              subtext: '法条库',
              x:'center'
            },
            tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              x : 'center',
              y : 'bottom',
              data: ['总数','今日新增']
            },
            series : [
              {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                  {value:335, name:'总数'},
                  {value:310, name:'今日新增'}
                ]
              }
            ]
          };
          echarts.init((element.find('#item'))[0]).setOption(option);
        }
      }
    }
  ]);

})();
