var app = angular.module('myApp', []);

app.controller('app', function($scope) {
    var array = new Array(100);
    $scope.range = array;
});