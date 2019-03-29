(function(win) {
  "use strict";
  win.MainApp.Controllers.controller('mainController', [
        function() {
      var main = this;

      main.random = function() {
        return Math.floor(Math.random() * 100);
      };

      main.valBar = 0;
      main.isBar = true;
      main.bar1ProgressVal = 0;

      main.bar2ProgressVal = 0;
        }
    ]);
})(window);