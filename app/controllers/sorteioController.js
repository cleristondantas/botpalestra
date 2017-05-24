"use strict";
angular.module("botrod")
    .controller("sorteioCtrl", function ($scope, $routeParams, nodeAPI, config) {
    $scope.sortudo = {nome: 'Nome Sorteado', id: 4};

var participantes = [];

    $scope.getPessoas = function() {
        nodeAPI.getPessoas().then(function(response) {
            var users = response.data.users;

            participantes = formataArray(users);
            $scope.qtdPessoas = participantes.length;

            podeSortear();
            console.log(participantes);
        });
    }

    $scope.getPessoas();

    function formataArray(users)
    {
        var pessoas = [];
        for (var i = 0; i < users.length; i++) {
            pessoas.push({nome : users[i].fb_name, id : users[i].fb_id, sorteado : false});
        }
        return pessoas;
    }

function podeSortear(){

    $scope.pessoas = participantes;

    var qtd = config.brindes;

    if(participantes.length > config.brindes){
        qtd = participantes.length
    }

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


            nodeAPI.sendGanhador(sorteado);
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
                $scope.desabilitaBotao = true;
            }


        }

    } catch (err) {
        console.log(err);
    }
}

});



