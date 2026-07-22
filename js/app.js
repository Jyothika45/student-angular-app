var app = angular.module('campus360', []);

app.controller("dashboardController", function ($scope) {

    console.log("Dashboard Controller is loaded");

    $scope.collegename = "FISAT";
    $scope.totstud = 60;
    $scope.totfac = 10;
    $scope.name = "Jyothika";
    $scope.department = "Computer Science";
    $scope.email = "jyothika@example.com";
    $scope.phone = "1234567890";
    $scope.showstudent = false;

    $scope.students = [
        "Alice","Appu","Ammu","Kuttu"
    ];



    $scope.fees = 1000;
    $scope.today = new Date();

    $scope.departments = ["CSE", "ECE", "EEE", "MECH", "CIVIL","MCA"];
    $scope.selectedDepartments = ["MCA"];

});