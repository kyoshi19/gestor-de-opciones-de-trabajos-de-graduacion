(function(win) {
  'use strict';

  //  utpPattern directive
  function utpPattern(patterns, isEmpty) {

    var isValid = function isValid(value, key) {
      if (isEmpty(value) || isEmpty(value.trim())) {
        return true;
      } else {
        var REGEXP = patterns[key];
        if (angular.isDefined(REGEXP)) {
          return REGEXP.test(String(value));
        }
        return true;
      }
    };

    return {
      require        :'ngModel',
      restrict        : 'A',
      link            : function linkFunc(scope, el, attr, ctrl) {
        /* - */
        //For DOM -> model validation
        ctrl.$parsers.unshift(function(viewValue) {
          ctrl.$setValidity(attr.utpPattern,
            isValid(viewValue, attr.utpPattern));
            return viewValue;
          });

          //For model -> DOM validation
          ctrl.$formatters.unshift(function(viewValue) {
            ctrl.$setValidity(attr.utpPattern,
              isValid(viewValue, attr.utpPattern));
              return viewValue;
            });
          }
        };

      }

      utpPattern.$inject = [
        'patternList',
        'isEmptyFilter'
      ];
      //  Module
      win.MainApp.Directives
      .directive('utpPattern', utpPattern);


    }(window));
