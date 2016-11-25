(function () {

  require.config({
    paths: {
      "jquery": "libraries/core/jquery",
      "underscore": "libraries/core/lodash",
      "backbone": "libraries/core/backbone",
      "handlebars": "libraries/core/handlebars",
      "bootstrap": "libraries/theme/bootstrap/js/bootstrap",
      "admin": "libraries/theme/admin/js/app",
      "text": "libraries/core/require.text",
      "domReady": "libraries/core/require.domReady",
      "router": "snippets/router",
      "http": "snippets/common/http"
    },
    map: {
      "*": {
        "css": "libraries/core/require.css"
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
      "http": ["jquery"],
      "bootstrap": ["jquery"],
      "admin": ["jquery", "bootstrap"],
    },
    waitSeconds: 0
  });

  require(["backbone", "admin", "router", "http"], 
    function(Backbone, Admin, Router){
      Backbone.history.start()
    }
  );

})();