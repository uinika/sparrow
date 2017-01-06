define(
  [
    "backbone",
    "handlebars",
    "text!snippets/judgment/editor/view.html",
    "router"
  ],
  function (Backbone, Handlebars, Html, Router) {
    return Backbone.View.extend({
      id: "template",
      initialize: function () {
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