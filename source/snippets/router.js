define(
  "router", [
    "util",
    "snippets/login/script.view",
    "snippets/layout/script.view",
    "snippets/dashboard/script.view",
    "snippets/judgment/case/script.view",
    "snippets/judgment/template/script.view"
  ],
  function (Util, login, layout, dashboard, editorCase, editorVerdict) {
    var Router = Backbone.Router.extend({
      routes: {
        '': "login",
        "login": "login",
        "layout": "layout",
        "layout/dashboard": "layout_dashboard",
        "layout/editor/case": "layout_editor_case",
        "layout/editor/verdict": "layout_editor_verdict"
      },
      login: function () {
        new login().render();
      },
      layout: function () {
        new layout().render();
      },
      layout_dashboard: function () {
        this.layout();
        new dashboard().render();
      },
      layout_editor_case: function () {
        this.layout();
        new editorCase().render();
      },
      layout_editor_verdict: function () {
        this.layout();
        new editorVerdict().render();
      },
      initialize: function () {
      }
    });
    return new Router();
  });