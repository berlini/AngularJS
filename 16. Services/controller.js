var app = angular.module('myApp', []);

app.service('randomService', function() {
    var num = Math.floor(Math.random()*1000);

    this.random = function() {
        return num;
    };
});

app.controller('controller', function($scope, randomService) {
    $scope.generate = function() {
        $scope.number = randomService.random();
    };
});