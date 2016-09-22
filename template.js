(function() {
  /** Module */
  angular.module('module', [ 'dependencies' ]);

  /** Controller */
  angular
      .module('module')
      .controller('Controller', Controller);

  Controller.$inject = ['dependencies'];
  function Controller(dependencies) {
      var vm = this;

      activate();

      function activate() {

      }
  };

  /** Service */
  angular
      .module('module')
      .service('Service', Service);

  Service.$inject = ['dependencies'];
  function Service(dependencies) {
      this.function = function;

      function function() {

      }
  };

})();
