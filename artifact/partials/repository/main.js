(function() {

    angular
        .module('app.repository', [
          'app.repository.search',
          'app.repository.laws',
          'app.repository.laws.structure',
          'app.repository.summary',
          'app.repository.summary.structure',
          'app.repository.summary.explain',
          'app.repository.summary.rule',
          'app.repository.judgementLib',
          'app.repository.judgementLib.search',
          'app.repository.statistic',
        ])
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('repository', {
          parent: 'layout',
          abstract: true,
          url: '/repository',
          template: '<ui-view/>'
        })
        .state('repository.repositorySearch', {
          parent: 'repository',
          url: '/repositorySearch/:keyword/:type',
          templateUrl: 'partials/repository/search/result/view.html',
          controller: 'repositorySearchController',
          controllerAs: 'repositorySearch'
        })
        .state('repository.repositoryLaws', {
          parent: 'repository',
          url: '/repositoryLaws',
          templateUrl: 'partials/repository/laws/view.html',
          controller: 'lawsController',
          controllerAs: 'laws'
        })
        .state('repository.lawsStructure', {
          parent: 'repository',
          url: '/lawsStructure',
          templateUrl: 'partials/repository/laws/structure/view.html',
          controller: 'lawsStructureController',
          controllerAs: 'lawsStructure'
        })
        .state('repository.repositorySummary', {
          parent: 'repository',
          url: '/repositorySummary',
          templateUrl: 'partials/repository/summary/view.html',
          controller: 'summaryController',
          controllerAs: 'summary'
        })
        .state('repository.summaryStructure', {
          parent: 'repository',
          url: '/summaryStructure',
          templateUrl: 'partials/repository/summary/structure/view.html',
          controller: 'summaryStructureController',
          controllerAs: 'summaryStructure'
        })
        .state('repository.summaryExplain', {
          parent: 'repository',
          url: '/summaryExplain',
          templateUrl: 'partials/repository/summary/explain/view.html',
          controller: 'summaryExplainController',
          controllerAs: 'summaryExplain'
        })
        .state('repository.summaryRule', {
          parent: 'repository',
          url: '/summaryRule/:caseBrief',
          templateUrl: 'partials/repository/summary/rule/view.html',
          controller: 'summaryRuleController',
          controllerAs: 'summaryRule'
        })
        .state('repository.judgementLib', {
          parent: 'repository',
          url: '/judgementLib',
          templateUrl: 'partials/repository/judgementLib/view.html',
          controller: 'judgementLibController',
          controllerAs: 'judgementLib'
        })
        .state('repository.judgementLibSearch', {
          parent: 'repository',
          url: '/judgementLibSearch',
          templateUrl: 'partials/repository/judgementLib/search/view.html',
          controller: 'judgementLibSearchController',
          controllerAs: 'judgementLibSearch'
        })
        .state('repository.repositoryStatistic', {
          parent: 'repository',
          url: '/repositoryStatistic',
          templateUrl: 'partials/repository/statistic/view.html',
          controller: 'statisticController',
          controllerAs: 'statistic'
        });
    }

})();
