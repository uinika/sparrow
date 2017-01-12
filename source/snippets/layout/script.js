define(
  [
    "backbone",
    "handlebars",
    "admin",
    "text!snippets/layout/view.html"
  ],
  function (Backbone, Handlebars, Admin, Html) {
    return Backbone.View.extend({
      id: "layout",
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