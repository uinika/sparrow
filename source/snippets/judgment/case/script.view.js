(function () {

  define([
    "backbone",
    "handlebars",
    "domReady",
    "text!snippets/judgment/case/raw.html",
    "router",
    "snippets/judgment/case/script.model.js",
    "libraries/plugin/datatables/js/jquery.dataTables",
    "css!libraries/plugin/datatables/css/jquery.dataTables.css"
  ], main);

  function main(Backbone, Handlebars, domReady, Html, Router, Model) {
    return Backbone.View.extend({
      el: "#main",
      model: new Model(),
      template: Handlebars.compile(Html),
      events: {},
      initialize: function () {
        this.listenTo(this.model, 'change', this.render);
      },
      render: function () {
        this.$el.html(
          this.template(this.model.attributes)
        );
      }
    });
  };

})()