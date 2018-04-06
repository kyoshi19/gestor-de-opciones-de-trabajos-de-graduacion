(function(win) {
  'use strict';

  //  directive directive
  function utpLogin($log, patternList, $http, $state ) {
    var directive = {
      restrict        : 'E',
      templateUrl     : 'common/directives/login/login.html',
      scope           : {
        mainStudent: '='
      },
      link            : linkFunc
    };
    return directive;

    function linkFunc(scope, el, attr, ctrl) {
      /* - */
      scope.docToSearch = '';
      scope.passToSearch = '';
      var tempUser = {};

      scope.validateUser = function(){
        if (''===scope.docToSearch ||
        ''===scope.passToSearch) {
          scope.msg="Data incompleta";
          scope.alert="alert-warning";
          return;
        }
        $http.post("php/selectUser.php",scope.docToSearch)
        .then(function (response) {
          tempUser = response.data.records[0];
          if (angular.isDefined(tempUser) &&
          tempUser.pass===scope.passToSearch) {
            scope.msg = "encontrado";
            scope.alert="alert-success";
            scope.goToMain(tempUser);
          }else {
            scope.msg = "no encontrado";
            scope.alert="alert-danger";
          }
        });
      };
      scope.goToMain = function(){
        $state.transitionTo("main",tempUser);
      };
    }
  }

  //  Module
  utpLogin.$inject = [
    '$log',
    'patternList',
    '$http',
    '$state'
  ];

  win.MainApp.Directives
  .directive('utpLogin', utpLogin);

})(window);
