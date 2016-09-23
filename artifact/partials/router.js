define(
  ['Text!partials/login/view.html', 'Text!partials/login/style.less'],
  function(html, css) {
    console.log(html);
    console.info(css);
    var Router = Backbone.Router.extend({
      routes: {
        '': 'login',
        'login': 'login'
      },
      login: function(actions) {

      }
    })
    return Router;
  }
);
