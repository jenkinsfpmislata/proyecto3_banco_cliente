var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider.otherwise({
        redirecTo: '/'   //Redirecciona a esta página cuando no encuentra la ruta especificada

    });
    $routeProvider.when("/", //Ruta que usaremos para que cargue
            {
                templateUrl: "main.html", //Pagina que hay que cargar
                controller: "MainController"         //Controlador que hay que cargar
            }
    );
    $routeProvider.when("/entidadBancaria", //Ruta que usaremos para que cargue
            {
                templateUrl: "entidades_bancarias.html", //Pagina que hay que cargar
                controller: "EntidadesBancariasController"         //Controlador que hay que cargar
            }
    );

});

app.controller('MainController', function($scope, $http) {
}); 

app.controller('EntidadesBancariasController', function($scope, $http) {
    $scope.busque = "Entidad Bancaria";
    $http.get("http://localhost:8084/daIgual/api/EntidadBancaria/").success(function(resultado) {
     $scope.entidadesBancarias = resultado;
     })
     
    $scope.buscar = function() {
        $http.get("http://localhost:8084/daIgual/api/EntidadBancaria/" + $scope.busque).success(function(result) {
            $scope.entidadesBancarias = result;
        })
    }


    // en lugar de esto hacemos una nueva pagina con su controlador
    /*ABRIR READ con window.open (NO VA)*/
    /*function read(){
     window.location='http://localhost:8084/prueba_angular/read.htm';
     }
     */

    $scope.read = function(entidadBancaria) {
        window.location.href = "http://localhost:8084/daIgual/api/EntidadBancaria/" + entidadBancaria;
    }


    $scope.borrar = function(idEntidadBancaria) {
        $http.get("http://localhost:8084/daIgual/api/EntidadBancaria/" + idEntidadBancaria).success(function(result) {
            $scope.entidadesBancarias = result;

        })
    }
}); 