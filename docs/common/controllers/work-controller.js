(function (win) {
  'use strict';

  var workController = function ($log, data, isEditing, mdDialog, workService, storage) {

    $log.debug('[workModalController] Initializing...');

    /*
    ==============
    VALUES
    ==============
    */

    // VM
    var vm = this;
    vm.data = data;

    vm.accept = function (result) {
      var response = {
        'result': result
      };
      $log.debug("Closing modal");

      mdDialog.hide(response);
    };

    vm.cancel = function () {
      mdDialog.cancel();
    }

    vm.delete = function () {

      storage.showLoader = true;

      var xhr = workService.deleteWork(vm.data.id);

      xhr.then(function (response) {

        mdDialog.hide(response);

      });

      xhr.catch(function (exception) {

        notificationService.showError(exception.data.error);

        storage.showLoader = false;

      });

    };

    vm.update = function () {

      storage.showLoader = true;

      vm.tempWork.description = angular.copy(vm.tempWork.description.replace(/\n/g, '@'));

      var xhr = workService.updatetWork(vm.tempWork);

      xhr.then(function (response) {

        mdDialog.hide(response);

      });

      xhr.catch(function (exception) {

        notificationService.showError(exception.data.error);

        storage.showLoader = false;

      });

    };

    vm.validateForm = function (element) {

      var isValid = false;

      if (angular.isDefined(element.editWorkForm)) {

        isValid = element.editWorkForm.$valid;

      }

      return isValid;

    };

    function setUp() {

      vm.data.students = parseInt(vm.data.students);

      if (isEditing) {

        vm.tempWork = angular.copy(vm.data);

      }

    }

    setUp();

  };
  workController.$inject = [
    '$log',
    'data',
    'isEditing',
    '$mdDialog',
    'workUtilService',
    '$sessionStorage'
  ];
  win.MainApp.Controllers
    .controller('workController', workController);

}(window));