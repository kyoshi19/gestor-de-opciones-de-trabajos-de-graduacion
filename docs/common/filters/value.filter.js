(function(win){
  'use strict';
  var bgValue = function (log, $injector) {
    log.debug('[bgValueFilter] Initializing...');
    return function (value, item) {
      try{
        if (item) {
          return $injector.get(value).item;
        }
        return $injector.get(value);
      }catch (exp){
        return '';
      }

    };
  };
  bgValue.$inject = ['$log', '$injector'];
  win.MainApp.Filters
    .filter('bgValue', bgValue);
}(window));
