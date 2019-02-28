(function(win) {
  'use strict';

  function notificationService(storage, $timeout, translate) {
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

    return{
        showError:showError,
        showErrorT:showErrorT,
        showWarrning:showWarrning,
        showWarrningT:showWarrningT,
        showInfo:showInfo,
        showInfoT:showInfoT,
        showSucces:showSucces,
        showSuccesT:showSuccesT
    };


    function showSucces(msg) {
      showMessage(msg, "success");
    }

    function showSuccesT(msg) {
      showMessage(msg, "success", true);
    }

    function showError(msg) {
      showMessage(msg, "error");
    }

    function showErrorT(msg) {
      showMessage(msg, "error", true);
    }

    function showWarrning(msg) {
      showMessage(msg, "warning");
    }

    function showWarrningT(msg) {
      showMessage(msg, "warning", true);
    }

    function showInfo(msg) {
      showMessage(msg, "info");
    }

    function showInfoT(msg) {
      showMessage(msg, "info", true);
    }

    function showMessage(msg, type, haveMessage){
      var message = {
        type:statusClasses[type],
        icon:iconClasses[type],
        text:haveMessage ? msg : translate.instant(msg),
      };
      storage.messages.push(message);
       hideNotificacion(message);
    }
    function hideNotificacion(message){
      $timeout(function(){
        var index = storage.messages.indexOf(message);
        storage.messages.splice(index, 1);
      },4000);
    }

  }

  notificationService.$inject = [
    '$sessionStorage',
    '$timeout',
    '$translate'
  ];

  win.MainApp.Services
  .service('notificationService', notificationService);



})(window);
