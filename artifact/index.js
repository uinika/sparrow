(function() {

  require.config({
    paths: {
      'Text': 'libraries/core/require.text',
      'App': 'partials/app',
      'Router': 'partials/router'
    }
  });

  require(['App'], function(App) {
    App.initialize();
  });

})();
