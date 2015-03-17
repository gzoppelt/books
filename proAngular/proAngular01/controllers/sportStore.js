/**
 * Created by g on 04/07/14.
 */
    //the module sportStore is created in the inline script at app.html
var sport = angular.module("sportStore");

sport.constant("dataUrl", "http://localhost:5500/products");
sport.constant("orderUrl", "http://localhost:5500/orders");

sport.controller('sportStoreController', function($scope, $http, $location, dataUrl, orderUrl, cart){
    /*
    //Mock data for the first setup:
    $scope.data = {
        products: [
            {   name: "Product #1",
                description: "A product",
                category: "Category #1",
                price: 100},
            {   name: "Product #2",
                description: "A product",
                category: "Category #1",
                price: 110},
            {   name: "Product #3",
                description: "A product",
                category: "Category #2",
                price: 210},
            {   name: "Product #4",
                description: "A product",
                category: "Category #3",
                price: 202}
        ]
    };
    */
    $scope.data = {};

    $http.get(dataUrl)
        .success(function (data){
            $scope.data.products = data;
        })
        .error(function (error){
            $scope.data.error = error;
        })
    ;

    $scope.sendOrder = function (shippingDetails){
        var order = angular.copy(shippingDetails);
        order.products = cart.getProducts();
        $http.post(orderUrl, order)
            .success(function (data){
                $scope.data.orderId = data.id;
                cart.getProducts().length = 0;
            })
            .error(function (error){
                $scope.data.orderError = error;
            })
            .finally(function (){
                $location.path("/complete");
            })
        ;
    };
});