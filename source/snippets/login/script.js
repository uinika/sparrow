define(
  [
    "backbone",
    "handlebars",
    "http",
    "text!snippets/login/view.html",
    "jquery.iCheck"
  ],
  function (Backbone, Handlebars, Http, Html) {

    var Model = Backbone.Model.extend({
      initialize: function () {},
      auth: function () {
        Http.fetch({
            url: "/login",
            method: "post"
          })
          .then(function (data) {
            if (Http.verify(data, 200)) {
              this.set(data);
              Backbone.history.navigate("dashboard", {
                trigger: true
              });
              sessionStorage.setItem(
                "login", data
              );
            } else {
              Backbone.history.navigate("login", {
                trigger: true
              });
            }
          }.bind(this));
      }
    });

    var View = Backbone.View.extend({
      id: "login",
      template: Handlebars.compile(Html),
      initialize: function () {},
      events: {
        "input": "checked",
        "click .btn": "login"
      },
      render: function () {
        this.$el.html(this.template());
        this.$(".rember-me").iCheck({
          checkboxClass: "icheckbox_square-blue",
          radioClass: "iradio_square-blue"
        });
        return this;
      },
      login: function () {
        var login = new Model();
        login.auth();
      }
    });

    return View;

  }
);