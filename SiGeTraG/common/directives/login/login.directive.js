(function(win) {
  'use strict';

  //  directive directive
  function utpLogin($log, userRules, $http, $state, storage, isEmpty ) {
    var directive = {
      restrict        : 'E',
      templateUrl     : 'common/directives/login/login.html',
      scope           : {
        mainStudent   :"="
      },
      link            : linkFunc
    };
    return directive;

    function linkFunc(scope, el, attr, ctrl) {
      /* - */
      scope.docToSearch = '';
      scope.passToSearch = '';
      scope.userRules = userRules;
      var tempUser = {};

      scope.validateUser = function(){
        if (''===scope.docToSearch ||
        ''===scope.passToSearch) {
          scope.msg="Data incompleta";
          scope.alert="alert-warning";
          return;
        }
        $http.post("php/selectUser.php",scope.docToSearch.toString())
        .then(function (response) {
          tempUser = response.data.records[0];
          if (angular.isDefined(tempUser) &&
          tempUser.pass===scope.passToSearch) {
            scope.goToMain();
          }else {
            scope.msg = "no encontrado";
            scope.alert="alert-danger";
          }
        });
      };
      scope.goToMain = function(logged){
        if (logged) {
          $state.transitionTo("main");
        } else {
          storage.user = tempUser;
          scope.mainStudent = tempUser;
          $state.transitionTo("main");
        }
      };

      var setup = function(){
        if (!isEmpty(storage.user)) {
          scope.goToMain(true);
        }
      };
      setup();
    }
  }

  //  Module
  utpLogin.$inject = [
    '$log',
    'userRules',
    '$http',
    '$state',
    '$sessionStorage',
    'isEmptyFilter'
  ];

  win.MainApp.Directives
  .directive('utpLogin', utpLogin);

})(window);
