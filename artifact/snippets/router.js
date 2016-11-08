define(
  ['snippets/login/script.main'],
  function(loginView) {
    var Router = Backbone.Router.extend({
      routes: {
        '': 'login',
        'login': 'login',
        'dashboard': 'dashboard'
      },
      login: function() {
        new loginView().render();
      },
      dashboard: function() {
        console.log('dashboard');
      }
    })
    return Router;
  }
);
