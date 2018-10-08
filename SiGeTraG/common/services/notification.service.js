(function(win) {
  'use strict';

  function notificationService(storage, $timeout) {
    return{
        showErrorMessage:showErrorMessage,
        showWarrningMessage:showWarrningMessage,
        showInfoMessage:showInfoMessage,
        showSuccesMessage:showSuccesMessage
    };

    function showSuccesMessage(msg) {
      var message = {
        type:'alert-success border-success',
        text:msg
      };
      storage.messages.push(message);
      hideNotificacion(message);
    }

    function showErrorMessage(msg) {
      var message = {
        type:'alert-danger border-danger',
        text:msg
      };
      storage.messages.push(message);
      hideNotificacion(message);
    }

    function showWarrningMessage(msg) {
      var message = {
        type:'alert-warning border-warning',
        text:msg
      };
      storage.messages.push(message);
      hideNotificacion(message);
    }

    function showInfoMessage(msg) {
      var message = {
        type:'alert-info border-info',
        text:msg
      };
      storage.messages.push(message);
      hideNotificacion(message);
    }

    function hideNotificacion(message){
      $timeout(function(){
        var index = storage.messages.indexOf(message);
        storage.messages.splice(index, 1);
      },3000);
    }

  }

  notificationService.$inject = [
    '$sessionStorage',
    '$timeout'
  ];

  win.MainApp.Services
  .service('notificationService', notificationService);



})(window);
