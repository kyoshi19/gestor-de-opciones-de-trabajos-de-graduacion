(function (win) {
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

      var xhr = $http.post("php/selectWorks.php", workToSearch);

      xhr.then(function (response) {

        if (response.data.error) {

          deferer.reject(response);

          return;

        }

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

      var xhr = $http.post("php/selectWorksByAdviser.php", adviser);

      xhr.then(function (response) {

        if (response.data.error) {

          deferer.reject(response);

          return;

        }

        if (response.data) {

          response.data.records.forEach(element => {

            element.description = element.description.replace(/@/g, '\n');

          });

        }

        deferer.resolve(response);

      });

      return deferer.promise;

    }

    function deleteWork(workCode) {

      var deferer = $q.defer();

      var xhr = $http.post("php/deleteWork.php", workCode);

      xhr.then(function (response) {

        if (response.data.error) {

          deferer.reject(response);

          return;

        }

        deferer.resolve(response);

      });

      return deferer.promise;

    }

    function updatetWork(work) {

      work.description = work.description.replace(/\n/g, '@');

      var deferer = $q.defer();

      var xhr = $http.post("php/updateWork.php", work);

      xhr.then(function (response) {

        if (response.data.error) {

          deferer.reject(response);

          return;

        }

        deferer.resolve(response);

      });

      return deferer.promise;

    }

    function insertWork(work) {

      work.description = work.description.replace(/\n/g, '@');

      var deferer = $q.defer();

      var xhr = $http.post("php/insertWork.php", work);

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