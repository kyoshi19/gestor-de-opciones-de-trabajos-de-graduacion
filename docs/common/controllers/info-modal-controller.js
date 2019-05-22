(function(win) {
  'use strict';

  var infoModalController = function($log, data, mdDialog) {

    $log.debug('[infoModalController] Initializing...');

    var vm = this;
    vm.data = data;

    vm.accept = function() {
      mdDialog.hide();
    }


  };
  infoModalController.$inject = [
    '$log',
    'data',
    '$mdDialog'
  ];
  win.MainApp.Controllers
    .controller('infoModalController', infoModalController);

}(window));