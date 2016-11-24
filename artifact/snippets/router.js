define(
  "Router",
  ["snippets/login/script.view", "snippets/layout/script.view"],
  function(login, layout) {
    var Router = Backbone.Router.extend({
      routes: {
        "": "login",
        "login": "login",
        "layout": "layout"
      },
      login: function() {
        new login().render();
      },
      layout: function() {
        new layout().render();
      }
    });
    return new Router();
  }
);
