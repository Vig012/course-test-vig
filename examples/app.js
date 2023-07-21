(function () {
'use strict';

var x="hello";

angular.module('MyFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name="Vignesh";
  $scope.sayHello = function () {
    return "Hello coursera";
  };
});

})();
