
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

  $stateProvider.state('main-student', {
    url: '/main/student',
    templateUrl: 'common/templates/main-student.html'
  });

}
