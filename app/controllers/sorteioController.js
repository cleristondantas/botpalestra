"use strict";
angular.module("botrod")
    .controller("sorteioCtrl", function ($scope, $routeParams) {
    $scope.sortudo = {nome: 'Nome Sorteado', id: 1};

var participantes = [{
    id: 100000845303368,
    nome: 'Leandro Pedrosa',
    sorteado: false
}, {
    id: 3423432,
    nome: 'Salviano Ludgerio',
    sorteado: false
}, {
    id: 12312312,
    nome: 'Rodney',
    sorteado: false
}, {
    id: 1384159873,
    nome: 'Clériston Dantas',
    sorteado: false
}, {
    id: 5,
    nome: 'Larissa Santos',
    sorteado: false
}, {
    id: 6,
    nome: 'Thiago',
    sorteado: false
}, {
    id: 7,
    nome: 'Marcinha',
    sorteado: false
}, {
    id: 32423432,
    nome: 'Luiz Gustavo',
    sorteado: false
}, {
    id: 23423432,
    nome: 'Thalisson Estrela',
    sorteado: false
}, {
    id: 10,
    nome: 'Ruiter',
    sorteado: false
}];

$scope.pessoas = participantes;

var qtd = 5;

var sorteio = {
    _qtdSorteado: 0,
    _sorteadosPos: [],
    _sorteados: [],
    init: function(participantes, qtd) {
        if (typeof participantes != 'object') {
            throw "Os participantes tem que estar na forma de object";
        }
        if (typeof qtd != 'number') {
            throw "A quantidade de sorteado tem que ser um número";
        }
        if (participantes.length == 0) {
            throw "Não existe nenhum participante";
        }
        if (qtd < 1) {
            throw "A quantidade tem que ser maior que 0";
        }
        this._participantes = participantes;
        this._pote = participantes;
        this._qtd = (participantes.length >= qtd) ? qtd : participantes.length;
    },

    sortear: function() {
        // console.log(' ------ INICIO DO SORTEIO ------ ');
        if (this._qtdSorteado >= this._qtd) {
            return false;
            // throw "Quantidade máxima já sorteada";
        }

        do {
            var posicao = Math.floor(Math.random() * this._pote.length);
            // console.log('posicao: ', posicao);
        } while (this._sorteadosPos.indexOf(posicao) > -1);


        var sorteado = this._pote[posicao];
        this._sorteadosPos.push(posicao);
        this._sorteados.push(sorteado);
        this._qtdSorteado++;
        sorteado.sorteado = true;
        this._participantes[posicao] = sorteado;
        // console.log('qtd sorteado: ', this._qtdSorteado);
        // console.log('sorteados: ', this._sorteados);
        // console.log('sorteado: ', sorteado);
        // console.log(' ------ FIM DO SORTEIO ------ ');
        return sorteado;
    },

    getSorteados: function() {
        return this._sorteados;
    }
}
try {

    sorteio.init(participantes, qtd);

    $scope.sorteiaCarinha = function(){

        var sorteado = sorteio.sortear();

        if (typeof sorteado == 'object') {

            $scope.sortudo = sorteado;
            $scope.pessoas = sorteio._participantes;
        } else {

        }


    }

} catch (err) {
    console.log(err);
}


});



