app.config(function($routeProvider) {
    $routeProvider.when("/entidadBancaria/search", //Ruta que usaremos para que cargue
            {
                templateUrl: "entidadbancaria/search.html", //Pagina que hay que cargar
                controller: "EntidadesBancariasSearchController"         //Controlador que hay que cargar
            }
    );
    $routeProvider.when("/entidadBancaria/new", //Ruta que usaremos para que cargue
            {
                templateUrl: "entidadbancaria/detail.html", //Pagina que hay que cargar
                controller: "EntidadesBancariasNewController"         //Controlador que hay que cargar
            }
    );
    $routeProvider.when("/entidadBancaria/update/:idEntidadBancaria", //Ruta que usaremos para que cargue
            {
                templateUrl: "entidadbancaria/detail.html", //Pagina que hay que cargar
                controller: "EntidadesBancariasUpdateController"         //Controlador que hay que cargar
            }
    );


});
/*ruta editar y nuevo*/

app.controller('EntidadesBancariasSearchController', function($scope, $http, urlBase, $route) {

    $scope.entidad = null;
    $scope.entidadesBancarias = [];
    $scope.nombreEntidadBancaria = null;
    $scope.nombre = "";



    $http.get(urlBase + "/api/EntidadBancaria/").success(function(resultado) {
        $scope.entidadesBancarias = resultado;

    });

    $scope.buscar = function() {

        $http.get(urlBase + "/api/EntidadBancaria/?nombre=" + $scope.nombre).success(function(result) {
            $scope.entidadesBancarias = result;
        });
    };

    $scope.borrar = function(idEntidadBancaria) {
        $http.delete(urlBase + "/api/EntidadBancaria/" + idEntidadBancaria).success(function(result) {
        });

        $route.reload()
    };

    $scope.buscar();
});

app.controller('EntidadesBancariasNewController', function($scope, $http, urlBase, $location) {

    $scope.entidadBancaria = null;

    $scope.insert = function() {

        $http.post(urlBase + "/api/EntidadBancaria/", $scope.entidadBancaria).success(function(result) {
            $scope.entidadBancaria = result;
        });
        $location.path("/entidadBancaria/search");
    };
    $scope.buttonOK = function() {
        $scope.insert();
    };
});


app.controller('EntidadesBancariasUpdateController', function($location, $scope, $http, urlBase, $routeParams) {
    $scope.entidadBancaria = null;
    $http.get(urlBase + "/api/EntidadBancaria/" + $routeParams.idEntidadBancaria).success(function(result) {
        $scope.entidadBancaria = result;
    });
    $scope.descativa = "disabled";
    $scope.update = function() {
        $http.put(urlBase + "/api/EntidadBancaria/" + $scope.entidadBancaria.idEntidad, $scope.entidadBancaria).success(function(result) {
            $scope.entidadBancaria = result;
        });
        $location.path("/entidadBancaria/search");
    };

    $scope.buttonOK = function() {
        $scope.update();
    };
});
