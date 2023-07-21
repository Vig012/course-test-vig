(function () {

angular.module('MSGApp', [])
.controller('MSGController', MSGController)
.filter('loves', LovesFilter)
.filter('truth', TruthFilter);

MSGController.$inject=['$scope', 'lovesFilter'];
function MSGController($scope, lovesFilter) {
  $scope.name="Vignesh";

  $scope.stateOfBeing = "hungry";

  $scope.sayMessage = function () {
    var msg = "Vignesh Like to eat South Indian Food";
    return msg;
  };

  $scope.sayLovesMessage = function () {
    var msg = "Vignesh Like to eat South Indian Food";
    msg = lovesFilter(msg)
    return msg;
  };

  $scope.feedVignesh = function () {
    $scope.stateOfBeing = "full";
  };
}
function LovesFilter() {
  return function (input) {
      input = input || "";
      input = input.replace("Like","Loves");
      return input;
  }
}

function TruthFilter() {
  return function (input, target, replace) {
    input = input || "";
    input = input.replace(target,replace);
    return input;
  }
}

})();
