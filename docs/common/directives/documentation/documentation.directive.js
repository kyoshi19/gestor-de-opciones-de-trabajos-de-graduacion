(function(win) {
  'use strict';

  //  documentation directive
  function documentation(workTypesValue) {
    var directive = {
      restrict        : 'E',
      templateUrl     : 'common/directives/documentation/documentation.html',
      scope           : {

      },
      link            : linkFunc,
    };
    return directive;

    function linkFunc(scope, el, attr, ctrl) {

      /* --> VARIABLES <-- */

      var templates = {
        mainRules : 'common/templates/documentation/main-rules.html',
        workTypes : 'common/templates/documentation/work-types.html'
      };

      scope.workTypesValue = workTypesValue;


      /* --> METODOS <-- */

      scope.setTemplate = function (option){
        scope.active = option;
        if (option==='workTypes') {
          scope.viewTemplate =  templates.workTypes;
        } else if (option==='mainRules') {
          scope.viewTemplate = templates.mainRules;
        }
      };

      scope.setTemplate('workTypes');
    }
  }

  documentation.$inject =[
    'workTypesValue'
  ];

  //  Module
  win.MainApp.Directives
  .directive('documentation', documentation);


}(window));
