define(
  ["backbone", "http"],
  function(Backbone, Http) {
    var auth = Backbone.Model.extend();
    Http({
      url: "/login",
      method: "post"
    })
    .then(function(data){
      console.log(data);
    })
  }
);