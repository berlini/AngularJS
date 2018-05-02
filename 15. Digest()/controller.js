var app = angular.module('myApp', []);

app.controller('controller', function($scope) {
    $scope.number = Math.random();
    
    document.querySelector('input').addEventListener('click', function() {
        $scope.number = Math.random();
        $scope.$digest();
    }, false);
});