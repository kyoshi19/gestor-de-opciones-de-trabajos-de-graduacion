(function(win) {
  'use strict';

  //  documentation directive
  function documentation($log, workTypesValue) {
    var directive = {
      restrict: 'E',
      templateUrl: 'common/directives/documentation/documentation.html',
      scope: {},
      link: linkFunc,
    };
    return directive;

    function linkFunc(scope, el, attr) {

      $log.debug('[documentationDirective] initializing...');

      /* --> VARIABLES <-- */

      var templates = {
        mainRules: 'common/templates/documentation/main-rules.html',
        workTypes: 'common/templates/documentation/work-types.html'
      };

      scope.workTypesValue = workTypesValue;

      scope.workTypesValue.forEach(element => {
        element.isOpen = false;
      });


      /* --> METODOS <-- */

      scope.setTemplate = function(option) {
        scope.active = option;
        if (option === 'workTypes') {
          scope.viewTemplate = templates.workTypes;
        } else if (option === 'mainRules') {
          scope.viewTemplate = templates.mainRules;
        }
      };

      scope.setTemplate('workTypes');

      scope.openItem = function(item, index) {

        var icon = document.getElementById('icon' + index);

        item.isOpen = !item.isOpen;

        !$(icon).hasClass('active') ?
          $(icon).addClass('active') : $(icon).removeClass('active');

      };

    }
  }

  documentation.$inject = [
    '$log',
    'workTypesValue'
  ];

  //  Module
  win.MainApp.Directives
    .directive('documentation', documentation);


}(window));