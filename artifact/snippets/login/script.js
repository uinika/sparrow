define(
  ["handlebars", 'Text!snippets/login/view.html', 'Text!snippets/login/style.less', 'Router'],
  function(Handlebars, html, css, Router){
    return Backbone.View.extend({
      el: "#app",
      template: Handlebars.compile(html),
      events: {
        "click .btn": "login"
      },
      render: function() {
        this.$el.html(this.template());
        return this;
      },
      login: function() {
        console.log(Router);
        Router.navigate("layout", {trigger: true});
      }
    });
  }
); 