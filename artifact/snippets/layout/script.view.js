define(
  ["backbone","handlebars", 'Text!snippets/layout/view.html', 'Router'],
  function(Backbone, Handlebars, html, Router){
    return Backbone.View.extend({
      el: "#app",
      template: Handlebars.compile(html),
      events: {
      },
      render: function() {
        this.$el.html(this.template());
        return this;
      }
    });
  }
); 