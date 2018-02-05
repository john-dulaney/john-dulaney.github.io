angular.module("PersonalWebsite")
    .controller("ResumeController", function ($scope, $location, CrudFactory) {
        CrudFactory.GET()
    })