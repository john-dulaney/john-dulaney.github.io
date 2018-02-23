angular.module("JDWebsite")
.controller("splashCtrl", function ($scope, $location, dataFactory) {
  
    dataFactory.populateCache.then(data => {
        $scope.splashInfo = dataFactory.getSplashInfo()
    })

})