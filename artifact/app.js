(function() {

  require.config({
    paths: {
      'Text': 'libraries/core/require.text',
      'App': 'snippets/main',
      'Router': 'snippets/router'
    }
  });

  require(['App'], initialize);

  function initialize(App) {
    App.initialize();
  }

})();
