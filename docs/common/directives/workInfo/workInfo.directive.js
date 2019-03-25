(function(win) {
  'use strict';

  //workInfo directive
  function workInfo($log, candidateModel, bgValue, ModalService, filter) {

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

      scope.showTypeInfo = function() {

        if (!scope.workInfo.type) {
          return;
        }

        var workType = filter(bgValue('workTypesValue'), function(item) {
          return item.id == scope.workInfo.type;
        })[0];

        let data = {
          title: workType.title,
          content: workType.name
        };

        ModalService.showModal({
          controller: "infoModalController",
          templateUrl: "common/templates/modal/infoModal.html",
          controllerAs: "ctrl",
          inputs: {
            data: data,
          }
        }).then(function(modal) {
          modal.element.modal();
          modal.close.then(function(response) {
            $log.debug("Modal is closed ==>", response);
          });
        })

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
    'ModalService',
    'filterFilter'
  ];

  // module
  win.MainApp.Directives
    .directive('workInfo', workInfo);


}(window))