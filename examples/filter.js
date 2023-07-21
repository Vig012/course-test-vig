(function () {

angular.module('MSGApp', [])
.controller('MSGController', MSGController);

MSGController.$inject=['$scope', '$filter'];
function MSGController($scope, $filter) {
  $scope.name="Vignesh";
  $scope.stateOfBeing = "hungry";
  $scope.cookieCost = .45;

  $scope.sayMessage = function () {
    var ms = "Vignesh Like to eat South Indian Food";
    var out = $filter('uppercase')(ms);

    return out;
  };

  $scope.feedVignesh = function () {
    $scope.stateOfBeing = "full";
  };
}
})();
