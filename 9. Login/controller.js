var app = angular.module('loginApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'login.html'
    })
    .when('/welcome', {
        resolve: {
            "check": function($location, $rootScope) {
                if(!$rootScope.userLogged) {
                    $location.path('/');
                }
            }
        },
        templateUrl: 'welcome.html'
    })
    .otherwise({
        redirectTo: '/'
    })
});

app.controller('loginController', function($scope, $rootScope, $location) {
    $scope.submit = function() {
        $rootScope.username = $scope.username;

        if($scope.username == 'admin' && $scope.password == 'admin') {
            $rootScope.userLogged = true;
            $location.path('/welcome');
        }
        else {
            alert('Credenciais inválidas!');
        }
    };
});

app.controller('welcomeCtrl', function($scope, $rootScope, $location) {
    $scope.username = $rootScope.username;
    
    $scope.logout = function() {
        $rootScope.username = '';
        $rootScope.userLogged = false;

        $location.path('/');
    };
});