var app = angular.module('myApp', []);
app.controller('mainPageCtrl', function ($scope, $http) {
    $scope.init = function () {
        console.log("Init");
    }

    $scope.changePage = function (page) {
        window.location = page + ".html";
    }
});