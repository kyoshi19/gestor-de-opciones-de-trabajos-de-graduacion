(function(win) {
  'use strict';

  //  addUser directive
  function addUser(userRules, $http, storage, $window) {
    var directive = {
      restrict        : 'EA',
      templateUrl     : 'common/directives/addUser/addUser.html',
      scope           : {
        showLoader  : '='
      },
      link            : linkFunc
    };
    return directive;

    ////////

    function linkFunc(scope, el, attr, ctrl) {
      /* - */
      scope.tempUser = {};
      scope.userRules = userRules;
      scope.mainStudent = storage.user;

      scope.insertUser = function(){
        scope.showLoader = true;
        $http.post("php/insertUser.php",scope.tempUser)
        .then(function (response) {
          if (!response.data.error) {
            scope.msg = response.data.records;
          }else{
            $window.alert(response.data.error);
          }
          scope.showLoader = false;
          // scope.tempUser = {};
        }).catch(function(exception){
          $window.alert(exception);
          scope.showLoader = false;
        });
      };
    }
  }

  addUser.$inject = [
    'userRules',
    '$http',
    '$sessionStorage',
    '$window'
  ];
  //  Module
  win.MainApp
  .Directives
  .directive('addUser', addUser);

})(window);
