(function(win) {
  'use strict';

  //  adviserData directive
  function adviserData($log, isEmpty, storage, workService,
    $window) {
    var directive = {
      restrict        : 'E',
      templateUrl     : 'common/directives/adviserData/adviserData.html',
      scope           : {
        showLoader    : "=",
        goToLogin     : "&"
      },
      link            : linkFunc
    };
    return directive;

    ////////

    function linkFunc(scope, el, attr, ctrl) {

      /* --> VARIABLES <-- */

      scope.user = storage.user;
      var templates = {
        showWorks : 'common/templates/adviser/show-works.html',
        addWorks : 'common/templates/adviser/add-works.html',
        editWorks : 'common/templates/adviser/edit-works.html'
      };
      var adviser ={
        id: scope.user.docNumber
      };


      /* --> METODOS <-- */

      scope.setTemplate = function (option){
        scope.active = option;
        if (option==='show') {
          scope.viewTemplate =  templates.showWorks;
        } else if (option==='add') {
          scope.viewTemplate = templates.addWorks;
        } else if (option==='edit') {
          scope.viewTemplate = templates.editWorks;
        }
      };

      function init(){
        scope.showLoader = true;
        if (isEmpty(scope.user)) {
          scope.goToLogin();
          return;
        }
        workService.searchWorksByAdviser(adviser)
        .then(function(response){

          scope.works = response.data.records;

          scope.showLoader = false;
        }).catch(function(exception){
          $window.alert(exception);
          scope.showLoader = false;
        });



        scope.setTemplate('show');
      }
      init();
    }
  }

  adviserData.$inject = [
    '$log',
    'isEmptyFilter',
    '$sessionStorage',
    'workUtilService',
    '$window'
  ];

  //  Module
  win.MainApp.Directives
  .directive('adviserData', adviserData);



})(window);
