app.config(function($routeProvider) {
    $routeProvider.when("/sucursalBancaria/new/:idEntidadBancaria", //Ruta que usaremos para que cargue
            {
                templateUrl: "sucursalbancaria/detail.html", //Pagina que hay que cargar
                controller: "SucursalBancariaNewController"         //Controlador que hay que cargar
            }
    );
    $routeProvider.when("/sucursalBancaria/update/:idSucursal", //Ruta que usaremos para que cargue
            {
                templateUrl: "sucursalbancaria/detail.html", //Pagina que hay que cargar
                controller: "SucursalBancariaUpdateController"         //Controlador que hay que cargar
            }
    );
    $routeProvider.when("/sucursalBancaria/search/:idEntidadBancaria", //Ruta que usaremos para que cargue
            {
                templateUrl: "entidadbancaria/detalles.html", //Pagina que hay que cargar
                controller: "SucursalesBancariasFromEntidadBancariaController"         //Controlador que hay que cargar
            }
    );
});
app.controller('SucursalesBancariasFromEntidadBancariaController', function($scope, $http, urlBase, $routeParams, $route) {
    $scope.entidadBancaria = null;
    $scope.sucursalesBancarias = [];

    $http.get(urlBase + "/api/EntidadBancaria/" + $routeParams.idEntidadBancaria).success(function(result) {
        $scope.entidadBancaria = result;

        $http.get(urlBase + "/api/EntidadBancaria/" + $scope.entidadBancaria.idEntidad + "/sucursalesBancarias/").success(function(result) {
            $scope.sucursalesBancarias = result;
        });
    });


    $scope.borrar = function(idSucursal) {
        $http.delete(urlBase + "/api/SucursalBancaria/" + idSucursal).success(function(result) {
        });
        $route.reload();
    };
});
app.controller('SucursalBancariaNewController', function($scope, $http, urlBase, $location, $routeParams) {

    $scope.idEntidadBancaria = $routeParams.idEntidadBancaria;
    $scope.entidadesBancarias = null;
    $scope.sucursalBancaria = null;

    $http.get(urlBase + "/api/EntidadBancaria/" + $scope.idEntidadBancaria).success(function(resultado) {
        $scope.entidadesBancarias = resultado;


    });

    $scope.insert = function() {

        $scope.sucursalBancaria.entidadBancaria = $scope.entidadesBancarias;

        $http.post(urlBase + "/api/SucursalBancaria/", $scope.sucursalBancaria).success(function(result) {
            $scope.sucursalBancaria = result;
        });
        $location.path("/sucursalBancaria/search/" + $scope.idEntidadBancaria);
    };
    $scope.buttonOK = function() {
        $scope.insert();
    };
});
app.controller('SucursalBancariaUpdateController', function($location, $scope, $http, urlBase, $routeParams) {
    $scope.idSucursalBancaria = $routeParams.idSucursal;

    $scope.sucursalBancaria = null;
    $http.get(urlBase + "/api/SucursalBancaria/" + $scope.idSucursalBancaria).success(function(result) {
        $scope.sucursalBancaria = result;
    });
    //$scope.descativa="disabled";
    $scope.update = function() {
        $http.put(urlBase + "/api/SucursalBancaria/" + $scope.sucursalBancaria.idSucursalBancaria, $scope.sucursalBancaria).success(function(result) {
            $scope.sucursalBancaria = result;
        }, function() {
            alert("Error");
        });
        $location.path("/sucursalBancaria/search/" + $scope.sucursalBancaria.entidadBancaria.idEntidad);
    };

    $scope.buttonOK = function() {
        $scope.update();
    };
});
