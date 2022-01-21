var myApp = angular
  .module('app', [
		'ngRoute', 
		'ngResource',
		'app.services',
		'app.controllers'
	]);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when("/library", 		      { templateUrl: "partials/library.html",    controller: "libraryController" })
		.when("/library/new",	      { templateUrl: "partials/newyoyo.html",    controller: "newYoyoController" })
		.when("/library/:id",       { templateUrl: "partials/yoyo.html", 		   controller: "yoyoController"		})
    .when("/library/edit/:id",  { templateUrl: "partials/edityoyo.html",   controller: "yoyoController"    })
		.when("/register", 		      { templateUrl: "partials/newuser.html",    controller: "userController"		})
		.when("/login", 			      { templateUrl: "partials/login.html", 	   controller: "userController"		})
		.otherwise({redirectTo: "/library"});
}]);

myApp.factory('authInterceptor', function ($rootScope, $q, $window) {
  return {
    request: function (config) {
      config.headers = config.headers || {};
      if ($window.localStorage.token) {
        config.headers.Authorization = $window.localStorage.token;
      }
      return config;
    }
    // ,
    // response: function (response) {
    //   if (response.status === 401) {
    //     // handle the case where the user is not authenticated
    //   }
    //   return response || $q.when(response);
    // }
  };
});

myApp.config(function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
});