app.config(function($routeProvider) {
    $routeProvider.when("/movimientobancario/search", //Ruta que usaremos para que cargue
            {
                templateUrl: "movimientobancario/search.html", //Pagina que hay que cargar
                controller: "MovimientosBancariosSearchController"         //Controlador que hay que cargar
            }
    );
});
app.controller('MovimientosBancariosSearchController', function($scope, $http) {
});