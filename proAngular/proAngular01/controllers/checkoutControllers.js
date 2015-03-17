/**
 * Created by g on 05/07/14.
 */
ss = angular.module("sportStore");

ss.controller("checkoutSummaryController", function ($scope, cart){
    $scope.cartData = cart.getProducts();
    $scope.total = function (){
        var total = 0;
        for (var i=0; i<$scope.cartData.length; i++) {
            total += ($scope.cartData[i].count * $scope.cartData[i].price);
        }
        return total;
    };
    //??? why does this not work (returns 0):
    //$scope.total = cart.total();
    $scope.remove = function (id) {
        cart.removeProduct(id);
    };
});