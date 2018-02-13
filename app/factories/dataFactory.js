// Imports
angular.module("JDWebsite")
    .factory("dataFactory", function ($http, $timeout, $location, $route) {

        return Object.create(null, {
            "cache": {
                value: null,
                writable: true
            },
            "populateCache": {
                value: $http.get('john-dulaney.github.io/data/data.json')
                    .then(response => {
                        console.log(response)
                        this.cache = response
                        return response
                    })
            },
            "getSplashInfo": {
                value: () => this.cache.data.splash,
                writable: false
            },
            "getProjects": {
                value: () => this.cache.data.myProjects,
                writable: true
            }
        })
    })