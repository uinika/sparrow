define(
  "router", [
    "snippets/login/script",
    "snippets/layout/script",
    "snippets/dashboard/script",
    "snippets/judgment/cases/script"
  ],
  function (Login, Layout, Dashboard, Cases) {
    var Router = Backbone.Router.extend({
      initialize: function () {
        this.app = $("#app");
        this.layoutView = new Layout;
      },
      routes: {
        '': "login",
        "login": "login",
        "dashboard": "dashboard",
        "cases": "cases"
      },
      login: function () {
        var loginView = new Login;
        this.app.html(loginView.$el);
      },
      dashboard: function () {
        this.app.html(this.layoutView.$el);
        var dashboardView = new Dashboard;
        this.app.find("#main").html(dashboardView.$el);
      },
      cases: function () {
        this.app.html(this.layoutView.$el);
        var casesView = new Cases;
        this.app.find("#main").html(casesView.$el);
      },
    });
    return new Router();
  });