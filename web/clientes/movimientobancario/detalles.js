//El nombre se lo ponemos como la pagina (paginaCtrl)

app.config(function($routeProvider) {

    $routeProvider.when("/movimientoBancario/detalles/:idCliente", //Ruta que usaremos para que cargue
            {
                templateUrl: "movimientobancario/detalles.html", //Pagina que hay que cargar
                controller: "MovimientosBancariosDetailController"         //Controlador que hay que cargar

            }
    );


});

app.controller('MovimientosBancariosDetailController', function($scope, $http, urlBase, $routeParams) {

    $scope.movimientosbancarios = [];
    $scope.idCuentaBancaria = 1;
    $scope.idCliente="Pepe";
    $http.get(urlBase + "/api/CuentaBancaria/" + $scope.idCuentaBancaria + "/movimientosBancarios/").success(function(resultado) {
        $scope.movimientosbancarios = resultado;

    }
    );



});
