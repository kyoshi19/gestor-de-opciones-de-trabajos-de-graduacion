(function(win){
  'use strict';

  var masterController = function($scope, $log, patterns,
    $http, $state, storage, $timeout, catalog, catalogItem){

    $log.debug('[utp-master-controller] Initializing...');

    /*
    ==============
    VALUES
    ==============
    */

    // VM
    var vm = this;
    vm.mainStudent = {};
    vm.tempUser = {};
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
      // $http.get("php/selectCatalogs.php")
      // .then(function (response) {
      //   storage.catalogs = response.data;
      //   vm.msg="Consulta Exitosa";
      // });
      catalog();
    };

    vm.deleteUser = function(){
      $http.post("php/deleteUser.php",vm.tempUser)
      .then(function (response) {
        vm.msg = response.data.records;
        vm.tempUser = {};
      });
    };

    vm.setShowLoader = function(show){
      vm.showLoader = show;
    };

    vm.goToMain = function(){
      vm.showLoader=true;
      $timeout(function() {
        vm.showLoader=false;
        $state.transitionTo("main");
      },1000);
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
    'catalogItemFilter'
  ];
  win.MainApp.Controllers
  .controller('masterController',masterController);

}(window));
