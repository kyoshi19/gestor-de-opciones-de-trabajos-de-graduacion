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
        count: 5 // rows count per page
      };
      var initialSettings = {
        // rows count per page buttons (right set of buttons in demo)
        counts: null,
        // determines the pager buttons (left set of buttons in demo)
        paginationMaxBlocks: 7, //maximum of pager blocks
        paginationMinBlocks: 1, //minimum of pager blocks
        dataset: works
      };
      return new NgTableParams(initialParams, initialSettings);
      };

      scope.openWorkInfo = function(work){

        $log.debug('-->>PRUEBA MODAL<<--');
        //Fuente --> https://www.npmjs.com/package/angular-modal-service

        // Just provide a template url, a controller and call 'showModal'.
        ModalService.showModal({
          templateUrl: "common/templates/modal/choseWorkModal.html",
          controller: "choseWorkController",
          controllerAs:"ctrl",
          inputs:{
            data:work
          }
        }).then(function(modal) {
          // The modal object has the element built, if this is a bootstrap modal
          // you can call 'modal' to show it, if it's a custom modal just show or hide
          // it as you need to.
          modal.element.modal();
          modal.close.then(function(result) {
            $log.debug("Modal is closed");
            scope.message = result ? "You said Yes" : "You said No";
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
