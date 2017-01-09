define(
  [
    "backbone",
    "handlebars",
    "text!snippets/repository/reason/view.html"
  ],
  function (Backbone, Handlebars, Html) {
    return Backbone.View.extend({
      id: "reason",
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