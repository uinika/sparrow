(function() {
  /** Module */
  var laws = angular.module('app.repository.laws', []);

  /** Controller */
  laws.controller('lawsController', ['$scope', 'lawsFactory',
    function($scope, lawsFactory) {

    }
  ]);

  /** Service */
  laws.factory('lawsFactory', [
    function() {
      return {
        'hank': 'uinika'
      }
    }
  ]);

  laws.service('laws.chart', ['$http', 'URL',
    function($http, URL) {
      if (URL) {
        return $http({
          method: 'GET',
          url: URL + '/law/find/findClass',
          withCredentials: true
        });
      } else {
        console.error('API Not Found in config.js');
      }
    }
  ]);


  /** Directive */
  laws.directive('wiservChartLaws', ['laws.chart',
    function(lawsChart) {
      return {
        restrict: 'ACE',
        template: "<div id='chartLaws'></div>",
        link: function(scope, element, attrs) {
          lawsChart.then(function(response){
            var data = response.data.body;
            console.log(data);
            var option = {
              title: {
                text: '法条库 汇聚全国法院依法法规数据共 23,332 份，今日新增 3,000 份',
                x: 'center',
                y: 'bottom'
              },
              tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c}条 ({d}%)"
              },
              // legend: {
              //   orient: 'vertical',
              //   x: 'left',
              //   data: ['社会法', '民法', '商法', '行政法', '刑法', '经济法']
              // },
              grid: {
                y:'top'
              },
              series: [{
                name: '法条库',
                type: 'pie',
                selectedMode: 'single',
                radius: [0, '30%'],

                label: {
                  normal: {
                    position: 'inner'
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data: data
              }]
            };
            echarts.init((element.find('#chartLaws'))[0]).setOption(option);
          })

        }
      }
    }
  ]);


})();
