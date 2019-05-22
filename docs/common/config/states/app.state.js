//En este bloque config solo se configuran las rutas
angular
  .module(appName)
  .config(config);


config.$inject = [
  '$urlRouterProvider'
];

function config(
  $urlRouterProvider
) {
  $urlRouterProvider.otherwise('/login');
}
