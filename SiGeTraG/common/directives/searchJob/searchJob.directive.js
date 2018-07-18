(function(win) {
  'use strict';

  //  directive directive
  function searchJob(selectOption) {
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
      scope.options = [ { name: 'Hank' }, { name: 'Francisco' } ];
      scope.myModel = scope.options[0];
      scope.selectOption = selectOption;

      scope.initSelect = function(item){
        if (!item) {
          return selectOption.id;
        }
        return item;
      };
      scope.initSearchJob = function(){

      };

      scope.initSearchJob();
    }
  }

  searchJob.$inject = ['selectOption'];
  //  Module
  win.MainApp.Directives
  .directive('searchJob', searchJob);

})(window);
