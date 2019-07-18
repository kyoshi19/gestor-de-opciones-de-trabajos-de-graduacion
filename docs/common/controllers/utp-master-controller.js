(function(win) {
  'use strict';

  var masterController = function($log, patterns,
    $http, $state, storage, $timeout, catalog, notificationService,
    isEmpty, userService) {

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

    vm.initCatalogs = function() {
      catalog();
    };

    vm.showLogOffButton = function() {
      return !isEmpty(storage.user);
    };

    vm.updateNavBar = function() {
      if ($state.$current.name == "main-documentation") {
        vm.navBarItem = $state.$current.name;
        return;
      }
      vm.navBarItem = 'login';

    }

    vm.logggOut = function() {
      storage.user = undefined;
      vm.goToLogIn();
    };

    vm.goToLogIn = function() {
      storage.showLoader = true;
      $timeout(function() {
        $state.transitionTo("login");
        storage.showLoader = false;
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
      vm.getInitialState();
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
    'notificationService',
    'isEmptyFilter',
    'userService'
  ];
  win.MainApp.Controllers
    .controller('masterController', masterController);

}(window));