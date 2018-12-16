
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

  $stateProvider.state('main-advisers', {
    url: '/main/advisers',
    templateUrl: 'common/templates/main-advisers.html'
  });

}
