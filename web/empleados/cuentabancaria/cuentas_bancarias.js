app.config(function($routeProvider) {
    $routeProvider.when("/cuentaBancaria/search", //Ruta que usaremos para que cargue
            {
                templateUrl: "cuentabancaria/search.html", //Pagina que hay que cargar
                controller: "CuentasBancariasSearchController"         //Controlador que hay que cargar
            }
    );
        
        $routeProvider.when("/cuentaBancaria/new", //Ruta que usaremos para que cargue
            {
                templateUrl: "cuentabancaria/detail.html", //Pagina que hay que cargar
                controller: "CuentasBancariasNewController"         //Controlador que hay que cargar
            }
    );
    $routeProvider.when("/cuentaBancaria/update/:idCuentaBancaria", //Ruta que usaremos para que cargue
            {
                templateUrl: "cuentabancaria/detail.html", //Pagina que hay que cargar
                controller: "CuentasBancariasUpdateController"         //Controlador que hay que cargar
            }
    );
    $routeProvider.when("/cuentaBancaria/detalle/:idCuentaBancaria", //Ruta que usaremos para que cargue
            {
                templateUrl: "cuentabancaria/detalles.html", //Pagina que hay que cargar
                controller: "CuentasBancariasDetalleController"         //Controlador que hay que cargar
            }
    );
        
});

app.controller('CuentasBancariasSearchController', function($scope, $http, urlBase) {

    $scope.cuenta = null;
    $scope.cuentasBancarias = [];
    $scope.nombreCuentaBancaria = null;
    $scope.cif = "";
    
    $scope.buscar = function() {
        
        $http.get(urlBase+"/api/CuentaBancaria?cif="+$scope.cif).success(function(result) {
            
            $scope.cuentasBancarias = result;
            
        });
    };
    
    $http.get(urlBase + "/api/CuentaBancaria/").success(function(resultado) {
        $scope.cuentasBancarias = resultado;
        
    });
    $scope.borrar = function(idCuentaBancaria) {
        $http.delete(urlBase + "/api/CuentaBancaria/" + idCuentaBancaria).success(function(result) {

        });
        $location.path("/cuentabancaria/search");
    };
    
    $scope.buscar();
});

app.controller('CuentasBancariasNewController', function($scope, $http, urlBase, $location) {
    
    
    
    $scope.entidadesBancarias;
 
    $scope.idEntidad = null;
    
    $scope.sucursalesBancarias;
 
    $scope.sucursal = null;
    
    $scope.cuentaBancaria= null;
    
    $scope.$watch("idEntidad",
            function() {

                if ($scope.idEntidad) {
                    $http.get(urlBase + "/api/EntidadBancaria/" + $scope.idEntidad + "/sucursalesBancarias/").success(function(resultado) {
                        $scope.sucursalesBancarias = resultado;
                    });
                } else {
                    $scope.sucursalesBancarias = [];
                }

            });
    
    
    
    $http.get(urlBase + "/api/EntidadBancaria/").success(function(resultado) {
        $scope.entidadesBancarias = resultado;
        
    });
    $scope.insert = function() {

        $http.post(urlBase + "/api/CuentaBancaria/", $scope.cuentaBancaria).success(function(result) {
            $scope.cuentaBancaria = result;
        });
        $location.path("/cuentabancaria/search");
    };
    $scope.buttonOK = function() {
        $scope.insert();
    };
});


app.controller('CuentasBancariasUpdateController', function($location,$scope, $http, urlBase, $routeParams) {
    $scope.cuentaBancaria= null;
    $http.get(urlBase + "/api/CuentaBancaria/" + $routeParams.idCuentaBancaria).success(function(result) {
        $scope.cuentaBancaria = result;
    });
    $scope.descativa="disabled";
    $scope.update = function() {
        $http.put(urlBase + "/api/CuentaBancaria/"+$scope.cuentaBancaria.idCuentaBancaria, $scope.cuentaBancaria).success(function(result) {
            $scope.cuentaBancaria = result;
        });
        $location.path("/cuentabancaria/search");
    };
 
    $scope.buttonOK = function() {
        $scope.update();
    };
});
app.controller('CuentasBancariasDetalleController', function($location,$scope, $http, urlBase, $routeParams) {
    $scope.cuentaBancaria= null;
    $scope.movimientosBancarios = [];
    $http.get(urlBase + "/api/CuentaBancaria/" + $routeParams.idCuentaBancaria).success(function(result) {
        $scope.cuentaBancaria = result;
    
    $http.get(urlBase + "/api/CuentaBancaria/"+$scope.cuentaBancaria.idCuentaBancaria+"/movimientosBancarios/").success(function(result) {
       $scope.movimientosBancarios = result;
       
    });
    
    });
    
    
    
    
});