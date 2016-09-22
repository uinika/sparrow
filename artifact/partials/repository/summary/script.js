(function() {
  /** Module */
  var summary = angular.module('app.repository.summary', []);

  /** Controller */
  summary.controller('summaryController', ['$scope', 'summaryFactory',
    function($scope, summaryFactory) {}
  ]);

  /** Service */
  summary.factory('summaryFactory', [
    function() {
      return {
        'hank': 'uinika'
      }
    }
  ]);

  summary.service('summary.chart', ['$http', 'URL',
    function($http, URL) {
      if (URL) {
        return $http({
          method: 'GET',
          url: URL + '/case_brief/find/findClass',
          withCredentials: true
        });
      } else {
        console.error('API Not Found in config.js');
      }
    }
  ]);

  /** Directive */
  summary.directive('wiservChartSummary', ['summary.chart',
    function(summaryChart) {
      return {
        restrict: 'ACE',
        template: "<div id='chartSummary'></div>",
        link: function(scope, element, attrs) {
          summaryChart.then(function(response){
            var data = response.data.body;
            var option = {
              color: [
                 '#91c7ae', '#d48265', '#ffb980', '#61a0a8',
                '#397b29'
              ],
              title: {
                text: '案由库 汇聚全国法院依法公开案例数据共 50,000 份，今日新增 3,000 份',
                x: 'center',
                y: 'bottom',
                padding:[30,5,5,5]
              },
              tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}条 ({d}%)"
              },
              // legend: {
              //   orient: 'vertical',
              //   left: 'left',
              //   data: ['行政案由', '刑事案由', '民事案由', '赔偿案由']
              // },
              series: [{
                name: '案由库',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: data,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }]
            };

            echarts.init((element.find('#chartSummary'))[0]).setOption(option);
          })

        }
      }
    }
  ]);


})();
