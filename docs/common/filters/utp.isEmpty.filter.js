(function (win) {
  "use strict";

  /**
   * Determine if a given object is empty/undefined/null
   */
  function IsEmptyFilter() {
    return function (obj) {
      return angular.isUndefined(obj) || obj === '' || obj === null ||
        (typeof obj === 'object' && !angular.isDate(obj) &&
          Object.keys(obj).length === 0);
    };
  }

  win.MainApp.Filters.filter('isEmpty', IsEmptyFilter);

}(window));
