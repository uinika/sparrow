define(
  "router", [
    "util",
    "snippets/login/script",
    "snippets/layout/script",
    "snippets/dashboard/script",
    "snippets/judgment/case/script"
  ],
  function (Util, login, layout, dashboard, editorCase, editorVerdict) {
    var Router = Backbone.Router.extend({
      routes: {
        '': "login",
        "login": "login",
        "layout": "layout",
        "layout/dashboard": "layout_dashboard",
        "layout/editor/case": "layout_editor_case"
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
      initialize: function () {
        this.render = function (view) {
          window.viewArray = [];
          if (!_.isEmpty(view)) {
            window.viewArray.push(view);
          } else {
            view.remove();
          }
        }
      }
    });
    return new Router();
  });