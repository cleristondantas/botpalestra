angular.module("botrod")
.controller("indexCtrl", function ($scope, $routeParams, $rootScope, nodeAPI) {

    console.log($rootScope.brinde1);

     $scope.quantidadeMensagens = 100;

        $scope.quantidadeBrindes = 12;

        var scora = 3;
        var scorb = 8;
        var scorc = $scope.quantidadeBrindes;

        $scope.pessoas = '';

        nodeAPI.getPessoas().then(function(response) {

            console.log(response.data.users);
            $scope.pessoas = response.data.users;

        });

        // $scope.pessoas = [
        //     { nome: 'Cleriston Dantas', id: 1384159873 },
        //     { nome: 'Salviano Ludgerio', id: 1122221 },
        //     { nome: 'Pedrosa', id: 1122221 },
        //     { nome: 'Thiago Pereira', id: 1122221 },
        //     { nome: 'Marcia Santos', id: 1122221 },

        // ];

        $scope.qtdPessoas = $scope.pessoas.length;


    $scope.calculaPorcentagens =  function(){

        $rootScope.brinde1 = ((100*$scope.qtdPessoas)/scora) >= 100 ? 100 : Math.round(((100*$scope.qtdPessoas)/scora));
        $scope.brinde2 = ((100*$scope.qtdPessoas)/scorb) >= 100 ? 100 : Math.round(((100*$scope.qtdPessoas)/scorb));
        $scope.brinde3 = ((100*$scope.qtdPessoas)/scorc) >= 100 ? 100 : Math.round(((100*$scope.qtdPessoas)/scorc));

    };

    $scope.calculaPorcentagens();

    $('#easypiechart-teal').easyPieChart({
        scaleColor: false,
        barColor: '#1ebfae',

    });

    $('#easypiechart-orange').easyPieChart({
        scaleColor: false,
        barColor: '#ffb53e'
    });

    $('#easypiechart-red').easyPieChart({
        scaleColor: false,
        barColor: '#f9243f'
    });

   $('#easypiechart-blue').easyPieChart({
       scaleColor: false,
       barColor: '#30a5ff'
   });

});
