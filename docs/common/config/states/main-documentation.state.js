
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

  $stateProvider.state('main-documentation', {
    url: '/main/documentation',
    templateUrl: 'common/templates/main-documentation.html'
  });

}
