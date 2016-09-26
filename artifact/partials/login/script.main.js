define(
  ['Text!partials/login/view.html', 'Text!partials/login/style.less'],
  function(html, css){
    return Backbone.View.extend({
      id: 'hank',
      template: _.template($('#app').append(html)),
      render: function() {

      }
    });
  }
);
