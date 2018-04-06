
//En este bloque config solo se configuran las rutas
angular
  .module(appName)
  .config(config);


config.$inject = [
  '$stateProvider',
];

function config(
  $stateProvider
) {

  $stateProvider.state('head', {
    url: '/head',
    views: {
      'header@': {
        templateUrl: 'common/templates/cabecera.html',
        controller: ''
      }
    }
  });

}
