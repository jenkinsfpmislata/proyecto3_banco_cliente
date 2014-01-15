//El nombre se lo ponemos como la pagina (paginaCtrl)

app.config(function($routeProvider) {
    $routeProvider.when("/", //Ruta que usaremos para que cargue
            {
                templateUrl: "main.html", //Pagina que hay que cargar
                controller: "MainController"         //Controlador que hay que cargar
            }
    )

    $routeProvider.when("/cuentaBancaria/search", //Ruta que usaremos para que cargue
            {
                templateUrl: "cuentas.html", //Pagina que hay que cargar
                controller: "MainController"         //Controlador que hay que cargar
            }
    )

});




app.controller('MainController', function($scope, $http) {




}); 