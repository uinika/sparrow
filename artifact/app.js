require.config({
  baseUrl: "/",
  paths: {
    // core
    jquery: "libraries/core/jquery",
    underscore: "libraries/core/underscore",
    backbone: "libraries/core/backbone",
    marionette: "libraries/core/marionette",
    handlebars: "libraries/core/handlebars",
    bootstrap: "libraries/theme/bootstrap/js/bootstrap",
    text: "libraries/core/require.text",
    domReady: "libraries/core/require.domReady",
    admin: "libraries/theme/admin/js/app",
    // custom
    router: "snippets/router",
    http: "general/http",
  },
  map: {
    "*": {
      css: "libraries/core/require.css"
    }
  },
  shim: {
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },
    underscore: {
      exports: "_"
    },
    http: ["jquery"],
    bootstrap: ["jquery"],
    admin: ["jquery", "bootstrap"],
  },
  waitSeconds: 0
});

require(["backbone", "admin", "router", "http"], 
  function(Backbone, Admin, Router){
    Backbone.history.start()
  }
);
