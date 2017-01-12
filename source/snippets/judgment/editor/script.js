define(
  [
    "backbone",
    "handlebars",
    "text!snippets/judgment/editor/view.html",
    "admin"
  ],
  function (Backbone, Handlebars, Html, Admin) {
    return Backbone.View.extend({
      id: "editor",
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
        Admin
      }

    });
  }
);