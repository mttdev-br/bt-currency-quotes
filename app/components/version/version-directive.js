'use strict';

angular.module('myApp.version.version-directive', [])

.directive('quote-component', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);

//TODO implementar diretiva quote-component: renomear pasta 'version', editar todos os arquivos
