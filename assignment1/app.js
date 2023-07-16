(function () {

angular.module('LunchCheckApp', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope) {
  $scope.stringItem='';
  $scope.message="";

  $scope.checkLunch = function () {
    var itemCount = $scope.stringItem.split(',');

    if($scope.stringItem.trim() === ''){
      $scope.message = 'Please enter data first';
    }
    else if(itemCount.length <=3){
      $scope.message = 'Enjoy!';
    }
    else{
      $scope.message = 'Too much!';
    }
  };
}
})();
