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

app.controller('EntidadesBancariasSearchController', function($scope, $http, urlBase) {
    $scope.busque = "Entidad Bancaria";
    $http.get(urlBase + "/api/EntidadBancaria/").success(function(resultado) {
        $scope.entidadesBancarias = resultado;
    });
    $scope.borrar = function(idEntidadBancaria) {
        $http.delete("/daIgual/api/EntidadBancaria/" + idEntidadBancaria).success(function(result) {

        });
        $location.path("index.html");
    };

});

app.controller('EntidadesBancariasNewController', function($scope, $http, urlBase, $location) {
    
    $scope.entidadBancaria= null;
    
    
    $scope.insert = function() {

        $http.post("/daIgual/api/EntidadBancaria", $scope.entidadBancaria).success(function(result) {
            $scope.entidadBancaria = result;
        });
        $location.path("/entidadBancaria/search");
    };
    $scope.buttonOK = function() {
        $scope.insert();
    };
});


app.controller('EntidadesBancariasUpdateController', function($location,$scope, $http, urlBase, $routeParams) {
    $scope.entidadBancaria= null;
    $http.get(urlBase + "/api/EntidadBancaria/" + $routeParams.idEntidadBancaria).success(function(result) {
        $scope.entidadBancaria = result;
    });
    
    $scope.update = function() {
        $http.put("/daIgual/api/EntidadBancaria/"+$scope.entidadBancaria.idEntidad, $scope.entidadBancaria).success(function(result) {
            $scope.entidadBancaria = result;
        });
        $location.path("/entidadBancaria/search");
    };
 
    $scope.buttonOK = function() {
        $scope.update();
    };
});