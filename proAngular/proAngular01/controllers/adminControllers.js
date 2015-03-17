/**
 * Created by g on 06/07/14.
 */
var sa = angular.module("sportStoreAdmin");

sa.constant("authUrl", "http://localhost:5500/users/login");
sa.constant("ordersUrl", "http://localhost:5500/orders");

sa.controller("authController", function ($scope, $http, $location, authUrl){
    $scope.authenticate = function (user, pass){
        $http
            .post(authUrl, {
                username: user,
                password: pass
            }, {
                withCredentials: true
            })
            .success(function (data){
                $location.path("/main");
            })
            .error(function (error){
                $scope.authenticationError = error;
            })
        ;
    };
});

sa.controller("mainController", function ($scope){
    $scope.screens = ["Products", "Orders"];
    $scope.current = $scope.screens[0];

    $scope.setScreen = function (index){
        $scope.current = $scope.screens[index];
    };

    $scope.getScreen = function (){
        return $scope.current == "Products" ? "/proAngular/views/adminProducts.html" : "/proAngular/views/adminOrders.html";
    };
});

sa.controller("ordersController", function ($scope, $http, ordersUrl){
    $http
        .get(ordersUrl, {withCredentials: true})
        .success(function (data){
            $scope.orders = data;
            console.log(data);
        })
        .error(function (error){ $scope.error = error; })
    ;

    $scope.selectedOrder;  //sets selectedOrder to false and hides the initial display of details

    $scope.selectOrder = function (order){
        $scope.selectedOrder = order;
    };

    $scope.calcTotal = function (order){
        var total = 0;
        for (var i=0; i<order.products.length; i++){
            total += order.products[i].count * order.products[i].price;
        }
        return total;
    };
});