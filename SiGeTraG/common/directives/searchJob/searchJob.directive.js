(function(win) {
  'use strict';

  //  directive directive
  function searchJob(selectOption, $http, $window) {
    var directive = {
      restrict        : 'E',
      templateUrl     : 'common/directives/searchJob/searchJob.html',
      scope           : {
        setShowLoader : '&'
      },
      link            : linkFunc
    };
    return directive;

    ////////

    function linkFunc(scope, el, attr, ctrl) {
      /* - */
      scope.workToSearch ={};
      scope.selectOption = selectOption;

      scope.initSelect = function(item){
        if (!item) {
          return selectOption.id;
        }
        return item;
      };
      scope.searchJobs = function(){
        if (!angular.isDefined(scope.workToSearch.field)) {
          scope.workToSearch.field = "";
        }
        scope.showLoader = true;
        $http.post("php/selectWorks.php",scope.workToSearch)
        .then(function (response) {

          scope.works = response.data.records;

          scope.showLoader = false;
          // scope.tempUser = {};
        }).catch(function(exception){
          $window.alert(exception);
          scope.showLoader = false;
        });
      };
    }
  }

  searchJob.$inject = [
    'selectOption',
    '$http',
    '$window'
  ];
  //  Module
  win.MainApp.Directives
  .directive('searchJob', searchJob);

})(window);
