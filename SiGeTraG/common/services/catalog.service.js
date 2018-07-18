(function(win) {
  'use strict';

  function catalogService($http, isEmpty, filter) {
    var data={};
    var call = false;
    return{
      get:get,
      item:item
    };
    // OBTENER CATALOGO //
    function get(element) {
      if (isEmpty(data) && !call) {
        call = true;
        $http.get("php/selectCatalogs.php").then(
          function (response) {
            call = false;
            data = response.data;
          },
          function(data) {
            /*
             * TODO: llamada de servicio de error en notificiación
             */
        });
      }
      if (element) {
        return data[element];
      }
    }

    function item(value, catalogName, defaultValue){
      var catalog = get(catalogName);
      defaultValue = angular.isDefined(defaultValue) ? defaultValue : '-1';
      var doFilterCatalog = function(filterBy) {
        return filter(catalog, function(element) {
          if (angular.isDefined(element.id) && angular.isDefined(filterBy)) {
            return element.id.trim() === String(filterBy).trim();
          }
        });
      };

      var results = doFilterCatalog(value);
      if (angular.isUndefined(results) || results.length === 0) {
        results = doFilterCatalog(defaultValue);
      }
      if (angular.isDefined(results) && angular.isDefined(results[0])) {
        return results[0];
      } else {
        return angular.isDefined(catalog) ? catalog[0] : [];
      }
    }
  }
  //  Service
  catalogService.$inject = ['$http','isEmptyFilter', 'filterFilter'];

  //  Module
  win.MainApp.Services
  .service('catalogService', catalogService);

})(window);
