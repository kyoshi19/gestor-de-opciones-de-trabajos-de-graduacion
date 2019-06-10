(function(win) {
  'use strict';


  // This is the setup for all custom modules.
  //
  win.MainApp.Controllers = angular.module(appName + ".controllers", []);
  win.MainApp.Directives = angular.module(appName + ".directives", []);
  win.MainApp.Services = angular.module(appName + ".services", []);
  win.MainApp.Filters = angular.module(appName + ".filters", []);
  win.MainApp.Values = angular.module(appName + ".values", []);
  win.MainApp.Factory = angular.module(appName + ".factory", [])

  //
  // Setup Common Modules
  //
  angular.module(appName, [
    appName + ".controllers",
    appName + ".directives",
    appName + ".services",
    appName + ".filters",
    appName + ".values",
    appName + ".factory",
    'ui.router',
    'aa.formExtensions',
    'pascalprecht.translate',
    'ngStorage',
    'angularModalService',
    'ngMaterial',
    'ngMessages',
    'md.data.table',
    'ngAnimate',
    'ngSanitize'

  ])

  .config(function($mdThemingProvider) {
    $mdThemingProvider.disableTheming();
  })
  
  .run(['$templateCache', function ($templateCache) {
    $templateCache.put('Tek.progressBarDirective.html', "<div class='progress' ng-class='bar.containerClass'><div class='progress-bar' ng-class='bar.barClass' ng-transclude></div></div>");
}]);

}(window));