(function (win) {
  'use strict';

  var masterController = function ($log, patterns, $state, storage, $timeout, catalog,
    notificationService, isEmpty, userService) {

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

    vm.initCatalogs = function () {
      catalog();
    };

    vm.showLogOffButton = function () {
      return !isEmpty(storage.user);
    };

    vm.updateNavBar = function () {

      if ($state.$current.name == "main-documentation") {

        vm.navBarItem = $state.$current.name;
        return;

      }

      vm.navBarItem = 'login';

    };

    vm.logggOut = function () {

      storage.user = undefined;
      vm.goToLogIn();

    };

    vm.goToLogIn = function () {

      storage.showLoader = true;

      $timeout(function () {

        $state.transitionTo("login");
        storage.showLoader = false;

      }, 700);

    };

    vm.validateUser = function (logginUser) {

      if (storage.user) {

        vm.goToMain();
        return;

      }

      if (!logginUser) {
        return;
      }

      storage.showLoader = true;

      userService.findUser(logginUser).then(function (response) {

        if (response.data.records.length > 0) {

          storage.user = response.data.records[0];
          vm.goToMain();

        } else {

          storage.showLoader = false;
          notificationService.showError("global.error.no.user.find");

        }

      });

    };

    vm.goToMain = function () {

      storage.showLoader = true;

      $timeout(function () {

        if (storage.user.type === "E") {
          $state.transitionTo("main-student");

        } else if (storage.user.type === "P") {
          $state.transitionTo("main-advisers");

        }

        storage.showLoader = false;

      }, 700);

    };

    vm.getInitialState = function () {

      if (!isEmpty(storage.user)) {

        vm.goToMain();

      } else {
        vm.goToLogIn();
      }

    };

    var setup = function () {
      vm.initCatalogs();
      vm.getInitialState();
    };

    setup();

  };
  masterController.$inject = [
    '$log',
    'patternList',
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