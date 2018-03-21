var app = angular.module('mainApp', []);

app.controller('mainCtrl', function($scope, $http) {
    $http.get('http://127.0.0.1:8080/database.json')
    .success(function(response) {
        $scope.people = response.database;
    });
});