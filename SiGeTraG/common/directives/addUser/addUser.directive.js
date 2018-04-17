(function(win) {
  'use strict';

  //  addUser directive
  function addUser(userRules, $http, storage) {
    var directive = {
      restrict        : 'EA',
      templateUrl     : 'common/directives/addUser/addUser.html',
      scope           : {
        showLoaderFn  :"="
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
        scope.showLoaderFn(true);
        $http.post("php/insertUser.php",scope.tempUser)
        .then(function (response) {
          scope.msg = response.data.records;
          scope.showLoaderFn(false);
          // scope.tempUser = {};
        });
      };
    }
  }

  addUser.$inject = [
    'userRules',
    '$http',
    '$sessionStorage'
  ];
  //  Module
  win.MainApp
  .Directives
  .directive('addUser', addUser);

})(window);
