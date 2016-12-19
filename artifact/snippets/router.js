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
        this.represent(new login());
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
        //
        Backbone.View.prototype.close = function () {
          console.log(this.el);
          this.remove();
          this.unbind();
          if (this.onClose) {
            this.onClose();
          }
        };
        //
        this.represent = function (view) {
          if (this.currentView) {
            this.currentView.close();
          }
          this.currentView = view;
          this.currentView.render();
          $("#app").html(this.currentView.el);
        }
      }
    });
    return new Router();
  });