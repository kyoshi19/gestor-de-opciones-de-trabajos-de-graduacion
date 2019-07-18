(function(win) {
  'use strict';

  function workUtilService($log, $http, $q) {

    $log.debug('[workUtilService] initializing...');

    return {
      searchWorks: searchWorks,
      searchWorksByAdviser: searchWorksByAdviser,
      deleteWork: deleteWork,
      updatetWork: updatetWork,
      insertWork: insertWork
    };

    function searchWorks(workToSearch) {
      var deferer = $q.defer();
      $http.post("php/selectWorks.php", workToSearch)
        .then(function(response) {

          if (response.data) {
            response.data.records.forEach(element => {
              element.description = element.description.replace(/@/g, '\n')
            });
          }

          deferer.resolve(response);
        });
      return deferer.promise;
    }

    function searchWorksByAdviser(adviser) {
      var deferer = $q.defer();
      $http.post("php/selectWorksByAdviser.php", adviser)
        .then(function(response) {

          if (response.data) {
            response.data.records.forEach(element => {
              element.description = element.description.replace(/@/g, '\n')
            });
          }

          deferer.resolve(response);
        });
      return deferer.promise;
    }

    function deleteWork(workCode) {
      var deferer = $q.defer();
      $http.post("php/deleteWork.php", workCode)
        .then(function(response) {

          deferer.resolve(response);
        });
      return deferer.promise;
    }

    function updatetWork(work) {
      work.description = work.description.replace(/\n/g, '@');
      var deferer = $q.defer();
      $http.post("php/updateWork.php", work)
        .then(function(response) {

          deferer.resolve(response);
        });
      return deferer.promise;
    }

    function insertWork(work) {
      work.description = work.description.replace(/\n/g, '@');
      var deferer = $q.defer();
      $http.post("php/insertWork.php", work)
        .then(function(response) {

          deferer.resolve(response);
        });
      return deferer.promise;
    }

  }

  //  Service
  workUtilService.$inject = [
    '$log',
    '$http',
    '$q'
  ];
  //  Module
  win.MainApp.Services
    .service('workUtilService', workUtilService);


})(window);