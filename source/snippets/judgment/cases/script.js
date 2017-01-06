(function () {
  define([
    "backbone",
    "handlebars",
    "text!snippets/judgment/cases/view.html",
    "http"
  ], handler);

  function handler(Backbone, Handlebars, Html, Http) {

    var Model = Backbone.Model.extend({
      default: {
        cases: {}
      },
      initialize: function () {
        this.getCaseList();
      },
      getCaseList: function () {
        var self = this;
        Http.fetch({
            url: "/legal/verdict",
            method: "GET"
          })
          .then(function (data) {
            if (Http.verify(data, 200)) {
              self.set(data);
            }
          })
      }
    });

    var View = Backbone.View.extend({
      id: "cases",
      model: new Model(),
      initialize: function () {
        var model = new Model();
        this.listenTo(this.model, 'change', this.render);
      },
      template: Handlebars.compile(Html),
      events: {},
      render: function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
      }
    });

    return View;

  };

})()