(function(win) {
  'use strict';

  //  directive directive
  function searchJob($log, selectOption, $http, $window, ModalService) {
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

          scope.works = response.data.records;

          scope.showLoader = false;
        }).catch(function(exception){
          $window.alert(exception);
          scope.showLoader = false;
        });
      };

      scope.openWorkInfo = function(){

        $log.debug('-->>PRUEBA MODAL<<--');
        //Fuente --> https://www.npmjs.com/package/angular-modal-service

        // Just provide a template url, a controller and call 'showModal'.
        ModalService.showModal({
          templateUrl: "common/templates/modal/choseWorkModal.html",
          controller: "choseWorkController"
        }).then(function(modal) {
          // The modal object has the element built, if this is a bootstrap modal
          // you can call 'modal' to show it, if it's a custom modal just show or hide
          // it as you need to.
          modal.element.modal();
          modal.close.then(function(result) {
            $scope.message = result ? "You said Yes" : "You said No";
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
    'ModalService'
  ];
  //  Module
  win.MainApp.Directives
  .directive('searchJob', searchJob);

})(window);
