//El nombre se lo ponemos como la pagina (paginaCtrl)

app.config(function($routeProvider) {

    $routeProvider.when("/cliente/detalles/:idCliente", //Ruta que usaremos para que cargue
            {
                templateUrl:"cliente/detalles.html", //Pagina que hay que cargar
                controller: "ClienteDetailController"         //Controlador que hay que cargar

            }
    );

});

app.controller('ClienteDetailController', function($scope, $http, urlBase,$routeParams) {
   $scope.cliente=[];
   $scope.idCliente = 1;
    $http.get(urlBase + "/api/Cliente/"+$scope.idCliente).success(function(resultado) {
        $scope.cliente = resultado; 
        
    }
);


}); 