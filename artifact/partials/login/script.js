(function() {

  /** Module */
  angular
    .module('app.login', []);

  /** Controller */
  angular
      .module('app.login')
      .controller('loginController', Controller);

  Controller.$inject = ['$scope', '$state', 'loginService'];
  function Controller ($scope, $state, loginService) {
    loginService.removeSessionStorage();
    var vm = this;
    vm.message = '';
    vm.submit = function() {
      loginService.auth({
        loginName: vm.username,
        password: vm.password
      })
      .then(function(message){
        if(message)
          vm.message = message;
      })

    }
  }

  /** Service */
  angular
      .module('app.login')
      .factory('loginService', Service);

  Service.$inject = ['$state', '$http', 'URL', 'validate'];
  function Service ($state, $http, URL, validate) {
    return {
      auth: auth,
      removeSessionStorage: removeSessionStorage
    };
    // Remove session storage
    function removeSessionStorage () {
      if(sessionStorage.token){
        sessionStorage.removeItem("token");
      }
    }
    // Auth
    function auth (data) {
      return $http.post(
        URL + '/login', data
      )
      .then(function(result){
        var data = result.data;
        if(validate(data, 200)){
          sessionStorage.token = data.head.token;
          $state.go("dashboard");
          return data.head.message;
        }
        else{
          $state.go("login");
          return data.head.message;
        }
      })

    };

  }

})();
