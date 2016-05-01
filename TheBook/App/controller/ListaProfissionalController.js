angular.module("thebook").controller("listaProfissionalController", function ($scope) {
    

    var menu = [{
        Nome: "Sabrina",
        PerfilPhoto: "http://f.i.bol.com.br/entretenimento/fotos/gatas-do-paulistao_f_008.jpg",
        Tipo: "Loira",
        Cidade: "Sao Paulo"

    },
                {
                    Nome: "Alice",
                    PerfilPhoto: "http://surgiu.com.br/imagem/noticias/t7/230327/32286a2d87174009473017079f0a5237.jpg",
                    Tipo: "Morena",
                    Cidade: "Porto Alegre"
                },
                {
                    Nome: "Maria",
                    PerfilPhoto: "http://1.bp.blogspot.com/-SPtDW1Frd04/ULZGInNvLjI/AAAAAAAAEOc/k4h1lT3RThM/s1600/74218_169029859909140_2138266200_n.jpg",
                    Tipo: "Morena",
                    Cidade: "Porto Alegre"

                }, {
                    Nome: "Josefina",
                    PerfilPhoto: "http://1.bp.blogspot.com/-ntHfIi38eeQ/VmDb8yQP-5I/AAAAAAAAu6w/gotKQ08edSY/s1600/GOSTOSAS.jpg",
                    Tipo: "Morena",
                    Cidade: "Sao Paulo"

                }, {
                    Nome: "Paula",
                    PerfilPhoto: "http://www.professordaltro.com.br/images/noticias/10030027032014apresentacao1dddddd.gif",
                    Tipo: "Loira",
                    Cidade: "Curitiba"

                }, {
                    Nome: "Aryane",
                    PerfilPhoto: "http://gcn.net.br/dir-arquivo-imagem/2012/01/%7B20120120001356%7D_aryane.jpg",
                    Tipo: "Loira",
                    Cidade: "Fortaleza"

                }, {
                    Nome: "Alena",
                    PerfilPhoto: "http://wp.clicrbs.com.br/holofote/files/2014/06/Alena-Seredova.jpg",
                    Tipo: "Morena",
                    Cidade: "Sao Paulo"

                }, {
                    Nome: "Sara",
                    PerfilPhoto: "https://niggasvictory.files.wordpress.com/2015/10/garotas0007-garotas-sensuais-tesuda-sexy-gostosa-buceta-bunda-loira-loirinha-morena-moreninha-suplex-biquini-praia-amadora-fotos-ninfeta-rabuda_12_4.jpg",
                    Tipo: "Loira",
                    Cidade: "Brasilia"

                },
                 {
                     Nome: "Jean",
                     PerfilPhoto: "https://pbs.twimg.com/media/BEJVGC3CcAAUT_j.jpg",
                     Tipo: "Ruiva",
                     Cidade: "Sao Paulo"
                 },
                 {
                     Nome: "Julia",
                     PerfilPhoto: "https://chusmartinez1.files.wordpress.com/2012/12/chusmartinezred1.jpg",
                     Tipo: "Ruiva",
                     Cidade: "Curitiba"
                 }

    ];

    $scope.caracteristicasEscolhidas = [];

    $scope.toggleSelection = function (valor) {
        var estaselecionada = $scope.caracteristicasEscolhidas.indexOf(valor);
        if (estaselecionada > -1) {
            $scope.caracteristicasEscolhidas.splice(estaselecionada, 1);
        }
        else {
            $scope.caracteristicasEscolhidas.push(valor);
        }
    };

    $scope.caracteristicas = [  "Loira" , "Morena", "Ruiva", "Mulata"];
    var carregarProfissionais = function () {
        $scope.profissionais = menu;

    };

    carregarProfissionais();
});