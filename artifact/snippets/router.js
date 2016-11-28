define(
  "router",
  [
    "snippets/login/script.view",
    "snippets/layout/script.view",
    "snippets/dashboard/script.view"
  ],
  function(login, layout, dashboard) {
    var Router = Backbone.Router.extend({
      routes: {
        "": "login",
        "login": "login",
        "layout": "layout",
        "layout/dashboard": "layout_dashboard"
      },
      login: function() {
        new login().render();
      },
      layout: function() {
        new layout().render();
      },
      layout_dashboard: function() {
        this.layout();
        new dashboard().render();
      }
    });
    return new Router();
  }
);
