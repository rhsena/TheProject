angular.module("thebook").controller("listaProfissionalController", function ($scope) {
    

    var menu = [{
        Nome: "Sabrina",
        PerfilPhoto: "http://f.i.bol.com.br/entretenimento/fotos/gatas-do-paulistao_f_008.jpg",
        Tipo: "Loira"
    },
                {
                    Nome: "Alice",
                    PerfilPhoto: "http://surgiu.com.br/imagem/noticias/t7/230327/32286a2d87174009473017079f0a5237.jpg",
                    Tipo: "Morena"
                }];

    var carregarProfissionais = function () {
        $scope.profissionais = menu;

    };

    carregarProfissionais();
});