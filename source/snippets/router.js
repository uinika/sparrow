define(
  "router", [
    // root
    "snippets/login/script",
    "snippets/layout/script",
    "snippets/dashboard/script",
    // judgment
    "snippets/judgment/cases/script",
    "snippets/judgment/editor/script",
    "snippets/judgment/upload/script",
    "snippets/judgment/template/script",
    // repository
    "snippets/repository/doc/script",
    "snippets/repository/item/script",
    "snippets/repository/reason/script"
  ],
  function (
    // root
    Login, Layout,
    // judgment
    Dashboard, Cases, Editor, Upload, Template,
    // repository
    Doc, Item, Reason
  ) {
    var Router = Backbone.Router.extend({
      initialize: function () {
        this.app = $("#app");
        this.layoutView = new Layout;
      },
      routes: {
        // root
        '': "login",
        "login": "login",
        "dashboard": "dashboard",
        // judgment
        "cases": "cases",
        "editor": "editor",
        "upload": "upload",
        "template": "template",
        // repository
        "doc": "doc",
        "item": "item",
        "reason": "reason"
      },
      // root
      login: function () {
        var loginView = new Login;
        this.app.html(loginView.render().$el);
      },
      dashboard: function () {
        var dashboardView = new Dashboard;
        this.app.html(this.layoutView.$el)
          .find("#main").html(dashboardView.render().$el);
      },
      // judgment
      cases: function () {
        var casesView = new Cases;
        this.app.html(this.layoutView.$el)
          .find("#main").html(casesView.render().$el);
      },
      editor: function () {
        var editorView = new Editor;
        this.app.html(this.layoutView.$el)
          .find("#main").html(editorView.render().$el);
      },
      upload: function () {
        var uploadView = new Upload;
        this.app.html(this.layoutView.$el)
          .find("#main").html(uploadView.render().$el);
      },
      template: function () {
        var templateView = new Template;
        this.app.html(this.layoutView.$el)
          .find("#main").html(templateView.render().$el);
      },
      // repository
      doc: function () {
        var docView = new Doc;
        this.app.html(this.layoutView.$el)
          .find("#main").html(docView.render().$el);
      },
      item: function () {
        var itemView = new Item;
        this.app.html(this.layoutView.$el)
          .find("#main").html(itemView.render().$el);
      },
      reason: function () {
        var reasonView = new Reason;
        this.app.html(this.layoutView.$el)
          .find("#main").html(reasonView.render().$el);
      },
    });
    return new Router();
  });