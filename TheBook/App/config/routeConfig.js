angular.module("thebook").config(function ($routeProvider) {
    $routeProvider.when("/index", {
        templateUrl: "index.html"
    
    });
    $routeProvider.when("/profissionais", {
        templateUrl: "listaProfissional.html",
        controller: "listaProfissionalController"
       
    });
    $routeProvider.when("/cadastro", {
        templateUrl: "cadastroProfissional.html",
        controller: "cadastroController"
    });
    $routeProvider.when("/comoFunciona", {
        templateUrl: "comoFunciona.html",
        controller: "comoFuncionaController"
    });

    //$routeProvider.otherwise({ redirectTo: "/index" });

});