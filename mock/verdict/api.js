const Router = require('express').Router(),
      Util = require('../common/util.js');
/** Router definition */
// Case List
Router.route('/legal/verdict')
  .get(function(request, response) {
    response.json(Util.json('/verdict/data/case_list/legal-verdict.json'));
});
Router.route('/verdict/template')
  .get(function(request, response) {
    response.json(Util.json('/verdict/data/case_list/verdict-template.json'));
});
// Doc List
Router.route('/verdict/writ')
  .get(function(request, response) {
    response.json(Util.json('/verdict/data/doc_list/verdict-writ.json'));
});
Router.route('/verdict/writ')
  .post(function(request, response) {
    response.json(Util.json('/verdict/data/doc_list/verdict-writ.json'));
});
Router.route('/verdict/export/word')
  .post(function(request, response) {
    console.log(request.body.data);
    let protocol = Util.protocol();
    protocol.head.status = 200;
    protocol.head.message = 'http response sucess';
    response.json(protocol);
});
// Editor
// Match
Router.route('/verdict/fact/result')
  .post(function(request, response) {
    response.json(Util.json('/verdict/data/editor/verdict-fact-result.json'));
});
Router.route('/verdict/reason')
  .post(function(request, response) {
    response.json(Util.json('/verdict/data/editor/verdict-reason.json'));
});
Router.route('/verdict/case/main')
  .post(function(request, response) {
    response.json(Util.json('/verdict/data/editor/verdict-case-main.json'));
});
// Low Item
Router.route('/case/brief/find/laws')
  .get(function(request, response) {
    response.json(Util.json('/verdict/data/editor/case-brief-find-laws.json'));
});
// Similar Case
Router.route('/case/similar/verdict')
  .post(function(request, response) {
    response.json(Util.json('/verdict/data/editor/case-similar-verdict.json'));
});
// Similar Case
Router.route('/conditon/tree')
  .get(function(request, response) {
    response.json(Util.json('/verdict/data/editor/conditon-tree.json'));
});
Router.route('/conditon/tree/info')
  .get(function(request, response) {
    response.json(Util.json('/verdict/data/editor/conditon-tree-info.json'));
});
Router.route('/verdict/update/log')
  .get(function(request, response) {
    response.json(Util.json('/verdict/data/editor/verdict-update-log.json'));
});
Router.route('/verdict/writ/jc')
  .post(function(request, response) {
    response.json(Util.json('/verdict/data/editor/verdict-writ-jc.json'));
});
Router.route('/case/main')
  .get(function(request, response) {
    response.json(Util.json('/verdict/data/editor/case-main.json'));
});
/** Module export */
module.exports = Router;
