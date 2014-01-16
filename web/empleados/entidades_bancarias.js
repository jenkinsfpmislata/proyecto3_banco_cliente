app.config(function($routeProvider) {
    $routeProvider.when("#/entidadBancaria", //Ruta que usaremos para que cargue
            {
                templateUrl: "entidades_bancarias.html", //Pagina que hay que cargar
                controller: "EntidadesBancariasController"         //Controlador que hay que cargar
            }
    );

});


app.controller('EntidadesBancariasController', function($scope, $http) {
    
    
    
    
}); 