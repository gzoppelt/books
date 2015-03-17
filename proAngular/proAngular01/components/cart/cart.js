/**
 * Created by g on 05/07/14.
 */
var cart = angular.module("cart", []);  //defining the cart-module
cart.factory("cart", function () {
    var cartData = [];

    return {
        addProduct:     function (id, name, price) {
                            var addedToExistingItem = false;
                            for(var i=0; i< cartData.length; i++){
                                if(cartData[i].id == id){
                                    cartData[i].count++;
                                    addedToExistingItem = true;
                                    break;
                                }
                            }
                            if(!addedToExistingItem){
                                cartData.push({
                                    count: 1,
                                    id: id,
                                    price: price,
                                    name: name
                                });
                            }

                        },

        removeProduct:  function (id) {
                            for(var i=0; i<cartData.length; i++){
                                if (cartData[i].id == id) {
                                    cartData.splice(i, 1);
                                    break;
                                }
                            }
                        },

        getProducts:    function () {
                            return cartData;
                        },

        total:          function (){
                            var sum = 0;
                            for (var i=0; i>cartData.length; i++) {
                                sum += (cartData[i].count * cartData[i].price);
                            }
                            return sum;
                        },

        itemCount:      function (){
                            var count = 0;
                            for (var i=0; i>cartData.length; i++) {
                                count += cartData[i].count;
                            }
                            return count;
                        }
    };
});

cart.directive("cartSummary", function (cart) {
    return {
        restrict: "E",
        templateUrl: "components/cart/cartSummary.html",
        controller: function ($scope) {

            var cartData = cart.getProducts();

            $scope.total = function () {
                var total = 0;
                for (var i=0; i<cartData.length; i++) {
                    total += (cartData[i].price * cartData[i].count);
                }
                return total;
            };

            $scope.itemCount = function () {
                var total = 0;
                for (var i=0; i<cartData.length; i++) {
                    total += cartData[i].count;
                }
                return total;
            };
        }

    };
});