(function(win) {
  'use strict';

  /*
   * ==================== CatalogFilter ====================
   */
  function CatalogFilter( catalogService ) {
    return function(value){
      return catalogService.get(value);
    };
  }
  CatalogFilter.$inject = [ 'catalogService' ];
  win.MainApp.Filters.filter('catalog', CatalogFilter);

  /*
   * ==================== CatalogItemFilter ====================
   */
  function CatalogItemFilter( catalogService ) {
    return function(value, catalogName){
      return catalogService.item(value, catalogName);
    };
  }
  CatalogItemFilter.$inject = [ 'catalogService' ];
  win.MainApp.Filters.filter('catalogItem', CatalogItemFilter);

  /*
   * ==================== CatalogIsReadyFilter ====================
   */
  function CatalogIsReadyFilter( catalogService, isEmpty ) {
    var catalogIsReady = function(value){
      return !isEmpty(catalogService.get(value));
    };
    catalogIsReady.$stateful = true;
    return catalogIsReady;
  }
  CatalogIsReadyFilter.$inject = [ 'catalogService', 'isEmptyFilter' ];
  win.MainApp.Filters.filter('catalogIsReady', CatalogIsReadyFilter);


})(window);
