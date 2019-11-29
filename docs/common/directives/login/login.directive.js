(function(win) {
  'use strict';

  //  utpLogin directive
  function utpLogin($log, userRules, bgValueFilter) {
    var directive = {
      restrict: 'E',
      templateUrl: 'common/directives/login/login.html',
      scope: {
        validateUser: "="
      },
      link: linkFunc
    };
    return directive;

    function linkFunc(scope) {

      $log.debug('[utpLoginDirective] initializing...');

      /* --> VALUES <-- */

      scope.userToSearch = {
        docToSearch: '',
        passToSearch: ''
      };

      scope.userRules = userRules;

      var hidePassword = true;

      /* --> METHODS <-- */

      scope.showPassword = function() {
        hidePassword = !hidePassword;
      };

      scope.passwordConfig = function() {

        if (hidePassword) {
          return {
            type: "password",
            icon: "fas fa-eye-slash"
          };
        }

        return {
          type: "text",
          icon: "fas fa-eye"
        };
      };

      scope.findUser = function(user) {
        scope.validateUser(user);
      };

      function setup() {
        scope.validateUser();
      }
      setup();

    }
  }

  /* --> CONFIGURATION <-- */

  utpLogin.$inject = [
    '$log',
    'userRules',
    'bgValueFilter'
  ];

  /* --> MODULE <-- */

  win.MainApp.Directives
    .directive('utpLogin', utpLogin);

})(window);