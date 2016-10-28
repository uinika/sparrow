const JsonLoader = require('load-json-file'),
      Path = require('path');

/** Basic path */
exports.url = (url) => {
  return __dirname + url
};

/** Json loader */
exports.json = name => {
  return JsonLoader.sync(
    Path.resolve(__dirname, '..') + name
  );
};

/** Protocal between server & client */
exports.protocol = (head, body) => {
  head = head || {};
  body = body || {};
  return {
    "head": {
      "status": head.status || '',
      "token": head.token || '',
      "message": head.message || '',
      "total": head.total || ''
    },
    "body": body || ''
  }
};
