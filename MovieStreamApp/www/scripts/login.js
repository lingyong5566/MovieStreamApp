var app = angular.module('myApp', []);
app.controller('mainPageCtrl', function ($scope, $http) {

    $scope.data = {};
    $scope.init = function () {
        console.log("Init");
    }

    $scope.changePage = function (page) {
        window.location = page + ".html";
    }

    var loginId = { 'username' : "testing123123" , 'password' : "password"};

    $scope.login = function(){
        if(loginId.username == $scope.data.username && loginId.password == $scope.data.password) {
            alert("Login success!")
            $scope.changePage("welcome")

            localStorage.setItem('username' , loginId.username );
        }
        else{
            alert("Please try again!")
        }
    }
});