var app = angular.module('myApp', []);
app.controller('mainPageCtrl', function ($scope, $http) {

    $scope.user = {}
    $scope.user.username = localStorage.getItem("username");
    $scope.init = function () {
        console.log("Init");
    }

    $scope.changePage = function (page) {
        window.location = page + ".html";
    }

    $scope.movies = [
        { name : "IP Man 3" , "image" : "1.jpg"},
        { name : "Avengers Endgame" , "image" : "2.jpg"},
        { name : "Aquaman" , "image" : "3.jpg"},
    ]
});