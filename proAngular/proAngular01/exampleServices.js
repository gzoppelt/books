/**
 * Created by g on 08/07/14.
 */
var es = angular.module("exampleServices", []);

es.config(function (){
    console.log("Services module config: (no time)");
});
es.run(function(startTime){
    console.log("Services module run: " + startTime);
});

es.service("days", function (nowValue){
    this.today = now.getDay();
    this.tomorrow = this.today +1;
});
