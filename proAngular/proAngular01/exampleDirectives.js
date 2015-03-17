/**
 * Created by g on 08/07/14.
 */
var ed = angular.module("exampleDirectives", []);

ed.directive("highlight", function ($filter){

    var dayFilter = $filter("dayName");

    return function (scope, element, attrs){
        if (dayFilter(scope.day) == attrs["highlight"]){
            element.css("color", "red");
        }
    };
});