//El nombre se lo ponemos como la pagina (paginaCtrl)

app.config(function($routeProvider) {

    $routeProvider.when("/cuentabancaria/detalles/:idCliente", //Ruta que usaremos para que cargue
            {
                templateUrl:"cuentabancaria/detalles.html", //Pagina que hay que cargar
                controller: "CuentaBancariaDetailController"         //Controlador que hay que cargar

            }
    );


});

app.controller('CuentaBancariaDetailController', function($scope, $http, urlBase, $httpSession) {

   $scope.cuentabancaria=[];
   $scope.idCliente = $httpSession;

    $http.get(urlBase+"/api/Cliente/"+$scope.idCliente+"/CuentaBancaria").success(function(resultado) {

        $scope.cuentabancaria=resultado;
        
    }
);
    $scope.salir = function() {
        $http.delete(urlBase + "/api/Session/").success(function() {}
        );
    };

}); 