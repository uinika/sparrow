define(
  [
    "router",
    "domReady",
    "handlebars",
    "text!snippets/login/raw.html",
    "snippets/login/script.model",
    "libraries/plugin/iCheck/icheck.js",
    "css!libraries/plugin/iCheck/square/blue.css"
  ],
  function (Router, domReady, Handlebars, Html, Model) {
    return Backbone.View.extend({
      el: "#app",
      template: Handlebars.compile(Html),
      events: {
        "input": "checked",
        "click .btn": "login"
      },
      render: function () {
        this.$el.html(this.template());
        domReady(function(){
          this.$("input").iCheck({
            checkboxClass: "icheckbox_square-blue",
            radioClass: "iradio_square-blue"
          });
        });
        return this;
      },
      login: function () {
        var login = new Model();
        login.auth();
      }
    });
  }
);