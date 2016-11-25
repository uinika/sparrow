define(
  [
   "backbone",
   "handlebars",
   "text!snippets/layout/page.html",
   "router"
  ],
  function(Backbone, Handlebars, Html, Router){
    return Backbone.View.extend({
      el: "#app",
      template: Handlebars.compile(Html),
      events: {
      },
      render: function() {
        this.$el.html(this.template());
        return this;
      }
    });
  }
); 