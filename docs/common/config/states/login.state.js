
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

  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'common/templates/main-login.html'
  });

}
