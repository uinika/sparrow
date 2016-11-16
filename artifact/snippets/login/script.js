define(
  ["backbone","handlebars", 'Text!snippets/login/view.html', 'Text!snippets/login/style.less', 'Router'],
  function(Backbone, Handlebars, html, css, Router){
    return Backbone.View.extend({
      el: "#app",
      template: Handlebars.compile(html),
      events: {
        "click .tpl-skiner-toggle": "toggleSkin",
        "click .tpl-skiner-content-bar>span": "toggleSkinBar",
        "click .tpl-login-btn": "login"
      },
      render: function() {
        this.$el.html(this.template());
        return this;
      },
      toggleSkin: function() {
        this.$('.tpl-skiner').toggleClass('active');
      },
      toggleSkinBar: function(event) {
        var color = $(event.target).attr('data-color');
        $('body').attr('class', color);
      },
      login: function() {
        Router.navigate("dashboard", {trigger: true});
      }
    });
  }
); 