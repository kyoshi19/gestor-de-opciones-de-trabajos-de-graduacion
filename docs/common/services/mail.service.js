(function (win) {
  'use strict';

  //https://www.quora.com/How-can-I-send-mail-through-localhost-using-XAMPP-in-PHP

  function mailService($log, $http, $q) {

    $log.debug('[mailService] initializing...');

    return {
      send: send
    };

    function send(from, contact, to, subject, sender, text) {

      var message = {
        'from': from,
        'contct': contact,
        'to': to,
        'subject': subject,
        'sender': sender,
        'text': text
      };

      var deferer = $q.defer();

      var xhr = $http.post("php/sendMail.php", message);

      xhr.then(function (response) {

        if (response.data.error) {

          deferer.reject(response);

          return;

        }

        deferer.resolve(response);

      });

      return deferer.promise;
    }
  }

  mailService.$inject = [
    '$log',
    '$http',
    '$q'
  ];

  win.MainApp.Services
    .service('mailService', mailService);

})(window);