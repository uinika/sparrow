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
    "backbone.marionette": "libraries/core/backbone.marionette",
    "backbone.radio": "libraries/core/backbone.radio",
    "handlebars": "libraries/core/handlebars",
    "bootstrap": "libraries/theme/bootstrap/js/bootstrap",
    /*----- general -----*/
    "router": "snippets/router",
    "http": "general/http",
    "util": "general/util",
    /*----- widget -----*/
    "jquery.iCheck": "libraries/theme/widget/iCheck/icheck",
    "jquery.slimScroll": "libraries/theme/widget/slimScroll/jquery.slimscroll",
    /*----- plugin -----*/
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
    "backbone.radio": ["backbone"],
    "backbone.marionette": ["backbone.radio"],
    "bootstrap": ["jquery"],
    "admin": ["jquery", "bootstrap"],
    /*----- general -----*/
    "http": ["jquery"],
    "util": ["jquery"],
    /*----- plugin -----*/
    "jquery.iCheck": ["jquery", "css!libraries/theme/widget/iCheck/square/blue.css"],
    "jquery.slimScroll": ["jquery"],
    "jquery.webcam": ["jquery"]
  },
  waitSeconds: 0
});

require([
    /*----- core -----*/
    "backbone", "admin", "router", "backbone.marionette",
    /*----- general -----*/
    "http", "util",
    /*----- plugin -----*/
    "bootstrap", "jquery.slimScroll", "jquery.webcam"
  ],
  function (Backbone, Admin, Router) {
    var router = new Router();
    Backbone.history.start();
    // backbone debugger
    if (window.__backboneAgent) {
      window.__backboneAgent.handleBackbone(Backbone);
    }
  }
);