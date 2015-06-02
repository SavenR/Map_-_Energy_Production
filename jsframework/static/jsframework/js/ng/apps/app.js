var app = angular.module("app", ['ngRoute', 'ui.bootstrap']);

app.config(['$routeProvider', function($routeProvider){
    // console.log('in app.config');
    $routeProvider
    .when('/', {
        templateUrl: '/templates/index.html',
        controller: 'mainController'
    })
}]);
