(function(win) {
  'use strict';

  function workUtilService($http, $q) {

    var jobs ={};
    return{
      searchWorks:searchWorks,
      searchWorksByAdviser:searchWorksByAdviser
    };

    function searchWorks(workToSearch) {
      var deferer = $q.defer();
      $http.post("php/selectWorks.php",workToSearch)
        .then(function(response){
          jobs = response;
          deferer.resolve(jobs);
        });
      return deferer.promise;
    }

    function searchWorksByAdviser(adviser){
      var deferer = $q.defer();
      $http.post("php/selectWorksByAdviser.php",adviser)
        .then(function(response){
          jobs = response;
          deferer.resolve(jobs);
        });
      return deferer.promise;
    }
  }

  //  Service
  workUtilService.$inject = [
    '$http',
    '$q'
  ];
  //  Module
  win.MainApp.Services
  .service('workUtilService', workUtilService);


})(window);
