(function(win) {
  'use strict';

  //  adviserData directive
  function adviserData($log, isEmpty, storage, workService,
    notificationService, translate, filter, bgValue) {
    var directive = {
      restrict: 'E',
      templateUrl: 'common/directives/adviserData/adviserData.html',
      scope: {
        showLoader: "=",
        goToLogin: "&"
      },
      link: linkFunc
    };
    return directive;

    function linkFunc(scope, el, attr, ctrl) {

      $log.debug('[adviserDataDirective] initializing...');

      /* --> VARIABLES <-- */

      scope.user = storage.user;
      var templates = {
        showWorks: 'common/templates/adviser/show-works.html',
        addWorks: 'common/templates/adviser/add-works.html',
        history: 'common/templates/adviser/history-works.html'
      };
      var adviser = {
        id: scope.user.docNumber
      };

      scope.workToAdd = {};
      scope.workToAdd.profiles = [];
      scope.showWorksTitleTable = translate.instant('global.my.works');

      /* --> METODOS <-- */

      scope.setTemplate = function(option) {

        scope.active = option;

        if (option === 'show') {
          scope.viewTemplate = templates.showWorks;

        } else if (option === 'add') {
          scope.viewTemplate = templates.addWorks;

        } else if (option === 'history') {
          scope.viewTemplate = templates.history;

        }

      };

      scope.searchWorks = function() {

        storage.showLoader = true;

        workService.searchWorksByAdviser(adviser)
          .then(function(response) {

            if (response.data.error) {

              notificationService.showErrorT(response.data.error);
              return;

            }

            scope.works = getActiveWorks(response.data.records, true);
            scope.endedWorks = getActiveWorks(response.data.records, false);

          }).catch(function(exception) {
            $log.error('ERROR ==>', exception);

          }).finally(function() {
            storage.showLoader = false;
          });

      };

      scope.insertWork = function(addWorkForm) {

        scope.workToAdd.userId = adviser.id;
        storage.showLoader = true;

        workService.insertWork(scope.workToAdd)
          .then(function(response) {

            if (response.data.error) {
              notificationService.showError(response.data.error);
              return;
            }

            scope.resetInputs(addWorkForm);
            scope.searchWorks();

            notificationService.showSucces('global.succes.work.added');

          }).catch(function(exception) {
            notificationService.showError(exception.data.error);

          }).finally(function() {
            storage.showLoader = false;
          });
      };

      scope.resetInputs = function(addWorkForm) {

        addWorkForm.$aaFormExtensions.$reset(true);
        scope.workToAdd.students = 1;
        scope.workToAdd.type = null;
        scope.workToAdd.title = '';
        scope.workToAdd.description = '';

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

      function setUp() {

        if (isEmpty(scope.user)) {

          scope.goToLogin();
          return;

        }

        scope.searchWorks();
        scope.setTemplate('show');

      }

      setUp();

    }
  }

  /* --> CONFIGURATION <-- */

  adviserData.$inject = [
    '$log',
    'isEmptyFilter',
    '$sessionStorage',
    'workUtilService',
    'notificationService',
    '$translate',
    'filterFilter',
    'bgValueFilter'
  ];

  /* --> MODULE <-- */

  win.MainApp.Directives
    .directive('adviserData', adviserData);



})(window);