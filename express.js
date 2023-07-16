(function () {

angular.module('MSGApp', [])
.controller('MSGController', MSGController);

MSGController.$inject=['$scope'];
function MSGController($scope) {
  $scope.name="Vignesh";

  $scope.stateOfBeing = "hungry";

  $scope.sayMessage = function () {
    return "Vignesh Like to eat South Indian Food";
  };

  $scope.feedVignesh = function () {
    $scope.stateOfBeing = "full";
  }
}

})();
