(function(win) {
  'use strict';

  function workUtilService($log, $http, $q) {

    $log.debug('[workUtilService] initializing...');

    return{
      searchWorks:searchWorks,
      searchWorksByAdviser:searchWorksByAdviser,
      deleteWork:deleteWork,
      updatetWork:updatetWork,
      insertWork:insertWork
    };

    function searchWorks(workToSearch) {
      var deferer = $q.defer();
      $http.post("php/selectWorks.php",workToSearch)
        .then(function(response){

          deferer.resolve(response);
        });
      return deferer.promise;
    }

    function searchWorksByAdviser(adviser){
      var deferer = $q.defer();
      $http.post("php/selectWorksByAdviser.php",adviser)
        .then(function(response){

          deferer.resolve(response);
        });
      return deferer.promise;
    }

    function deleteWork(workCode){
      var deferer = $q.defer();
      $http.post("php/deleteWork.php",workCode)
        .then(function(response){

          deferer.resolve(response);
        });
      return deferer.promise;
    }

    function updatetWork(work){
      var deferer = $q.defer();
      $http.post("php/updateWork.php",work)
      .then(function(response){

        deferer.resolve(response);
      });
      return deferer.promise;
    }

    function insertWork(work){
      var deferer = $q.defer();
      $http.post("php/insertWork.php",work)
        .then(function(response){

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
