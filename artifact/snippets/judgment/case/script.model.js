define(
  ["backbone", "http"],
  function (Backbone, Http) {
    return Backbone.Model.extend({
      default: {
        cases: {}
      },
      initialize: function() {
        this.getCaseList();
      },
      getCaseList: function() {
        var self = this;
        Http.fetch({
          url: "/legal/verdict",
          method: "GET"
        })
        .then(function(data){
          if(Http.verify(data, 200)){
            self.set(data);
          }
        })
      }
    })
  }
);