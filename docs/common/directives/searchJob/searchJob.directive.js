(function(win) {
  'use strict';

  //  searchJob directive
  function searchJob($log, storage, workService, translate, 
    notificationService, filter, bgValue) {

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

      scope.searchJobs = function() {

        if (!angular.isDefined(scope.workToSearch.field)) {

          scope.workToSearch.field = "";

        }
        storage.showLoader = true;

        workService.searchWorks(scope.workToSearch)

          .then(function(response) {

            scope.works = getActiveWorks(response.data.records, true);
            scope.endedWorks = getActiveWorks(response.data.records, false);

            scope.tableTitle = translate.instant('global.search.results');

            storage.showLoader = false;

          }).catch(function(exception) {

            notificationService.showError(exception.data.error);

            storage.showLoader = false;

          });
      };

      function getActiveWorks(works, active) {

        return filter(works, function(item) {

          if (active) {
            return item.workState != bgValue('workStates').ended;
          }
          if (!active) {
            return item.workState == bgValue('workStates').ended;
          }
        });
      }
    }

  }

  searchJob.$inject = [
    '$log',
    '$sessionStorage',
    'workUtilService',
    '$translate',
    'notificationService',
    'filterFilter',
    'bgValueFilter'
  ];

  win.MainApp.Directives
    .directive('searchJob', searchJob);

})(window);