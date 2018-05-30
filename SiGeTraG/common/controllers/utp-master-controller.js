(function(win){
  'use strict';

  var masterController = function($scope, $log, patterns,
    $http, $state, storage, $timeout){

    $log.debug('[utp-master-controller] Initializing...');

    /*
    ==============
    VALUES
    ==============
    */

    // VM
    var vm = this;
    vm.mainStudent = {};
    vm.tempUser = {};
    vm.docPatern = patterns.panamaIdPattern;
    vm.showLoader = false;

    vm.isDefined = angular.isDefined;

    vm.select = function(){
      $http.get("php/selectAllUsers.php")
      .then(function (response) {
        vm.users = response.data.records;
        vm.msg="Consulta Exitosa";
      });
    };

    vm.deleteUser = function(){
      $http.post("php/deleteUser.php",vm.tempUser)
      .then(function (response) {
        vm.msg = response.data.records;
        vm.tempUser = {};
      });
    };

    vm.logggOut = function(){
      vm.showLoader=true;
      storage.user = undefined;
      $timeout(function() {
        vm.showLoader=false;
        $state.transitionTo("login");
      },1000);
    };

    var setup = function(){
      vm.mainStudent = storage.user;
      if (!angular.isDefined(vm.mainStudent)) {
        vm.logggOut();
      }
    };

    setup();

  };
  masterController.$inject=[
    '$scope',
    '$log',
    'patternList',
    '$http',
    '$state',
    '$sessionStorage',
    '$timeout'
  ];
  win.MainApp.Controllers
  .controller('masterController',masterController);

}(window));
