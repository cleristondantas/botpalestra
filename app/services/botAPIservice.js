angular.module("botrod")
    .factory("nodeAPI", function ($http, config) {

    $http.defaults.headers.post["Content-Type"] = "application/json";

    var _getQtdMensagens = function () {
        // return $http.get(config.baseUrl + "url");
    };

    var _getPessoas = function () {
        return $http.get(config.baseUrl + "users");
    };

    return {
        getQtdMensagens: _getQtdMensagens,
        getPessoas: _getPessoas
    };

});
