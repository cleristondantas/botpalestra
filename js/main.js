angular.module('project', [])
    .controller('Bot', function($scope) {

        $scope.quantidadeMensagens = 100;

        $scope.quantidadeBrindes = 12;

        var scora = 3;
        var scorb = 8;
        var scorc = $scope.quantidadeBrindes;


        $scope.pessoas = [
            { nome: 'Cleriston Dantas', id: 1122221 },
            { nome: 'Salviano Ludgerio', id: 1122221 },
            { nome: 'Pedrosa', id: 1122221 },
            { nome: 'Thiago Pereira', id: 1122221 },
            { nome: 'Marcia Santos', id: 1122221 },

        ];

        $scope.qtdPessoas = $scope.pessoas.length;

        $scope.brinde1 = ((100*$scope.qtdPessoas)/scora) >= 100 ? 100 : Math.round(((100*$scope.qtdPessoas)/scora));
        $scope.brinde2 = ((100*$scope.qtdPessoas)/scorb) >= 100 ? 100 : Math.round(((100*$scope.qtdPessoas)/scorb));
        $scope.brinde3 = ((100*$scope.qtdPessoas)/scorc) >= 100 ? 100 : Math.round(((100*$scope.qtdPessoas)/scorc));

    });
