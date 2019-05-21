(function(win) {
  'use strict';

  function notificationService($log, storage, $timeout, translate) {

    $log.debug('[notificationService] initializing...');
    
    var statusClasses = {
      info: 'alert-info',
      success: 'alert-success',
      warning: 'alert-warning',
      error: 'alert-danger'
    };

    var iconClasses = {
      info: 'fa-exclamation-circle',
      success: 'fa-check-circle',
      warning: 'fas fa-exclamation-triangle',
      error: 'fa-times-circle'
    };

    return {
      showError: showError,
      showWarrning: showWarrning,
      showInfo: showInfo,
      showSucces: showSucces
    };


    function showSucces(msg) {
      showMessage(msg, "success");
    }

    function showError(msg) {
      showMessage(msg, "error");
    }

    function showWarrning(msg) {
      showMessage(msg, "warning");
    }

    function showInfo(msg) {
      showMessage(msg, "info");
    }

    function showMessage(msg, type) {
      var message = {
        type: statusClasses[type],
        icon: iconClasses[type],
        text: translate.instant(msg),
      };
      storage.messages.push(message);
      hideNotificacion(message);
    }

    function hideNotificacion(message) {
      $timeout(function() {
        var index = storage.messages.indexOf(message);
        storage.messages.splice(index, 1);
      }, 3000);
    }

  }

  notificationService.$inject = [
    '$log',
    '$sessionStorage',
    '$timeout',
    '$translate'
  ];

  win.MainApp.Services
    .service('notificationService', notificationService);



})(window);