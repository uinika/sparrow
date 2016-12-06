define(
  ["backbone", "http"],
  function (Backbone, Http) {
    return Backbone.Model.extend({
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
            console.log(data);
            self.trigger("sync");
          }
        }.bind(this))
      }
    })
  }
);