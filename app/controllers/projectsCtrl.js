angular.module("JDWebsite")
    .controller("projectsCtrl", function ($window, $scope, $location, dataFactory) {

        $scope.projects = dataFactory.getProjects()
        $scope.projCount = 0
        for (p in $scope.projects) {
            $scope.projCount++
        }
        $scope.projDisplay = "1"
        $scope.grabDisplay = "1"

        $scope.rightClick = function (proj) {
            if (parseInt(proj) < $scope.projCount) {
                $scope.projDisplay = JSON.stringify(parseInt(proj) + 1)
                $scope.grabDisplay = "1"
            }
        }

        $scope.leftClick = function (proj) {
            if (parseInt(proj) > 1) {
                $scope.projDisplay = JSON.stringify(parseInt(proj) - 1)
                $scope.grabDisplay = "1"

            }
        }

        $scope.changeGrab = function (grab) {
            if ($scope.grabDisplay != grab) {
                $scope.grabDisplay = grab
            }
        }

        $scope.numbClick = function (numb) {
            if ($scope.projDisplay != numb) {
                $scope.projDisplay = numb
            }
        }

        $scope.linkTo = function (url) {
            $window.open(url)
        }
    })