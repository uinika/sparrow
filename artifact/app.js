(function () {

  require.config({
    paths: {
      "jquery": "libraries/core/jquery",
      "underscore": "libraries/core/lodash",
      "backbone": "libraries/core/backbone",
      "handlebars": "libraries/core/handlebars",
      "bootstrap": "libraries/theme/bootstrap/js/bootstrap.min",
      "Text": "libraries/core/require.text",
      "domReady": "libraries/core/require.domReady",
      "Router": "snippets/router",
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
    }
  });

  require(["snippets/main"], initialize);

  function initialize(App) {
    App.initialize();
  }

})();
