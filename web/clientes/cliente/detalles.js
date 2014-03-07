//El nombre se lo ponemos como la pagina (paginaCtrl)

app.config(function($routeProvider) {

    $routeProvider.when("/cliente/detalles/:idCliente", //Ruta que usaremos para que cargue
            {
                templateUrl: "cliente/detalles.html", //Pagina que hay que cargar
                controller: "ClienteDetailController"         //Controlador que hay que cargar

            }
    );

});

app.controller('ClienteDetailController', function($scope, $http, urlBase, $httpSession) {
    $scope.cliente = [];
    $scope.idCliente = $httpSession;
    $http.get(urlBase + "/api/Session/" + $scope.idCliente).success(function(resultado) {
        $scope.cliente = resultado;

    }
    );

    $scope.salir = function() {
        $http.delete(urlBase + "/api/Session/").success(function() {}
        );
    };

}); 