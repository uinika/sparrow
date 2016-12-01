define(
  "http", {
    base: "http://localhost:5002",
    fetch: function (config) {
      return $.ajax({
        url: this.base + config.url,
        method: config.method || "get",
        contentType: config.type || "application/json",
        dataType: "json",
        cache: false,
        xhrFields: {
          withCredentials: true
        }
      })
    },
    verify: function (data, status) {
      if (data && data.head &&
        data.head.status === status &&
        data.hasOwnProperty('body'))
        return true;
    }
  }
);