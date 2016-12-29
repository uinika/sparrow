require.config({
  baseUrl: "/",
  paths: {
    // core
    "text": "libraries/core/require.text",
    "domReady": "libraries/core/require.domReady",
    "admin": "libraries/theme/admin/js/app",
    "jquery": "libraries/core/jquery",
    "underscore": "libraries/core/underscore",
    "backbone": "libraries/core/backbone",
    "handlebars": "libraries/core/handlebars",
    "bootstrap": "libraries/theme/bootstrap/js/bootstrap",
    // general
    "router": "snippets/router",
    "http": "general/http",
    "util": "general/util",
    // plugin

  },
  map: {
    "*": {
      css: "libraries/core/require.css"
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
    "bootstrap": ["jquery"],
    "admin": ["jquery", "bootstrap"],
    "http": ["jquery"],
  },
  waitSeconds: 0
});

require(["backbone", "admin", "router", "http", "util"],
  function (Backbone, Admin, Router) {
    Backbone.history.start()
  }
);