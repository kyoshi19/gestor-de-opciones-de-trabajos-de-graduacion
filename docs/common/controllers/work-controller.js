(function(win) {
  'use strict';

  var workController = function($log, data, isEditing, mdDialog, workService, storage) {

    $log.debug('[workModalController] Initializing...');

    /*
    ==============
    VALUES
    ==============
    */

    // VM
    var vm = this;
    vm.data = data;

    vm.accept = function(result) {
      var response = {
        'result': result
      };
      $log.debug("Closing modal");

      mdDialog.hide(response);
    };
    
    vm.cancel = function () {
      mdDialog.cancel();
    }

    vm.delete = function() {
      storage.showLoader = true;
      workService.deleteWork(vm.data.id)
        .then(function(response) {
          mdDialog.hide(response);
        });
    };

    vm.update = function() {
      storage.showLoader = true;

      workService.updatetWork(vm.tempWork)
        .then(function(response) {
          mdDialog.hide(response);
        });
    };

    vm.validateForm = function(element) {
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