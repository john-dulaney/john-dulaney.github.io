angular.module("JDWebsite")
    .controller("navCtrl", function ($window, $scope, $location) {

        $scope.toProjects = function () {
            $location.url("/projects")
        }

        $scope.toSplash = function () {
            $location.url("/splash")
        }

        // $scope.toPdf = function() {
        //     $location.url("/pdf")
        // }

        $scope.toTech = function () {
            $location.url("/technologies")
        }

        $scope.toGitHub = function () {
            $window.open("https://github.com/john-dulaney")
        }

        $scope.toLinkedIn = function () {
            $window.open("https://www.linkedin.com/in/john-dulaney-032143130/")
        }

        $scope.toSendEmail = function () {
            $window.open("mailto:john.s.dulaney1@gmail.com")
        }
    })