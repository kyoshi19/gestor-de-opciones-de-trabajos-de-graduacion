(function(win) {
  "use strict";

  var modalService = function($log, $uibModal, $rootScope) {

    $log.debug("[ModalService] Initializing...");

    var modalInstance = {};

    var whenCancel = function() {
      return modalInstance.dismiss('cancel');
    };

    var whenOk = function() {
      return modalInstance.close();
    };

    var whenOkParam = function(param) {
      return modalInstance.close(param);
    };

    var setModalTitle = function(param) {
      this.modalTitle = param;
    };

    var getModalTitle = function() {
      return this.modalTitle;
    };

    return {
      open: function(attrs) {

        var lockScreen = angular.isDefined(attrs.ModalLockScreen) ?
          attrs.ModalLockScreen : false;

        var tpl = angular.isDefined(attrs.ModalTpl) ?
          attrs.ModalTpl : window.baseThemeURL + 'partials/p-modal/p-modal.html';

        var defaultController;
        var scope;

        if (attrs.ModalController) {

          scope = $rootScope.$new();
          scope.modalTitle = attrs.ModalTitle;
          scope.data = attrs.ModalData;
          scope.okText = attrs.ModalOkText;
          scope.cancelText = attrs.ModalCancelText;
          scope.blocked = attrs.ModalBlocked;
          scope.ok = whenOk;
          scope.cancel = whenCancel;
          scope.okParam = whenOkParam;

        } else {

          defaultController = ['$scope', function($modalScope) {

            $modalScope.modalTitle = attrs.ModalTitle;
            $modalScope.message = attrs.ModalMessage;
            $modalScope.okText = attrs.ModalOkText;
            $modalScope.cancelText = attrs.ModalCancelText;
            $modalScope.data = attrs.ModalData;
            $modalScope.blocked = attrs.ModalBlocked;
            $modalScope.method = attrs.ModalMethod;
            $modalScope.ok = whenOk;
            $modalScope.cancel = whenCancel;
            $modalScope.okParam = whenOkParam;
            $modalScope.lockScreen = lockScreen;

          }];

        }

        modalInstance = $uibModal.open({

          animation: true,
          templateUrl: angular.isDefined(attrs.ModalTpl) ? "/SiGeTraG/" + tpl : tpl,
          controller: attrs.ModalController ? attrs.ModalController : defaultController,
          bindToController: attrs.ModalController ? true : false,
          scope: attrs.ModalController ? scope : $rootScope,
          controllerAs: 'ctrl',
          backdrop: 'static',
          appendTo: attrs.AppendTo,
          size: attrs.Size,
          keyboard: !lockScreen
        });

        return modalInstance;
      },

      cancel: whenCancel,
      ok: whenOk,
      okParam: whenOkParam,
      getModalTitle: getModalTitle,
      setModalTitle: setModalTitle
    };

  };

  modalService.$inject = ['$log', '$uibModal', '$rootScope'];

  win.MainApp.Services.service('modalService', modalService);

}(window));
