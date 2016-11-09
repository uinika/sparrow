define(
  ['Text!snippets/login/view.html', 'Text!snippets/login/style.less'],
  function(html, css){
    return Backbone.View.extend({
      id: 'hank',
      template: _.template($('#app').append(html)),
      render: function() {

      }
    });
  }
);
