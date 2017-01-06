define(
  [
    "backbone",
    "handlebars",
    "text!snippets/judgment/upload/view.html",
    "router"
  ],
  function (Backbone, Handlebars, Html, Router) {
    return Backbone.View.extend({
      id: "upload",
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