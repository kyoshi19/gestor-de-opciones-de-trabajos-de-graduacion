(function(win) {
  'use strict';

  //  searchJob directive
  function searchJob($log, storage, selectOption, $http,
    $window, isEmpty, workService, translate) {
      var directive = {
        restrict        : 'E',
        templateUrl     : 'common/directives/searchJob/searchJob.html',
        scope           : {
          goToLogin     : "&"
        },
        link            : linkFunc
      };
      return directive;

      ////////

      function linkFunc(scope, el, attr, ctrl) {

        $log.debug('[searchJobDirective] initializing...');

        /* - */
        storage.showLoader = false;
        scope.user = storage.user;
        scope.workToSearch ={
          workType: "",
          faculty: "",
          center: "",
          field: ""
        };
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
          storage.showLoader = true;
          workService.searchWorks(scope.workToSearch)
          .then(function (response) {

            if (!response.data.error) {
              scope.works = response.data.records;
              scope.tableTitle = translate.instant('global.search.results');
            }else{
              $window.alert(response.data.error);
            }
            storage.showLoader = false;
          }).catch(function(exception){
            $window.alert(exception);
            storage.showLoader = false;
          });
        };

        function init(){
          if (isEmpty(scope.user)) {
            scope.goToLogin();
          }
        }
        init();
      }
    }

    searchJob.$inject = [
      '$log',
      '$sessionStorage',
      'selectOption',
      '$http',
      '$window',
      'isEmptyFilter',
      'workUtilService',
      '$translate'
    ];
    //  Module
    win.MainApp.Directives
    .directive('searchJob', searchJob);

  })(window);
