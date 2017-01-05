define(
  [
    "backbone",
    "handlebars",
    "text!snippets/judgment/template/view.html",
    "router"
  ],
  function (Backbone, Handlebars, Html, Router) {
    return Backbone.View.extend({
      id: "template",
      initialize: function () {
        this.render();
      },
      template: Handlebars.compile(Html),
      events: {

      },
      render: function () {
        this.$el.html(this.template());
        return this;
      }
    });
  }
);