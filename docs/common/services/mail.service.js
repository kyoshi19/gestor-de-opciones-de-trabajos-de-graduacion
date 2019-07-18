(function(win) {
  'use strict';
  //https://www.quora.com/How-can-I-send-mail-through-localhost-using-XAMPP-in-PHP
  function mailService($log, $http, $q) {

    $log.debug('[mailService] initializing...');

    return {
      send: send
    };

    function send(from, to, subject, sender, text) {
      var message = {
        'from': from,
        'to': to,
        'subject': subject,
        'sender': sender,
        'text': text
      };
      var deferer = $q.defer();
      $http.post("php/sendMail.php", message)
        .then(function(response) {
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