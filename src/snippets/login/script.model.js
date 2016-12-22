define(
  ["backbone", "http"],
  function(Backbone, Http) {
    var auth = Backbone.Model.extend({
      initialize: function() {
      },     
      auth: function() {
        Http.fetch({
          url: "/login",
          method: "post"
        })
        .then(function(data){
          if(Http.verify(data, 200)){
            this.set(data);
            Backbone.history.navigate("layout/dashboard", {trigger: true});
            sessionStorage.setItem(
              "login", data
            );
          }
          else{
            Backbone.history.navigate("login", {trigger: true});
          }
        }.bind(this));
      }
    });
    return auth;
  }
);