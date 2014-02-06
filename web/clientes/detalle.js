//El nombre se lo ponemos como la pagina (paginaCtrl)

app.config(function($routeProvider) {

    $routeProvider.when("/", //Ruta que usaremos para que cargue
            {
                templateUrl: "detalle.html", //Pagina que hay que cargar
                controller: "MainController"         //Controlador que hay que cargar

            }
    );

  /*  $routeProvider.when("/:idCliente", //Ruta que usaremos para que cargue
            {
                templateUrl:"detalle.html", //Pagina que hay que cargar
                controller: "ClienteDetalleController" //Controlador que hay que cargar
            }
    );
*/
});

app.controller('MainController', function($scope, $http) {




}); 