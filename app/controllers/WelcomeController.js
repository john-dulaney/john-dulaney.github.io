angular.module("PersonalWebsite")
.controller("WelcomeController", function ($scope, $location, CrudFactory) {
    CrudFactory.GET()
})