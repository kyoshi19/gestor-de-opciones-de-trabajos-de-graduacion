(function(win){
  'use strict';

  var choseWorkController = function($log, data, close){

    $log.debug('[ChoseWorkModal] Initializing...');

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


  };
  choseWorkController.$inject=[
    '$log',
    'data',
    'close'
  ];
  win.MainApp.Controllers
  .controller('choseWorkController',choseWorkController);

}(window));
