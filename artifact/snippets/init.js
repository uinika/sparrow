define(
  ["jquery", "underscore", "backbone", "handlebars", "bootstrap", "admin", "Router"],
  function($, _, Backbone, Handlebars, Bootstrap, Admin, Router) {
    var init = function() {
      var router = new Router();
      Backbone.history.start();
    };
    return { initialize: init };
  }
);
