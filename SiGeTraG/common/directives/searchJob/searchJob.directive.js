(function(win) {
  'use strict';

  //  directive directive
  function searchJob() {
    var directive = {
      restrict        : 'E',
      templateUrl     : 'common/directives/searchJob/searchJob.html',
      scope           : {
      },
      link            : linkFunc
    };
    return directive;

    ////////

    function linkFunc(scope, el, attr, ctrl) {
      /* - */

      scope.workType = null;
    }
  }

  searchJob.$inject = [];
  //  Module
  win.MainApp.Directives
  .directive('searchJob', searchJob);

})(window);
