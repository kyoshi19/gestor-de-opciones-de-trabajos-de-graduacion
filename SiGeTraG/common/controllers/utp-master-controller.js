(function(win){
  'use strict';

  var masterController = function($scope, $log, patterns,
    $http, $state, storage, $timeout, catalog, catalogItem, isEmpty){

    $log.debug('[utp-master-controller] Initializing...');

    /*
    ==============
    VALUES
    ==============
    */

    // VM
    var vm = this;
    vm.storage = storage;
    vm.docPatern = patterns.panamaIdPattern;
    vm.fullYear = new Date().getFullYear();
    vm.catalogs ={};
    vm.backImage = 'src/img/starwars.jpg';
    vm.myBackObj = {'background-image': 'url('+vm.backImage+')',
                    'background-size': 'cover'};

    vm.isDefined = angular.isDefined;

    vm.select = function(){
      $http.get("php/selectAllUsers.php")
      .then(function (response) {
        vm.users = response.data.records;
        vm.msg="Consulta Exitosa";
      });
    };

    vm.initCatalogs = function(){
      catalog();
    };

    vm.showLogOff = function(){
      return !isEmpty(storage.user);
    };

    vm.logggOut = function(){
      storage.user = undefined;
      vm.goToLogIn();
    };

    vm.goToLogIn = function(){
      vm.showLoader=true;
      $timeout(function() {
        vm.showLoader=false;
        $state.transitionTo("login");
      },700);
    };

    var setup = function(){
      vm.initCatalogs();
    };

    setup();

  };
  masterController.$inject=[
    '$scope',
    '$log',
    'patternList',
    '$http',
    '$state',
    '$sessionStorage',
    '$timeout',
    'catalogFilter',
    'catalogItemFilter',
    'isEmptyFilter'
  ];
  win.MainApp.Controllers
  .controller('masterController',masterController);

}(window));
