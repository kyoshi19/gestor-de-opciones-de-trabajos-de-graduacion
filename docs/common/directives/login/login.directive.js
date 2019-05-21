(function(win) {
  'use strict';

  //  utpLogin directive
  function utpLogin($log, userRules,$http, $state, storage, isEmpty,
    $timeout, notificationService, bgValueFilter) {
    var directive = {
      restrict: 'E',
      templateUrl: 'common/directives/login/login.html',
      scope: {

      },
      link: linkFunc
    };
    return directive;

    function linkFunc(scope, el, attr, ctrl) {

      $log.debug('[utpLoginDirective] initializing...');

      /* --> VALUES <-- */

      scope.userToSearch = {
        docToSearch : '',
        passToSearch : ''
      };

      scope.userRules = userRules;
      var tempUser = {};

      scope.identificationType = bgValueFilter('identificationTypes').identification;

      var hidePassword = true;

      /* --> METHODS <-- */

      scope.showPassword = function(){
        hidePassword = !hidePassword;
      }

      scope.passwordConfig = function(){

        if (hidePassword) {
          return{type:"password",icon:"fas fa-eye"};
        }

        return{type:"text",icon:"fas fa-eye-slash"};
      }

      scope.validateUser = function() {

        storage.showLoader = true;

        $http.post("php/selectUser.php", scope.userToSearch.docToSearch.toUpperCase())
          .then(function(response) {

            tempUser = response.data.records[0];

            if (angular.isDefined(tempUser) && tempUser.pass === scope.userToSearch.passToSearch) {

              storage.user = response.data.records[0];
              scope.goToMain();

            } else {

              storage.showLoader = false;
              notificationService.showError("global.error.no.user.find");

            }
          });
      };

      scope.goToMain = function() {

        $timeout(function() {

          storage.showLoader = false;

          if (storage.user.type === "E") {
            $state.transitionTo("main-student");

          } else if (storage.user.type === "P") {
            $state.transitionTo("main-advisers");

          }

        }, 700);

      };

      var setup = function() {

        if (!isEmpty(storage.user)) {

          storage.showLoader = true;
          scope.goToMain();

        }

      };

      setup();

    }
  }

  /* --> CONFIGURATION <-- */

  utpLogin.$inject = [
    '$log',
    'userRules',
    '$http',
    '$state',
    '$sessionStorage',
    'isEmptyFilter',
    '$timeout',
    'notificationService',
    'bgValueFilter'
  ];

  /* --> MODULE <-- */

  win.MainApp.Directives
    .directive('utpLogin', utpLogin);

})(window);