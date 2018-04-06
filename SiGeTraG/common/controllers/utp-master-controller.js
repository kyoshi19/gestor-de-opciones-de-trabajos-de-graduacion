(function(win){
  'use strict';

  var masterController = function($scope,$log, patterns,
    $http, $state, $stateParams){

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

    vm.select = function(){
      $http.get("php/selectAllUsers.php")
      .then(function (response) {
        vm.users = response.data.records;
        vm.mainStudent = angular.copy(vm.users[1]);
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

    vm.isDefine = function(item){
      return angular.isDefined(item);
    };

    vm.setup = function(){
      vm.mainStudent = $state.params;
    };
  };
  masterController.$inject=[
    '$scope',
    '$log',
    'patternList',
    '$http',
    '$state',
    '$stateParams'
  ];
  win.MainApp.Controllers
  .controller('masterController',masterController);

}(window));
