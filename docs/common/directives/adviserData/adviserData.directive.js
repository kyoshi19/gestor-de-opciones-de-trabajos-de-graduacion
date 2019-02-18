(function(win) {
  'use strict';

  //  adviserData directive
  function adviserData($log, isEmpty, storage, workService,
    $window, notificationService) {
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

      scope.addWork = {};
      scope.addWork.candidates = [];


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

      scope.setTemplate('show');

      scope.searchWorks = function(){
        storage.showLoader = true;
        if (isEmpty(scope.user)) {
          scope.goToLogin();
          return;
        }
        workService.searchWorksByAdviser(adviser)
        .then(function(response){
          if (!response.data.error) {
            scope.works = response.data.records;
          }else{
            $window.alert(response.data.error);
          }

          storage.showLoader = false;
        }).catch(function(exception){
          $window.alert(exception);
          storage.showLoader = false;
        });
      };

      scope.insertWork = function (addWorkForm){
        scope.addWork.userId = adviser.id;
        storage.showLoader = true;

        workService.insertWork(scope.addWork)
        .then(function(response){
          if (!response.data.error) {
            notificationService.showSucces('global.succes.work.added');
            scope.resetInputs(addWorkForm);
            scope.searchWorks();
          }else{
            notificationService.showError(response.data.error);
          }
          storage.showLoader = false;

        }).catch(function(exception){
          $log.error('ERROR ==>', exception);
          storage.showLoader = false;
        });
      };

      scope.resetInputs = function(addWorkForm){
        addWorkForm.$aaFormExtensions.$reset(true);
        scope.addWork.students = 1;
        scope.addWork.type = null;
        scope.addWork.title = '';
        scope.addWork.description = '';

      };

      scope.updateCandidate = function () {
        var cant = scope.addWork.students - scope.addWork.candidates.length();

        if (cant > 0) {
          for (let index = 0; index < cant; index++) {
            scope.addWork.candidates.push({name:"Hola"});
          }
        } else {
          for (let index = 0; index < cant; index++) {
            scope.addWork.candidates.pop();
          }
        }

      };

      scope.searchWorks();
    }
  }

  adviserData.$inject = [
    '$log',
    'isEmptyFilter',
    '$sessionStorage',
    'workUtilService',
    '$window',
    'notificationService'
  ];

  //  Module
  win.MainApp.Directives
  .directive('adviserData', adviserData);



})(window);
