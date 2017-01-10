define(
  [
    "backbone",
    "handlebars",
    "text!snippets/judgment/editor/view.html"
  ],
  function (Backbone, Handlebars, Html, Router) {
    return Backbone.View.extend({
      id: "template",
      initialize: function () {
      },
      template: Handlebars.compile(Html),
      events: {
        "click #event-min-max": "eventMinMax"
      },
      render: function () {
        this.$el.html(this.template());
        return this;
      },
      eventMinMax: function() {
        this.$(".content-header").toggle();
      }

    });
  }
);