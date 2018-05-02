var app = angular.module('myApp', []);

app.controller('app', function($scope) {
    $scope.counter = 0;

    $scope.$watch('myText', function(newValue, oldValue) {
        if(newValue != null) {
            $scope.counter ++;
        }
    });
});