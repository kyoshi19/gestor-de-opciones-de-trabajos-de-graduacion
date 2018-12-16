(function(win){
  'use strict';

  var workController = function($log, data, isEditing, close, workService, storage){

    $log.debug('[workModal] Initializing...');

    /*
    ==============
    VALUES
    ==============
    */

    // VM
    var vm = this;
    vm.data = data;

    vm.close = function(result) {
      var response = {
        'result':result
      };
      $log.debug("Closing modal");

      close(response, 300); // close, but give 300ms for bootstrap to animate
    };

    vm.delete = function(){
      storage.showLoader = true;
      workService.deleteWork(vm.data.id)
      .then(function(response){
        storage.showLoader = false;
        close(response, 300);
      });
    };

    vm.update = function(){
      storage.showLoader = true;
      var updateWrapper = {
        "workTitle": vm.tempWork.title,
        "workType": vm.tempWork.type,
        "workStudens": vm.tempWork.students,
        "workCode" : vm.tempWork.id
      };
      workService.updatetWork(updateWrapper)
      .then(function(response){
        storage.showLoader = false;
        close(response, 300);
      });
    };

    vm.validateForm = function(element){
      var isValid = false;
      if (angular.isDefined(element.editWorkForm)) {
        isValid = element.editWorkForm.$valid;
      }
      return isValid;
    };

    function setUp(){
      vm.data.students = parseInt(vm.data.students);
      if (isEditing){
        vm.tempWork = angular.copy(vm.data);
      }
    }

    setUp();

  };
  workController.$inject=[
    '$log',
    'data',
    'isEditing',
    'close',
    'workUtilService',
    '$sessionStorage'
  ];
  win.MainApp.Controllers
  .controller('workController',workController);

}(window));
