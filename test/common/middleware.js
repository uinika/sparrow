const Color = require('colors/safe');

/** Log for http request */
exports.log = (request, response) => {
  console.info(Color.cyan('============================================================'));
  console.info(Color.cyan('Request URL =>'), Color.underline.blue(request.path));
  console.info(Color.cyan('Request Type =>'), Color.blue(request.method));
  console.info(Color.cyan('Request Body =>'), Color.blue(request.body));
  console.info(Color.cyan('Request Cookie =>'), Color.blue(request.cookies));
  console.info(Color.cyan('Request Query =>'), Color.blue(request.query));
  console.info(Color.cyan('Request Parameter =>'), Color.blue(request.params));
}
