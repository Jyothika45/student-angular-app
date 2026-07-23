var app = angular.module('campus360', []);

app.controller("dashboardcontroller", function ($scope) {


    $scope.collegename = "FISAT";
    $scope.totalstudents = 60;
    $scope.totalfaculty = 50;

    console.log("dashboard controller is loaded");

    $scope.students = [
        "achu", "appu", "ammu", "jyothika"
    ];

  
        $scope.showstudents = false;
        $scope.showDashboard = true;

        $scope.fees = 25000;
        $scope.today = new Date();

        $scope.departments=[
            "CSE","MCA","MBA","MCOM","ECE","IMCA","BCA"
        ];

        $scope.selectedDept = "MCA";


        $scope.isDisabled = true;
        $scope.allowAdmission = function(){

            $scope.isDisabled = false;
        };


        $scope.isReadOnly = true;
        $scope.toogleReadOnly = function (){
            
            $scope.isReadOnly = !$scope.isReadOnly;
        };


        $scope.student={};
        $scope.registerstudent = function () {

            if ($scope.studentForm.$valid) {
                alert("Student Registered Successfully");
            }
            else {
                alert("Please Fill All Required Fields Correctly");
            }

        };

    $scope.addstudents = function () {
        $scope.totalstudents++;
    };

});