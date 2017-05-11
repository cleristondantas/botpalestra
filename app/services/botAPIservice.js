angular.module("botrod")
    .factory("nodeAPI", function ($http, config) {

    var _getQtdMensagens = function () {
        return $http.get(config.baseUrl + "url");
    };

    var _getPessoas = function () {
        return $http.get(config.baseUrl + "url");
    };

    return {
        getQtdMensagens: _getQtdMensagens,
        getPessoas: _getPessoas
    };

});
