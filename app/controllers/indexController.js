angular.module("botrod")
.controller("indexCtrl", function ($scope, $routeParams, $rootScope, nodeAPI, config) {

    $scope.quantidadeMensagens = 100;

    $scope.quantidadeBrindes = config.brindes;

    var scora = 3;
    var scorb = 8;
    var scorc = config.brindes;

    $scope.pessoas;

    $scope.getPessoas = function() {
        nodeAPI.getPessoas().then(function(response) {
            var users = response.data.users;

            $scope.pessoas = formataArray(users);

            $scope.qtdPessoas = $scope.pessoas.length;
            $scope.calculaPorcentagens();
        });
    }

    $scope.getPessoas();

    $scope.calculaPorcentagens =  function(){
        $rootScope.brinde1 = ((100*$scope.qtdPessoas)/scora) >= 100 ? 100 : Math.round(((100*$scope.qtdPessoas)/scora));
        $scope.brinde2 = ((100*$scope.qtdPessoas)/scorb) >= 100 ? 100 : Math.round(((100*$scope.qtdPessoas)/scorb));
        $scope.brinde3 = ((100*$scope.qtdPessoas)/scorc) >= 100 ? 100 : Math.round(((100*$scope.qtdPessoas)/scorc));
    };

    function formataArray(users)
    {
        var pessoas = [];
        for (var i = 0; i < users.length; i++) {
            pessoas.push({nome : users[i].fb_name, id : users[i].fb_id, sorteado : false});
        }
        return pessoas;
    }


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
