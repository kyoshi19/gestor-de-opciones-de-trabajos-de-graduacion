(function(win) {
  'use strict';

  //  jobsList directive
  function jobsList($log, isEmpty, storage, ModalService, NgTableParams, $http,
  translate, notificationService) {
    var directive = {
      restrict        : 'E',
      templateUrl     : 'common/directives/jobsList/jobsList.html',
      scope           : {
        works         : "=",
        worksCount    : "=",
        tableTitle    : "=",
        userType      : "=",
        showOptions   : "=",
        searchWorks   : "&"
      },
      link            : linkFunc
    };
    return directive;

    ////////

    function linkFunc(scope, el, attr, ctrl) {

      /* --> VARIABLES <-- */

      scope.user = storage.user;

      /* --> METODOS <-- */

      scope.$watch('works', function(newValue, oldValue){
        resetTable();
      });

      function worksTableConfig (){
        var initialParams = {
          count: 5 // filas por página
        };
        var initialSettings = {
          // número de filas por botones de página
          counts: null,
          // determina los botones del paginador
          paginationMaxBlocks: 7, //máximo de bloques de página
          paginationMinBlocks: 1, //mínimo de bloques de página
          //Información a mostrar
          dataset: scope.works
        };
        return new NgTableParams(initialParams, initialSettings);
      }

      scope.openWorkInfo = function(work){

        $log.debug('-->>PRUEBA MODAL<<--');
        //Fuente --> https://www.npmjs.com/package/angular-modal-service

        // Solo proporciona una url de plantilla, un controlador y llama a 'showModal'.
        ModalService.showModal({
          templateUrl: "common/templates/modal/choseWorkModal.html",
          controller: "workController",
          controllerAs:"ctrl",
          inputs:{
            data:work,
            isEditing: false
          }
        }).then(function(modal) {
          // El objeto modal tiene el elemento creado, si esto es un modal de bootstrap
          // puedes llamar a 'modal' para mostrarlo, si se trata de un modal personalizado
          // solo muestra (show) u oculta (hide) como se necesites.
          modal.element.modal();
          modal.close.then(function(response) {
            $log.debug("Modal is closed ==>", response);
            if (response.result) {
              openEmailFormModal(work);
            }
          });
        });
      };

      var openEmailFormModal = function(work){

        ModalService.showModal({
          templateUrl: "common/templates/modal/sendEmailModal.html",
          controller: "sendEmailController",
          controllerAs:"ctrl",
          inputs:{
            data:work,
            isEditing: false
          }
        }).then(function(modal) {
          modal.element.modal();
          modal.close.then(function(response) {
            storage.showLoader = false;
            if (isEmpty(response.data)){
              notificationService.showError('global.error.internet.conection');
              return;
            }
            notificationService.showSucces('global.notification.mail.success');
          });
          modal.close.catch(function(err){
            $log.debug('ERROR ==> ',err);
          });
        });
      };

      scope.openDeleteWork = function(work){

        ModalService.showModal({
          templateUrl: "common/templates/modal/deleteWorkModal.html",
          controller: "workController",
          controllerAs:"ctrl",
          inputs:{
            data:work,
            isEditing: false

          }
        }).then(function(modal) {

          modal.element.modal();
          modal.close.then(function(response) {
            $log.debug("Modal is close, result ==>", response.result);

            if (response.data.records[0] > 0) {
              $log.debug('--> TRABAJO ELIMINADO <--');
              scope.searchWorks();

            } else {
              $log.debug('--> TRABAJO NO ELIMINADO <--');
            }

          });
        });

      };

      scope.openUpdateWorkModal = function(work){
        ModalService.showModal({
          templateUrl: "common/templates/modal/updateWorkModal.html",
          controller: "workController",
          controllerAs:"ctrl",
          inputs:{
            data:work,
            isEditing:true
          }
        }).then(function(modal) {

          modal.element.modal();
          modal.close.then(function(response) {
            $log.debug("Modal is close ==>", response);

            if (response.data.records[0] > 0) {
              $log.debug('--> TRABAJO ACTUALIZADO <--');
              scope.searchWorks();

            } else {
              $log.debug('--> TRABAJO NO ACTUALIZADO <--');
            }

          });
        });
      };

      function resetTable(){
        scope.dataTable = worksTableConfig();
      }
    }
  }

  jobsList.$inject = [
    '$log',
    'isEmptyFilter',
    '$sessionStorage',
    'ModalService',
    'NgTableParams',
    '$http',
    '$translate',
    'notificationService'
  ];

  //  Module
  win.MainApp.Directives
  .directive('jobsList', jobsList);



})(window);
