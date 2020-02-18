(function (win) {
  'use strict';

  var sendEmailController = function ($log, data, mdDialog,
    element, storage, mailService, userRules) {

    $log.debug('[sendEmailModalController] Initializing...');

    /*
    ==============
    VALUES
    ==============
    */

    // VM
    var vm = this;
    vm.data = data;
    vm.userRules = userRules;
    vm.message = {};
    vm.message.subject = 'Aplicación: ' + vm.data.title + '.';

    vm.accept = function (sendMailForm) {

      sendMailForm.$aaFormExtensions.$onSubmitAttempt();

      if (!sendMailForm.$valid) {
        return;
      }

      storage.showLoader = true;

      var student = storage.user.fName + ' ' + storage.user.lName;

      var xhr = mailService.send(vm.message.email, data.contact,
        vm.message.subject, student, vm.message.text);

      xhr.then(function (response) {

        if (response.data.error) {

          deferer.reject(response);

          return;

        }

        response.result = true;

        mdDialog.hide(response); // close, but give 500ms for bootstrap to animate

      });

    };

    vm.cancel = function () {

      var response = {
        'result': false
      };

      mdDialog.hide(response); // close, but give 500ms for bootstrap to animate

    }

  };
  sendEmailController.$inject = [
    '$log',
    'data',
    '$mdDialog',
    '$element',
    '$sessionStorage',
    'mailService',
    'userRules'
  ];
  win.MainApp.Controllers
    .controller('sendEmailController', sendEmailController);

}(window));