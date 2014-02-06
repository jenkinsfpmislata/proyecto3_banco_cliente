var app = angular.module("app", ['ngRoute']);

app.constant("urlBase","/proyecto3_banco_servidor");

app.config(function($routeProvider) {
    $routeProvider.otherwise({
        redirecTo: '/'   //Redirecciona a esta página cuando no encuentra la ruta especificada
    });
});

app.controller('MainController', function($scope, $http) {
}); 
