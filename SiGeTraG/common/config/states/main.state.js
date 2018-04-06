
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

  $stateProvider.state('main', {
    url: '/main',
    templateUrl: 'main.html',
    params: {
      'id': '',
      'fName': 'Super',
      'lName': 'Mario',
      'docNumber': '112312',
      'pass': '123456'
    }
  });

}
