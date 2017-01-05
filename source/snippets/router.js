define(
  "router", [
    "snippets/login/script",
    "snippets/layout/script",
    "snippets/dashboard/script",
    "snippets/judgment/cases/script",
    "snippets/judgment/editor/script",
    "snippets/judgment/upload/script",
    "snippets/judgment/template/script"
  ],
  function (
    // Root
    Login, Layout,
    // Children
    Dashboard, Cases, Editor, Upload, Template
  ) {
    var Router = Backbone.Router.extend({
      initialize: function () {
        this.app = $("#app");
        this.layoutView = new Layout;
      },
      routes: {
        '': "login",
        "login": "login",
        "dashboard": "dashboard",
        "cases": "cases",
        "editor": "editor",
        "upload": "upload",
        "template": "template"
      },
      login: function () {
        var loginView = new Login;
        this.app.html(loginView.$el);
      },
      dashboard: function () {
        var dashboardView = new Dashboard;
        this.app.html(this.layoutView.$el)
          .find("#main").html(dashboardView.$el);
      },
      cases: function () {
        var casesView = new Cases;
        this.app.html(this.layoutView.$el)
          .find("#main").html(casesView.$el);
      },
      editor: function () {
        var editorView = new Editor;
        this.app.html(this.layoutView.$el)
          .find("#main").html(editorView.$el);
      },
      upload: function () {
        var uploadView = new Upload;
        this.app.html(this.layoutView.$el)
          .find("#main").html(uploadView.$el);
      },
      template: function () {
        var templateView = new Template;
        this.app.html(this.layoutView.$el)
          .find("#main").html(templateView.$el);
      },
    });
    return new Router();
  });