(function () {
  define([
    "backbone",
    "handlebars",
    "text!snippets/editor/case/raw.html",
    "router",
    "snippets/editor/case/script.model.js"
  ], main);

  function main(Backbone, Handlebars, Html, Router, CaseModel) {
    return Backbone.View.extend({
      el: "#main",
      template: Handlebars.compile(Html),
      events: {},
      initialize: function() {

      },
      render: function () {
        var test = new CaseModel();
        test.on("sync", function(data) {
          this.$el.html(this.template(test.toJSON()));
        }.bind(this))
      }
    });
  };

})()