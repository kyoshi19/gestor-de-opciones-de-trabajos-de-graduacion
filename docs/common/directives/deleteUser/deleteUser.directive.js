(function(win) {
  'use strict';

  //  deleteUser directive
  function deleteUser(userRules, $http, $q) {
    var deleteUser = {
      restrict        : 'E',
      templateUrl     : 'common/directives/deleteUser/deleteUser.html',
      scope           : {},
      link            : linkFunc
    };
    return deleteUser;

    function linkFunc(scope, el, attr, ctrl) {
      //  VARIABLES
      scope.userRules = userRules;
      scope.docToDelete='';

      //  FUNCIONES
      scope.deleteUser = function(){
        if (''===scope.docToDelete) {
          scope.msg="Data incompleta";
          scope.alert="alert-warning";
          return;
        }

        verifyUser(scope.docToDelete)
        .then(function(exist){
          if (exist) {
            $http.post("php/deleteUser.php",scope.docToDelete).
            then(function(response){
              scope.msg = response.data.records;
              scope.docToDelete = '';
              scope.msg = "Usuario eliinado Exitosamente";
              scope.alert="alert-success";
            });
          } else {
            scope.msg = "Cédula no existente en el sistema";
            scope.alert="alert-danger";
          }
        });
      };

      function verifyUser(docToDelete){
        var deferred = $q.defer();

        $http.post("php/selectUser.php",docToDelete.toString())
        .then(function (response) {
          var tempUser = response.data.records[0];
          deferred.resolve(angular.isDefined(tempUser));
        });
        return deferred.promise;
      }

    }
  }
  //  Module
  deleteUser.$inject = [
    'userRules',
    '$http',
    '$q'
  ];
  win.MainApp.Directives
  .directive('deleteUser', deleteUser);
}(window));
