(function(win) {
  'use strict';

  var infoModalController = function($log, data, element, close) {

    $log.debug('[infoModalController] Initializing...');

    var vm = this;
    vm.data = data;

    vm.close = function(result) {
      var response = {
        result: result
      }
      element.modal('hide');
      close(response, 500);
    };


  };
  infoModalController.$inject = [
    '$log',
    'data',
    '$element',
    'close'
  ];
  win.MainApp.Controllers
    .controller('infoModalController', infoModalController);

}(window));