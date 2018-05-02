var app = angular.module('myApp', []);

app.factory('randomService', function() {
    var object = {};
    var num = Math.floor(Math.random()*1000);

    object.random = function() {
        return num;
    };

    return object;
});

app.controller('controller', function($scope, randomService) {
    $scope.generate = function() {
        $scope.number = randomService.random();
    };
});