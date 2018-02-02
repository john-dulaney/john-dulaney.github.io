// Imports
angular.module("PersonalWebsite")
    // naming the factory, passing in appropriate angular methods
    .factory("CrudFactory", function ($http, $timeout, $location, $route) {
        const FirebaseURL = "https://personal-site-ffb9c.firebaseio.com/"
        return Object.create(null, {
            "cache": {
                value: null,
                writable: true
            },
            "GetBlog": {
                value: function (FirebaseURL) {
                    return $http({
                        method: "GET",
                        url: `${FirebaseURL}myBlog.json`
                    }).then(blogs => {
                            const blogEl = document.getElementsByClassName("blog__list")[0]
                            blogEl.innerHTML = ""
                                blogs.forEach(b => {
                                    blogEl.innerHTML += `
                                    <article id=${b.id}>
                                        <h2><strong>${b.title}</strong></h2>
                                            <li id="text-block" class="col-10 align-self-center container">
                                            <div>${b.date}</div>
                                            <div>${b.tags}</div>
                                            <div>${b.author}</div>
                                                <hr>
                                            <div>${b.content}</div>
                                            </li>
                                    <br>
                                    </article>
                                    `
                                })
                            
                        
                        return blogs
                    })
                }
            },
            "GetResume": {
                value: function (FirebaseURL) {
                    return $http({
                        method: "GET",
                        url: `${FirebaseURL}myBlog.json` //fill in this url
                    }).then(response => {
                        // CODE  GOES HERE
                        return response
                    })
                }
            },
            "GetContact": {
                value: function (FirebaseURL) {
                    return $http({
                        method: "GET",
                        url: `${FirebaseURL}myBlog.json` //fill in this url
                    }).then(response => {
                        // CODE  GOES HERE
                        return response
                    })
                }
            },
            "GetProjects": {
                value: function (FirebaseURL) {
                    return $http({
                        method: "GET",
                        url: `${FirebaseURL}myBlog.json` //fill in this url
                    }).then(response => {
                        // CODE  GOES HERE
                        return response
                    })
                }
            },
            "GetWelcome": {
                value: function (FirebaseURL) {
                    return $http({
                        method: "GET",
                        url: `${FirebaseURL}myBlog.json` //fill in this url
                    }).then(response => {
                        // CODE  GOES HERE
                        return response
                    })
                }
            },
           
            }
        )
    }
)


// "POST": {
//     value: function (FirebaseURL) {
//         return $http({
//             method: "POST",
//             url: `${FirebaseURL}/` //fill in this url
        
//         }).then(response => {
//         // CODE  GOES HERE
//         return response
//     }).catch(function (error) {
//         window.alert("Couldn't fetch Data")
//     })
// }},
// "PUT": {
//     value: function (FirebaseURL, jSawnObj) {
//         return $http({
//             method: "PUT",
//             url: `${FirebaseURL}`,
//             data: {jSawnObj}
//         }).then(response => {
//             // CODE  GOES HERE
//             return response
//         })
//     }
// },
// "DELETE": {
//     value: function (FirebaseURL) {
//             return $http({
//                 method: "PUT",
//                 url: `${PersonalWebsiteURL}`,
//                 data: {}
//             }).then(response => {
//                 // CODE  GOES HERE
//                 return response
//             })
//         }
//     }