define(
  "http",
  [],
  function () {
    return function (config) {
      var base = "http://localhost:5002";
      return $.ajax({
        url: base + config.url,
        method: config.method || "get",
        contentType: config.type || "application/json",
        dataType: "json",
        cache: false,
        xhrFields: {
          withCredentials: true
        }
      });
    };
  }
)