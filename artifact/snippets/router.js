define(
  "Router",
  ["snippets/login/script", "snippets/layout/script"],
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
