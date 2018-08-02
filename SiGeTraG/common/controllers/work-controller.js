(function(win){
  'use strict';

  var workController = function($log, data, close){

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
      close(response, 400); // close, but give 500ms for bootstrap to animate
    };

    vm.delete =  function(work){

      close(response, 400);
    };


  };
  workController.$inject=[
    '$log',
    'data',
    'close'
  ];
  win.MainApp.Controllers
  .controller('workController',workController);

}(window));
