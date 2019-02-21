(function(win) {
  'use strict';

  //workInfo directive
  function workInfo(candidateModel) {
    
    var directive = {
      restrict      :'E',
      templateUrl   :'common/directives/workInfo/workInfo.html',
      scope         :{
        workInfo    : '=',
        toUpdate    : '=?'
      },
      link          : linkFunc
    };
    return directive;

    function linkFunc(scope, el, attr, ctrl) {

      scope.updateCandidate = function () {
        var cant = scope.workInfo.students - scope.workInfo.candidates.length;

        if (cant > 0) {
          for (let index = 0; index < cant; index++) {
            scope.workInfo.candidates.push(angular.copy(candidateModel));
          }
        } else {
          for (let index = 0; index > cant; index--) {
            scope.workInfo.candidates.pop();
          }
        }

        return scope.workInfo.candidates;

      };

      function setup() {
        if (!scope.toUpdate) {
          scope.workInfo.candidates = [];
          scope.workInfo.students = 1;
          scope.workInfo.type = null;
          scope.workInfo.title = '';
          scope.workInfo.description = '';
        }
      }

      setup();
      
    }
  }

  workInfo.$inject = [
    'candidateModel'
  ];

  // module
  win.MainApp.Directives
  .directive('workInfo', workInfo);


}(window))