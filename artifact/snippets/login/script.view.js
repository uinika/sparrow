define(
  [
    "router",
    "handlebars",
    "text!snippets/login/page.html",
    "snippets/login/script.model",
    "libraries/plugin/iCheck/icheck.js",
    "css!libraries/plugin/iCheck/square/blue.css"
  ],
  function (Router, Handlebars, Html, Model) {
    return Backbone.View.extend({
      el: "#app",
      template: Handlebars.compile(Html),
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