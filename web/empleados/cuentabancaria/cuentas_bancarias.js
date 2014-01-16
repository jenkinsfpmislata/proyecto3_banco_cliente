app.config(function($routeProvider) {
    $routeProvider.when("/cuentaBancaria/search", //Ruta que usaremos para que cargue
            {
                templateUrl: "cuentabancaria/search.html", //Pagina que hay que cargar
                controller: "CuentasBancariasSearchController"         //Controlador que hay que cargar
            }
    );
});
app.controller('CuentasBancariasSearchController', function($scope, $http) {
});