var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider.otherwise({
        redirecTo: '/'   //Redirecciona a esta página cuando no encuentra la ruta especificada
    
    });


});