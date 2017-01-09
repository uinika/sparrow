define(
  [
    "backbone",
    "handlebars",
    "text!snippets/dashboard/view.html"
  ],
  function (Backbone, Handlebars, Html) {
    return Backbone.View.extend({
      id: "dashboard",
      initialize: function () {

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