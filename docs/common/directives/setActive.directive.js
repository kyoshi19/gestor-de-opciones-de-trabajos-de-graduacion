(function(win) {
  'use strict';

  //  setActive directive
  function setActive(log, isEmpty) {


    return {
      require        :'ngModel',
      restrict        : 'A',
      link            : function linkFunc(scope, el, attr, ctrl) {
        /* - */
        //For DOM -> model validation
        ctrl.$parsers.unshift(function(viewValue) {
          if (!isEmpty(viewValue)) {
            ctrl.$$element[0].parentElement.parentElement
            .children[0].classList.add('active');
          }else{
            ctrl.$$element[0].parentElement.parentElement
            .children[0].classList.remove('active');
          }
        });

        //For model -> DOM validation
        ctrl.$formatters.unshift(function(viewValue) {
          log.debug('set active');
          if (!isEmpty(viewValue)) {
            ctrl.$$element.addClass('active');
          }else{
            ctrl.$$element.removeClass('active');
          }
        });
      }
    };

  }

  setActive.$inject = [
    '$log',
    'isEmptyFilter'
  ];
  //  Module
  win.MainApp.Directives
  .directive('setActive', setActive);


}(window));
