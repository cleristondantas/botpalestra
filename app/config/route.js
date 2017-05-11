angular.module("botrod").config(function ($routeProvider) {
    $routeProvider.when("/sorteio/", {
        templateUrl: "app/views/sorteio.html",
        controller: "sorteioCtrl",
    });
    $routeProvider.when("/home/", {
        templateUrl: "app/views/home.html",
        controller: "indexCtrl",
    });
    $routeProvider.otherwise({redirectTo: "/home"});
});
