(function(win){
  'use strict';

  var workController = function($log, data, close, workService, storage){

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

    vm.delete =  function(){
      storage.showLoader = true;
      workService.deleteWork(vm.data.id)
      .then(function(response){
        storage.showLoader = false;
        close(response, 300);
      });
    };


  };
  workController.$inject=[
    '$log',
    'data',
    'close',
    'workUtilService',
    '$sessionStorage'
  ];
  win.MainApp.Controllers
  .controller('workController',workController);

}(window));
