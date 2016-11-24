define(
  [
    "Text!snippets/login/view.html",
    "Text!snippets/login/style.less",
    "handlebars",
    "Router",
    "libraries/plugin/iCheck/icheck.js",
    "CSS!libraries/plugin/iCheck/square/blue.css"
  ],
  function (html, css, Handlebars, Router) {
    return Backbone.View.extend({
      el: "#app",
      template: Handlebars.compile(html),
      events: {
        "input": "checked",
        "click .btn": "login"
      },
      render: function () {
        this.$el.html(this.template());
        this.$("input").iCheck({
          checkboxClass: "icheckbox_square-blue",
          radioClass: "iradio_square-blue"
        });
        return this;
      },
      login: function () {
        Backbone.history.navigate("layout", {
          trigger: true
        });
      }
    });
  }
);