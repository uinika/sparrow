(function() {
  /** Module */
  var module = angular.module('app.repository.statistic', []);

  /** Controller */
  module.controller('statisticController', ['$scope', 'statisticFactory', '$state',
    function($scope, statisticFactory, $state) {
      var vm = this;
      vm.resultShow = false;
      // get statistics data
      statisticFactory.getStatistics().then(function(result) {
        vm.data = result.data.body[0];
      });

      // get statistics today
      statisticFactory.getStatisticsToday().then(function(result) {
        vm.today = result.data.body[0];
      });

      // filter
      vm.filterBy = filterBy;
      // go to search result
      vm.search = search;
      // write input back
      vm.writeback = writeback;
      // input keydown
      vm.keydown = keydown;


      function filterBy() {
        console.log(vm.keyword);
        selected_index = -1;
        vm.resultShow = true;
        statisticFactory.filterBy({
          keyword: vm.keyword
        }).then(function(result) {
          vm.suggest = result.data.body;
        });
      }

      var selected_index = -1; // keydown event selceted index
      function keydown(ev) {
        ev = window.event||ev;
        var keycode = ev.keyCode;
        var list_length = $('.suggest-result').find('li').length;

        if(keycode == 13) {// press enter
          search();
        }
        if(keycode == 38) { // press up
          selected_index--;
          if(selected_index == -1 || selected_index == -2) {
            selected_index = list_length-1;
          }
        }
        else if(keycode == 40) { // press down
          selected_index++;
          if(selected_index == list_length) {
            selected_index = 0;
          }
        }
        var selected_li = $('.suggest-result').find('li').removeClass('active').eq(selected_index);
        selected_li.addClass('active');
        vm.keyword = selected_li.html();
        vm.type = selected_li.attr('data-type');
      }

      function search() {
        switch (vm.type) {
          case '案由':
            vm.type = 'an_you';
            break;
          case '裁判文书':
            vm.type = 'wen_shu';
            break;
          case '法条':
            vm.type = 'fa_tiao';
            break;
          default:
            vm.type = 'wen_shu';
            break;
        }
        $state.go("repository.repositorySearch", {
          keyword: vm.keyword,
          type: vm.type
        }, {
          reload: true
        });
      }

      function writeback(ev) {
        if (!ev) ev = window.event;
        var target = ev.target || ev.srcElement;
        vm.keyword = target.innerHTML;
        vm.resultShow = false;
        selected_index = -1;
      }
    }
  ]);

  /** Service */
  module.factory('statisticFactory', ['$http', 'URL',
    function($http, URL) {
      return {
        getStatistics: getStatistics,
        getStatisticsToday: getStatisticsToday,
        filterBy: filterBy
      }
      // Get Statistics data
      function getStatistics() {
        return $http.get(
          URL + '/kb/search/all'
        )
      }

      function getStatisticsToday() {
        return $http.get(
          URL + '/kb/search/add_today'
        )
      }

      function filterBy(params) {
        return $http.get(
          URL + '/keyword/auto/fill', {
            params: params
          }
        )
      }
    }
  ]);


})();
