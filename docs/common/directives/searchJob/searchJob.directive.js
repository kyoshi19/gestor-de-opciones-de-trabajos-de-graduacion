(function (win) {
  'use strict';

  //  searchJob directive
  function searchJob($log, storage, workService, translate, notificationService) {

    var directive = {
      restrict: 'E',
      templateUrl: 'common/directives/searchJob/searchJob.html',

      scope: {
        goToLogin: "&"
      },

      link: linkFunc
    };
    return directive;

    function linkFunc(scope, el, attr, ctrl) {

      $log.debug('[searchJobDirective] initializing...');

      /* - */
      storage.showLoader = false;
      scope.user = storage.user;
      scope.workToSearch = {
        workType: "",
        faculty: "",
        center: "",
        field: ""
      };

      scope.searchJobs = function () {

        if (!angular.isDefined(scope.workToSearch.field)) {

          scope.workToSearch.field = "";

        }
        storage.showLoader = true;

        workService.searchWorks(scope.workToSearch)

          .then(function (response) {

            scope.works = response.data.records;

            scope.tableTitle = translate.instant('global.search.results');

            storage.showLoader = false;

          }).catch(function (exception) {

            notificationService.showError(exception.data.error);

            storage.showLoader = false;

          });
      };

    }

  }

  searchJob.$inject = [
    '$log',
    '$sessionStorage',
    'workUtilService',
    '$translate',
    'notificationService'
  ];

  win.MainApp.Directives
    .directive('searchJob', searchJob);

})(window);