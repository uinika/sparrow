const Router = require('express').Router(),
      Util = require('../common/util.js');
/** Router definition */
Router.route('/login')
  .post(function(request, response) {
    response.json(Util.json('/login/data/login.json'));
});
/** Module export */
module.exports = Router;
