define([
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
      layout: function () {
        this.layoutView = new Layout;
        return this.app.html(this.layoutView.$el);
      },
      // dashboard
      dashboard: function () {
        var dashboardView = new Dashboard;
        this.layout().find("#main").html(dashboardView.render().$el);
      },
      // judgment
      cases: function () {
        var casesView = new Cases;
        this.layout().find("#main").html(casesView.render().$el);
      },
      editor: function () {
        var editorView = new Editor;
        this.layout().find("#main").html(editorView.render().$el);
      },
      upload: function () {
        var uploadView = new Upload;
        this.layout().find("#main").html(uploadView.render().$el);
      },
      template: function () {
        var templateView = new Template;
        this.layout().find("#main").html(templateView.render().$el);
      },
      // repository
      doc: function () {
        var docView = new Doc;
        this.layout().find("#main").html(docView.render().$el);
      },
      item: function () {
        var itemView = new Item;
        this.layout().find("#main").html(itemView.render().$el);
      },
      reason: function () {
        var reasonView = new Reason;
        this.layout().find("#main").html(reasonView.render().$el);
      },
    });
    return Router;
  });