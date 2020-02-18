(function (win) {
  'use strict';

  //  jobsList directive
  function jobsList($log, isEmpty, storage, ModalService, notificationService, mdDialog) {
    var directive = {
      restrict: 'E',
      templateUrl: 'common/directives/jobsList/jobsList.html',
      scope: {
        works: "=",
        worksCount: "=",
        tableTitle: "=",
        userType: "=",
        showOptions: "=",
        searchWorks: "&"
      },
      link: linkFunc
    };
    return directive;


    function linkFunc(scope) {

      $log.debug('[jobListDirective] initializing...');

      /* --> VARIABLES <-- */
      scope.selected = [];
      scope.user = storage.user;

      /* --> METODOS <-- */

      scope.$watch('works', function (newValue, oldValue) {
        resetTable();
      });

      function worksTableConfig() {
        $log.debug('worksTableConfig Method...')
        var initialSettings = {
          limit: 5, // filas por página
          page: 1, //Página actual
          totalPages: scope.works.length, //Total de páginas
          dataset: scope.works //Información a mostrar
        };
        return initialSettings;
      }


      scope.openWorkInfo = function (work, event) {
        mdDialog.show({
          templateUrl: "common/templates/modal/choseWorkModal.html",
          controller: "workController",
          controllerAs: "ctrl",
          clickOutsideToClose: true,
          escapeToClose: true,
          targetEvent: event,
          locals: {
            data: work,
            isEditing: false
          }

        }).then(function (response) {
          openEmailFormModal(work);
        }).catch(function (response) {
          $log.debug("Modal is close by cancel");
        });
      };

      var openEmailFormModal = function (work) {

        mdDialog.show({
          templateUrl: "common/templates/modal/sendEmailModal.html",
          controller: "sendEmailController",
          controllerAs: "ctrl",
          clickOutsideToClose: true,
          escapeToClose: true,
          targetEvent: event,
          locals: {
            data: work,
            isEditing: false
          }

        }).then(function (response) {
          storage.showLoader = false;
          if (response.result) {
            if (isEmpty(response.data)) {
              notificationService.showError('global.error.internet.conection');
              return;
            }
            notificationService.showSucces('global.succes.mail.success');
          }
        }).catch(function (err) {
          $log.debug('ERROR ==> ', err);
        });
      };

      scope.openDeleteWork = function (work, event) {

        mdDialog.show({
          templateUrl: "common/templates/modal/deleteWorkModal.html",
          controller: "workController",
          controllerAs: "ctrl",
          targetEvent: event,
          locals: {
            data: work,
            isEditing: false

          }
        }).then(function (response) {
          $log.debug("Modal is closed");

          if (response.data.error) {
            notificationService.showErrorT(response.data.error);
          } else {
            if (response.data.records[0] > 0) {
              notificationService.showSucces('global.succes.work.deleted');
              scope.searchWorks();
            } else {
              notificationService.showError('global.error.work.deleted');
            }
          }
        }).catch(function (err) {
          $log.debug("Modal is closed");
        });

      };

      scope.openUpdateWorkModal = function (work) {
        mdDialog.show({
          templateUrl: "common/templates/modal/updateWorkModal.html",
          controller: "workController",
          controllerAs: "ctrl",
          clickOutsideToClose: true,
          escapeToClose: true,
          locals: {
            data: work,
            isEditing: true
          }
        }).then(function (response) {
          $log.debug("Modal is close ==>", response);

          if (response.data.error) {
            notificationService.showError('global.error.work.updated');
            notificationService.showError(response.data.error);
            return;
          }

          if (response.data.records[0] > 0) {
            notificationService.showSucces('global.succes.work.added');
            scope.searchWorks();

          } else {
            notificationService.showError('global.error.work.updated');
          }

        }).catch(function (err) {
          $log.debug("Modal is close by cancel");
        }).finally(function () {
          storage.showLoader = false;
        });
      };

      function resetTable() {
        $log.debug("ResetTabel Method...");
        if (scope.works) {
          scope.dataTable = worksTableConfig();
        }
      }
    }
  }

  jobsList.$inject = [
    '$log',
    'isEmptyFilter',
    '$sessionStorage',
    'ModalService',
    'notificationService',
    '$mdDialog'
  ];

  //  Module
  win.MainApp.Directives
    .directive('jobsList', jobsList);



})(window);