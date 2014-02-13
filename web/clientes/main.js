
app.config(function($routeProvider) {
    $routeProvider.when("/",  /*main/:idCliente"*///Ruta que usaremos para que cargue
            {
                templateUrl: "main.html", //Pagina que hay que cargar
                controller: "MainController"         //Controlador que hay que cargar
            }
    );
   
});
app.controller('MainController', function($scope, $http, $routeParams, urlBase) {
    
   // $scope.idCliente=$routeParams.idCliente; // guardar el id 
});


