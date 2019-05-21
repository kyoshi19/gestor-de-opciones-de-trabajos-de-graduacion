(function(win) {
  'use strict';

  //workInfo directive
  function workInfo($log, candidateModel, bgValue, filter, mdDialog) {

    var directive = {
      restrict: 'E',
      templateUrl: 'common/directives/workInfo/workInfo.html',
      scope: {
        workInfo: '=',
        toUpdate: '=?',
        editable: '='
      },
      link: linkFunc
    };
    return directive;

    function linkFunc(scope, el, attr, ctrl) {

      $log.debug();

      function getTypeInfo() {

        if (!scope.workInfo.type) {
          return;
        }

        return filter(bgValue('workTypesValue'), function(item) {
          return item.id == scope.workInfo.type;
        })[0];

      }

      scope.openTypeInfo = function(event) {

        alert = mdDialog.show({
          templateUrl: "common/templates/modal/infoModal.html",
          controller: "infoModalController",
          controllerAs: "ctrl",
          targetEvent: event,
          hasBackdrop: false,
          multiple: true,
          locals: {
            data: {
              title: getTypeInfo().title,
              content: getTypeInfo().name
            }
          }
        });
      }

      scope.updateCandidate = function() {
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
    '$log',
    'candidateModel',
    'bgValueFilter',
    'filterFilter',
    '$mdDialog'
  ];

  // module
  win.MainApp.Directives
    .directive('workInfo', workInfo);


}(window))