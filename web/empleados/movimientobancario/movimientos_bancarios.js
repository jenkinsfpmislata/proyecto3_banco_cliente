app.config(function($routeProvider) {
         
        $routeProvider.when("/movimientoBancario/new/:id", //Ruta que usaremos para que cargue
            {
                templateUrl: "movimientobancario/insertMovement.html", //Pagina que hay que cargar
                controller: "MovimientosBancariosNewController"         //Controlador que hay que cargar
            }
    );
    
        
});


app.controller('MovimientosBancariosNewController', function($scope, $http, urlBase, $location,$routeParams) {
    
    $scope.idCuenta = $routeParams.id;
    
    $scope.cuentaBancaria;
 
    $scope.movimientoBancario = null;
    
    
    
    $http.get(urlBase + "/api/CuentaBancaria/"+$scope.idCuenta).success(function(resultado) {
        $scope.cuentaBancaria = resultado;
        
        
    });
    
   
    $scope.insert = function() {
        
         $scope.movimientoBancario.cuenta =  $scope.cuentaBancaria;

        $http.post(urlBase + "/api/MovimientoBancario/", $scope.movimientoBancario).success(function(result) {
            $scope.movimientoBancario = result;
        });
        $location.path("/cuentaBancaria/detalle/"+ $scope.idCuenta);
    };
    $scope.buttonOK = function() {
        $scope.insert();
    };
});


