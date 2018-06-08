(function(win) {
  'use strict';

  function catalogService(isEmpty) {
    var data={};
    call = false;
    return{
      get:get
    };
    // OBTENER CATALOGO //
    function get(element, proyect) {
      if ((isEmpty(data) || isEmpty(data[project])) && !call) {
        data[project]={};
        call = true;
        $http.get("php/selectCatalogs.php").then(
          function (response) {
            call = false;
            data[project] = response.data;
          },
          function(data) {
            /*
             * TODO: llamada de servicio de error en notificiación
             */
        });
      }
      return data[project][element];
    }
  }
  //  Service
  catalogService.$inject = ['isEmptyFilter'];

  //  Module
  win.MainApp.Services
  .service('catalogService', catalogService);

})(window);
