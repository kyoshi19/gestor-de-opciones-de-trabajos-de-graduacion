(function(win) {
  'use strict';

  var masterController = function($log, patterns,
    $http, $state, storage, $timeout, catalog,
    isEmpty) {

    $log.debug('[utpMasterController] Initializing...');

    /*
    ==============
    VALUES
    ==============
    */

    // VM
    var vm = this;
    vm.storage = storage;
    vm.storage.messages = [];
    vm.docPatern = patterns.panamaIdPattern;
    vm.fullYear = new Date().getFullYear();
    vm.backImage = 'src/img/starwars.jpg';
    vm.myBackObj = {
      'background-image': 'url(' + vm.backImage + ')',
      'background-size': 'cover'
    };

    vm.showExamples = true;

    vm.isDefined = angular.isDefined;

    vm.select = function() {
      $http.get("php/selectAllUsers.php")
        .then(function(response) {
          vm.users = response.data.records;
          vm.msg = "Consulta Exitosa";
        });
    };

    vm.initCatalogs = function() {
      catalog();
    };

    vm.showLogOff = function() {
      return !isEmpty(storage.user);
    };

    vm.logggOut = function() {
      storage.user = undefined;
      vm.goToLogIn();
    };

    vm.goToLogIn = function() {
      storage.showLoader = true;
      $timeout(function() {
        storage.showLoader = false;
        $state.transitionTo("login");
      }, 700);
    };

    vm.updateNavBar = function(){
      if ($state.$current.name=="main-documentation") {
        vm.navBarItem = $state.$current.name;
        return;
      }
      vm.navBarItem = 'login';
      
    }
    var setup = function() {
      vm.initCatalogs();
    };

    setup();



  };
  masterController.$inject = [
    '$log',
    'patternList',
    '$http',
    '$state',
    '$sessionStorage',
    '$timeout',
    'catalogFilter',
    'isEmptyFilter'
  ];
  win.MainApp.Controllers
    .controller('masterController', masterController);

}(window));