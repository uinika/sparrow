(function(){

  angular.module('app.judgment').controller('EditorController', EditorController);

  EditorController.$inject = ['editorConstant', 'editorService', '$location', '$anchorScroll', '$uibModal'];

  function EditorController(editorConstant, editorService, $location, $anchorScroll, $uibModal) {
    var vm = this;
    /* Constant */
    vm.treeData = editorConstant.TreeData;
    vm.treeOptions = editorConstant.TreeOptions;
    vm.reasonTreeOptions = editorConstant.ReasonTreeOptions;
    vm.mediumEditorOptions = editorConstant.mediumEditorOptions;
    vm.openStatus = editorConstant.openStatus;
    /* Variable */
    vm.targetJudgment = {};
    vm.template = {};
    vm.lawItems = [];
    vm.similarCases = [];
    vm.proposalsFactResult = [];
    vm.proposalsReason = [];
    vm.proposalsCaseMain = [];
    vm.selectedSimilarCase = {};
    vm.selectedReason = '';
    vm.selectedFactResult = '';
    vm.selectedCaseMain = '';
    /* Event */
    vm.selectSimilarCase = selectSimilarCase;
    vm.matchFactResult = matchFactResult;
    vm.selectFactResult = selectFactResult;
    vm.transferFactResult = transferFactResult;
    vm.matchCaseMain = matchCaseMain;
    vm.selectCaseMain = selectCaseMain;
    vm.transferCaseMain = transferCaseMain;
    vm.saveJudgment = saveJudgment;
    vm.jumpToSection = jumpToSection;
    vm.exportWORD = exportWORD;
    vm.selectReason = selectReason;
    vm.transferReason = transferReason;
    /* Initial */
    activate();
    function activate() {
      var targetJudgment = sessionStorage.targetJudgment;
      if (targetJudgment) {
        vm.targetJudgment = JSON.parse(targetJudgment);
        // Template content
        editorService.getJudgmentTemplate(vm.targetJudgment)
        .then(function(data) {
           vm.template = data.body[0];
           var baseArticle = vm.template.templateArticle.parties.caseGeneral
             + vm.template.templateArticle.fact.claims
             + vm.template.templateArticle.fact.argued
           // Init judgment match
           editorService.matchByFactResult(
             baseArticle
             + vm.template.templateArticle.fact.factResult
           ).then(function(data){
             vm.proposalsFactResult = data.body;
           });
           editorService.matchByCaseMain(
             baseArticle
             + vm.template.templateArticle.fact.factResult
             + vm.template.templateArticle.reason
             + vm.template.templateArticle.caseMain
           ).then(function(data){
             vm.proposalsCaseMain = data.body;
           });
           editorService.matchByReasonTree()
           .then(function(data){
             vm.reasonTree = data.body;
           });
           // Init similar case
           editorService.fetchSimilarCase(
             baseArticle
             + vm.template.templateArticle.fact.factResult
           ).then(function(data){
             vm.similarCases = data.body;
           });
        });
        // Init low item
        editorService.fetchLawItem({
          causeOfAction: vm.targetJudgment.causeOfAction
        })
        .then(function(data) {
           vm.lawItems = data.body;
        });

      };
    }
    /* Match by FactResult */
    function matchFactResult (factResult) {
      editorService.matchByFactResult(factResult)
      .then(function(data){
        vm.proposalsFactResult = data.body;
      })
    };
    function selectFactResult(factResult) {
      vm.selectedFactResult = factResult ? factResult : '暂无内容，请继续输入条件';
    }
    function transferFactResult(factResult) {
      vm.template.templateArticle.fact.factResult = factResult;
    };
    /* Match by CaseMain */
    function matchCaseMain(caseMain) {
      editorService.matchByCaseMain(caseMain)
      .then(function(data){
        vm.proposalsCaseMain = data.body;
      })
    };
    function selectCaseMain(caseMain) {
      vm.selectedCaseMain = caseMain ? caseMain : '暂无内容，请继续输入条件';
    };
    function transferCaseMain(caseMain) {
        vm.template.templateArticle.caseMain = caseMain;
    };
    /* Select similar case */
    function selectSimilarCase(similarCase) {
      vm.selectedSimilarCase = similarCase;
    };
    /* Reason's Tree & Transfer */
    function selectReason(reason) {
      vm.selectedReason = reason ? reason : '暂无内容，请继续选择下级条件';
    };
    function transferReason(reason) {
      vm.template.templateArticle.reason = reason;
    };
    /* Save Judgment */
    function saveJudgment() {
      editorService.saveJudgmentTemplate({
        articleContentJson: JSON.stringify(vm.template.templateArticle),
        articleContent: $('.editor>.center').text().trim(),
        articleHtml: $('.editor>.center').html().trim(),
        articleId: vm.targetJudgment.articleId,
        templateId: vm.targetTemplate.templateId,
        causeOfAction: vm.targetJudgment.causeOfAction,
        lawCaseName: vm.targetJudgment.lawCaseName
      })
      .then(function(data) {
        if(data && data.head) {
          alert(data.head.message);
        }
      })
    };
    /* Jump to section by anchor */
    function jumpToSection(id) {
      $location.hash(id);
      $anchorScroll.yOffset = 58;
      $anchorScroll();
    }
    /* Export MS word */
    function exportWORD() {
      editorService.exportWORD({
        articleId: vm.targetJudgment.articleId,
        lawCaseName: vm.targetJudgment.lawCaseName,
        articleHtml: $('.editor>.center').html().trim()
      })
    };
  };
})();
