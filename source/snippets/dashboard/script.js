define(
  [
    "backbone",
    "handlebars",
    "text!snippets/dashboard/raw.html",
    "router"
  ],
  function (Backbone, Handlebars, Html, Router) {
    return Backbone.View.extend({
      id: "dashboard",
      initialize: function () {
        this.render();
      },
      template: Handlebars.compile(Html),
      events: {},
      render: function () {
        this.$el.html(this.template());
        return this;
      }
    });
  }
);