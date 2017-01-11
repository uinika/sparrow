require.config({
  baseUrl: "/",
  paths: {
    /*----- core -----*/
    "text": "libraries/core/require.text",
    "domReady": "libraries/core/require.domReady",
    "admin": "libraries/theme/admin/js/app",
    "jquery": "libraries/core/jquery",
    "underscore": "libraries/core/underscore",
    "backbone": "libraries/core/backbone",
    "handlebars": "libraries/core/handlebars",
    "bootstrap": "libraries/theme/bootstrap/js/bootstrap",
    /*----- general -----*/
    "router": "snippets/router",
    "http": "general/http",
    "util": "general/util",
    /*----- plugin -----*/
    "jquery.icheck": "libraries/plugin/iCheck/icheck",
    "jquery.slimScroll": "libraries/plugin/slimScroll/jquery.slimscroll",
    "jquery.webcam": "libraries/plugin/webcam/jquery.webcam"
  },
  map: {
    "*": {
      css: "libraries/core/require.css"
    }
  },
  shim: {
    /*----- core -----*/
    "underscore": {
      exports: "_"
    },
    "backbone": {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },
    "bootstrap": ["jquery"],
    "admin": ["jquery", "bootstrap"],
    /*----- general -----*/
    "http": ["jquery"],
    "util": ["jquery"],
    /*----- plugin -----*/
    "jquery.icheck": ["jquery"],
    "jquery.slimScroll": ["jquery"],
    "jquery.webcam": ["jquery"]
  },
  waitSeconds: 0
});

require([
    /*----- core -----*/
    "backbone", "admin", "router",
    /*----- general -----*/
    "http", "util",
    /*----- plugin -----*/
    "bootstrap", "jquery.slimScroll", "jquery.webcam"
  ],
  function (Backbone) {
    Backbone.history.start()
  }
);