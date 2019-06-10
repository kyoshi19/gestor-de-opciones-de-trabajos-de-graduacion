(function(win) {
  "use strict";

  var userService = function($log, $http, $q) {

    $log.debug("[ModalService] Initializing...");

    return{
      findUser:findUser
    }

    function findUser(data){

      var deferer = $q.defer();

      $http.post("php/selectUser.php", data)
        .then(function(response) {
  
          deferer.resolve(response);
        });
      return deferer.promise;

    }


  }
  userService.$inject = [
    '$log',
    '$http',
    '$q'
  ];

  win.MainApp.Services.service('userService', userService);

}(window));