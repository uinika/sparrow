(function () {

  require.config({
    paths: {
      "jquery": "libraries/core/jquery",
      "underscore": "libraries/core/lodash",
      "backbone": "libraries/core/backbone",
      "handlebars": "libraries/core/handlebars",
      "bootstrap": "libraries/theme/bootstrap/js/bootstrap",
      "admin": "libraries/theme/admin/js/app",
      "Text": "libraries/core/require.text",
      "domReady": "libraries/core/require.domReady",
      "Router": "snippets/router",
    },
    map: {
      "*": {
        "CSS": "libraries/core/require.css"
      }
    },
    shim: {
      "backbone": {
        deps: ["underscore", "jquery"],
        exports: "Backbone"
      },
      "underscore": {
        exports: "_"
      },
      "handlebars": {
        exports: "Handlebars"
      },
      "bootstrap": ["jquery"],
      "admin": ["jquery", "bootstrap"],
    }
  });

  require(["backbone", "admin", "Router"], 
    function(Backbone, Admin, Router){
      Backbone.history.start()
    }
  );

})();