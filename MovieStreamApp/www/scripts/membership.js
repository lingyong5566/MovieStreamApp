var app = angular.module('myApp', []);
app.controller('mainPageCtrl', function ($scope, $http) {

    $scope.user = {}
    $scope.user.username = localStorage.getItem("username");

    $scope.membershipDetails = [
        { 'id' : 1, 'name' : "Gold Membership" , 'price' : 24.99 , 'desc' : "Unlimited Streaming"},
        { 'id' : 2, 'name' : "Silver Membership" , 'price' : 14.99 , 'desc' : "10 Movies per day"},
        { 'id' : 3, 'name' : "Normal Membership" , 'price' : 5.99 , 'desc' : "3 Movies per day"}
    ]
    $scope.init = function () {
        console.log("Init");
    }

    $scope.changePage = function (page) {
        window.location = page + ".html";
    }

    $scope.getMembership = function (membership){
        console.warn(membership)
        localStorage.setItem('membership' , membership.id);
        localStorage.setItem('membershipName' , membership.name);
        $scope.changePage('payment')
    }
});