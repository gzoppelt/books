/**
 * Created by g on 08/07/14.
 */
var ec = angular.module("exampleControllers", []);
ec.controller("dayController", function($scope, days){
    var dayNames =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    $scope.day = days.today;
});

ec.controller("tomorrowController", function($scope, days){
    var dayNames =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    $scope.day = days.tomorrow;
});
