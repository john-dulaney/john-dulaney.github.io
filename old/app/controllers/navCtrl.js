angular.module("JDWebsite")
    .controller("navCtrl", function ($window, $scope, $location) {

        $scope.showProjects = function () {
            $location.url("/projects")
        }

        $scope.showSplash = function () {
            $location.url("/splash")
        }

        // $scope.showPdf = function() {
        //     $location.url("/pdf")
        // }

        $scope.showTech = function () {
            $location.url("/technologies")
        }

        $scope.showGitHub = function () {
            $window.open("https://github.com/john-dulaney")
        }

        $scope.showLinkedIn = function () {
            $window.open("https://www.linkedin.com/in/john-dulaney-032143130/")
        }

        $scope.toSendEmail = function () {
            $window.open("mailto:john.s.dulaney1@gmail.com")
        }
    })