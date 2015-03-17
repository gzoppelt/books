/**
 * Created by Not on 21/09/2014.
 */
var app = angular.module("exampleApp", []);

app.controller("TopLevelController", function ($scope){

    $scope.data = {
        dataValue: "Hello, Adam"
    };

    $scope.reverseText = function (){
        $scope.data.dataValue = $scope.data.dataValue.split("").reverse().join("");
    };

    $scope.changeCase = function (){
        var result = [];
        angular.forEach($scope.data.dataValue.split(""), function(char, index){
            result.push(index % 2 == 1 ? char.toString().toUpperCase() : char.toString().toLowerCase());
        });
        $scope.data.dataValue = result.join("");
    };
});

app.controller("FirstChildController", function ($scope){

    $scope.changeCase = function (){
        $scope.data.dataValue = $scope.data.dataValue.toUpperCase();
    };
});

app.controller("SecondChildController", function ($scope){

    $scope.changeCase = function (){
        $scope.data.dataValue = $scope.data.dataValue.toLowerCase();
    };

    $scope.shiftFour = function (){
        var result = [];
        angular.forEach($scope.data.dataValue.split(""), function(char, index){
            result.push(index > 4 ? char.toUpperCase() : char);
        });
        $scope.data.dataValue = result.join("");
    };
});