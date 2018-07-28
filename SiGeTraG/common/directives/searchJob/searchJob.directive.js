(function(win) {
  'use strict';

  //  directive directive
  function searchJob($log, selectOption, $http,
    $window, ModalService, NgTableParams) {
    var directive = {
      restrict        : 'E',
      templateUrl     : 'common/directives/searchJob/searchJob.html',
      scope           : {
        showLoader    :"="
      },
      link            : linkFunc
    };
    return directive;

    ////////

    function linkFunc(scope, el, attr, ctrl) {
      /* - */
      scope.showLoader = false;
      scope.workToSearch ={};
      scope.selectOption = selectOption;

      scope.initSelect = function(item){
        if (!item) {
          return selectOption.id;
        }
        return item;
      };
      scope.searchJobs = function(){
        if (!angular.isDefined(scope.workToSearch.field)) {
          scope.workToSearch.field = "";
        }
        scope.showLoader = true;
        $http.post("php/selectWorks.php",scope.workToSearch)
        .then(function (response) {

          scope.worksCount = response.data.records.length;
          scope.worksTable =  worksTableConfig(response.data.records);

          scope.showLoader = false;
        }).catch(function(exception){
          $window.alert(exception);
          scope.showLoader = false;
        });
      };

      var worksTableConfig = function(works){
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
        dataset: works
      };
      return new NgTableParams(initialParams, initialSettings);
      };

      scope.openWorkInfo = function(work){

        $log.debug('-->>PRUEBA MODAL<<--');
        //Fuente --> https://www.npmjs.com/package/angular-modal-service

        // Solo proporciona una url de plantilla, un controlador y llama a 'showModal'.
        ModalService.showModal({
          templateUrl: "common/templates/modal/choseWorkModal.html",
          controller: "choseWorkController",
          controllerAs:"ctrl",
          inputs:{
            data:work
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
            data:work
          }
        }).then(function(modal) {
          modal.element.modal();
          modal.close.then(function(response) {
            $log.debug("Modal is closed ==>", response);
            if (response.result) {
              $log.debug('===> Correo enviado <===');
            }
          });
        });
      };
    }
  }

  searchJob.$inject = [
    '$log',
    'selectOption',
    '$http',
    '$window',
    'ModalService',
    'NgTableParams'
  ];
  //  Module
  win.MainApp.Directives
  .directive('searchJob', searchJob);

})(window);
