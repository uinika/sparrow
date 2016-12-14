(function () {
  
  define([
    "backbone",
    "handlebars",
    "domReady",
    "text!snippets/judgment/case/raw.html",
    "router",
    "snippets/judgment/case/script.model.js",
    "libraries/plugin/datatables/jquery.dataTables",
    "css!libraries/plugin/datatables/jquery.dataTables.css"
  ], main);

  function main(Backbone, Handlebars, domReady, Html, Router, Model) {
    return Backbone.View.extend({
      el: "#main",
      model: new Model(),
      template: Handlebars.compile(Html),
      events: {},
      initialize: function () {
        this.model.bind('change', _.bind(this.render, this));
        domReady(function(){

        })
      },
      render: function () {
        this.$el.html(
          this.template(this.model.toJSON())
        );
      }
    });
  };

})()