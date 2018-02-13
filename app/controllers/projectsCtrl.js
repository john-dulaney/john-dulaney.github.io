angular.module("JDWebsite")
    .controller("projectsCtrl", function ($window, $scope, $location, dataFactory) {

        dataFactory.populateCache.then(data => {
            $scope.myProjects = dataFactory.getProjects()
        })


        $scope.linkTo = function (url) {
            $window.open(url)
        }
    })