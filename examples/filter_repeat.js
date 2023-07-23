(function () {
'use strict';

var shoppingList1 = [
  "Milk", "Donuts", "Cookies", "chocolate", "Peanut Butter", "Pepto Bismol",
  "Pepto Bismol (Chocolate Flavor)", "Pepto Bismol (Cookie Flavor)"
];

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController);

ShoppingListController.$inject = ['$scope'];
function ShoppingListController($scope) {
  $scope.shoppingList1 = shoppingList1;
}

})();
