
app.config(function($routeProvider) {
    $routeProvider.when("/", //Ruta que usaremos para que cargue
            {
                templateUrl: "main.html", //Pagina que hay que cargar
                controller: "MainController"         //Controlador que hay que cargar
            }
    );
    $routeProvider.when("/entidadBancaria/search", //Ruta que usaremos para que cargue
            {
                templateUrl: "entidades_bancarias.html", //Pagina que hay que cargar
                controller: "EntidadesBancariasController"         //Controlador que hay que cargar
            }
    );
    $routeProvider.when("/cuentaBancaria/search", //Ruta que usaremos para que cargue
            {
                templateUrl: "cuentas.html", //Pagina que hay que cargar
                controller: "MainController"         //Controlador que hay que cargar
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
        });
    }

    $scope.read = function(entidadBancaria) {
        window.location.href = "http://localhost:8084/daIgual/api/EntidadBancaria/" + entidadBancaria;
    }

    $scope.borrar = function(idEntidadBancaria) {
        $http.get("http://localhost:8084/daIgual/api/EntidadBancaria/" + idEntidadBancaria).success(function(result) {
            $scope.entidadesBancarias = result;

        });
    }
});

