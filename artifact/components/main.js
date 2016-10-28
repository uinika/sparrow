define(
  ['Router'],
  function(Router) {
    var init = function() {
      var router = new Router();
      Backbone.history.start();
    };
    return { initialize: init };
  }
);
