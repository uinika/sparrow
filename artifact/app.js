require.config({
  paths: {
    "jquery": "libraries/core/jquery",
    "underscore": "libraries/core/underscore",
    "backbone": "libraries/core/backbone",
    "marionette": "libraries/core/marionette",
    "handlebars": "libraries/core/handlebars",
    "bootstrap": "libraries/theme/bootstrap/js/bootstrap",
    "admin": "libraries/theme/admin/js/app",
    "text": "libraries/core/require.text",
    "domReady": "libraries/core/require.domReady",
    "router": "snippets/router",
    "http": "global/http"
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
