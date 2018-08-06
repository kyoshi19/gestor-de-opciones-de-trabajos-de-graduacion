(function(win){
  'use strict';

  var sendEmailController = function($log, data, $http, close,
    element, storage, sendMail){

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
      if (result) {
        storage.showLoader = true;
        var student = storage.user.fName+' '+storage.user.lName;
        vm.message.text =
        sendMail.send(vm.message.email, data.contact,
          vm.message.subject, student, vm.message.text )
        .then(function(response){

          element.modal('hide');
          close(response, 500); // close, but give 500ms for bootstrap to animate
        });
      }
      var response = {
        'result':result
      };

    };


  };
  sendEmailController.$inject=[
    '$log',
    'data',
    '$http',
    'close',
    '$element',
    '$sessionStorage',
    'sendMailService'
  ];
  win.MainApp.Controllers
  .controller('sendEmailController',sendEmailController);

}(window));
