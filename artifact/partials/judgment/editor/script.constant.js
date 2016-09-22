(function(){
  angular.module('app.judgment')
    .constant('editorConstant', {
      // Tree Data
      'TreeData': [
        {
          name: "标题",
          id: "",
          children: [
            { name: "法院名称", id: "courtName" },
            { name: "文书名称", id: "lawCaseTitle" },
            { name: "案号", id: "lawCaseCode" }
          ]
        }, {
          name: "首部",
          id: "",
          children: [
            { name: "原告", id: "accuser" },
            { name: "原告代理人", id: "accuserAgent" },
            { name: "被告", id: "defendant" },
            { name: "被告代理人", id: "defendantAgent" },
            { name: "案件由来及审理经过", id: "caseGeneral" }
          ]
        }, {
          name: "事实",
          id: "",
          children: [
            { name: "诉讼请求", id: "claims" },
            { name: "证据", id: "argued" },
            { name: "事实", id: "factResult" }
          ]
        },
        { name: "理由", id: "reason" },
        { name: "裁判主文", id: "caseMain" },
        {
          name: "尾部",
          id: "",
          children: [
            { name: "诉讼费用负担", id: "legalCosts" },
            { name: "告知事项", id: "informInfo" }
          ]
        },
        {
          name: "落款",
          children: [
            { name: "审判长", id: "chiefJudge" },
            { name: "审判员", id: "judge" },
            { name: "书记员", id: "courtClerk" },
            { name: "判决日期", id: "judgmentDate" }
          ]
        }
      ],
      // Left Tree Options
      'TreeOptions': {
        nodeChildren: "children",
        dirSelectable: false,
        injectClasses: {
          ul: "a1",
          li: "a2",
          liSelected: "a7",
          iExpanded: "a3",
          iCollapsed: "a4",
          iLeaf: "a5",
          label: "a6",
          labelSelected: "a8"
        }
      },
      // Left Tree Options
      'ReasonTreeOptions': {
        nodeChildren: "childNode",
        dirSelectable: false,
        injectClasses: {
          ul: "a1",
          li: "a2",
          liSelected: "a7",
          iExpanded: "a3",
          iCollapsed: "a4",
          iLeaf: "a5",
          label: "a6",
          labelSelected: "a8"
        }
      },
      // Medium Editor Options
      'mediumEditorOptions': {
        toolbar:false,
        spellcheck: false
      },
      // Open Status
      'openStatus': {
        isFactResult: false,
        isReason: false,
        isCaseMain: false
      }
    })

})();
