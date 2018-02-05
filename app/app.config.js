// Author(s): Structure` by Steve Brownlee, High Wizard of NSS. Refactored by John Dulaney
// Purpose: This module checks the user with firebase. Changes partials based on thei auth
// ┌(° ͜ʖ͡°)┘

angular.module("PersonalWebsite").constant("FIREBASE_CONFIG", {
    apiKey: "AIzaSyD_w-miDKvl2jeZP6-Km94bc0TCfOhHBj4",
    authDomain: "personal-site-ffb9c.firebaseapp.com",
    databaseURL: "https://personal-site-ffb9c.firebaseio.com",
    projectId: "personal-site-ffb9c",
    storageBucket: "personal-site-ffb9c.appspot.com",
    messagingSenderId: "126279178759"
})

angular.module("PersonalWebsite").config(function ($routeProvider) {

    $routeProvider.
    when("/partials/Blog", {
            templateUrl: "app/partials/Blog.html",
            controller: "BlogController",
        })
        .when('/partials/Contact', {
            templateUrl: "app/partials/Contact.html",
            controller: 'ContactController',
        })
        .when('/partials/Resume', {
            templateUrl: "app/partials/Resume.html",
            controller: 'ResumeController',
        })
        .when('/partials/Projects', {
            templateUrl: "app/partials/Projects.html",
            controller: 'ProjectsController',
        })
        // .otherwise("/partials/Welcome")
})

// let isAuth = AuthFactory => new Promise((resolve, reject) => {
//     if (AuthFactory.isAuthenticated()) {
//         // console.log("User is authenticated")
//         resolve()
//     } else {
//         // console.log("User is not authenticated, GET OUT")
//         reject()
//     }
// })

// angular.module("PersonalWebsite").run(function (FIREBASE_CONFIG) {
//     firebase.initializeApp(FIREBASE_CONFIG)
// })


