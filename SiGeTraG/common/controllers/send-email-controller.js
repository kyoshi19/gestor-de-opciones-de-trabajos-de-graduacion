(function(win){
  'use strict';

  var sendEmailController = function($log, data, close, element){

    $log.debug('[sendEmailModalController] Initializing...');

    /*
    ==============
    VALUES
    ==============
    */

    // VM
    var vm = this;
    vm.data = data;
    vm.message = {};
    vm.message.subject = 'Aplicación: '+vm.data.title+'.';

    vm.close = function(result) {
      var response = {
        'result':result
      };
      $log.debug("Closing email modal");
      element.modal('hide');
      close(response, 500); // close, but give 500ms for bootstrap to animate
    };


  };
  sendEmailController.$inject=[
    '$log',
    'data',
    'close',
    '$element'
  ];
  win.MainApp.Controllers
  .controller('sendEmailController',sendEmailController);

}(window));
