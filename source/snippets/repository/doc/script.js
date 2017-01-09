define(
  [
    "backbone",
    "handlebars",
    "text!snippets/repository/doc/view.html"
  ],
  function (Backbone, Handlebars, Html) {
    return Backbone.View.extend({
      id: "doc",
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