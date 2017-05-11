angular.module("botrod")
.controller("sorteioCtrl", function ($scope, $routeParams) {

    $scope.pessoas = [
        { nome: 'Cleriston Dantas', id: 1122221, sorteado: true },
        { nome: 'Salviano Ludgerio', id: 1122221, sorteado: false },
        { nome: 'Pedrosa', id: 1122221, sorteado: false },
        { nome: 'Thiago Pereira', id: 1122221, sorteado: true },
        { nome: 'Marcia Santos', id: 1122221, sorteado: false },
    ];

});
