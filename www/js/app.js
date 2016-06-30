var BoilerPlate = angular.module('BoilerPlate', ['ngRoute', 'ngMaterial', 'BoilerPlate.controllers'])

//function runs when app has been initialized and has started
.run(function(){
	console.log("Project has started.");
})

//Configuration function. Here we define which templates are 
//linked to which controllers.
.config(function($routeProvider, $locationProvider) {
	$routeProvider

	.when('/home', {
		templateUrl: "templates/home.html",
		controller: "HomeCtrl"
	})

    //default catch-all
	.otherwise({
		redirectTo: '/home'
	});

	$locationProvider.html5Mode(false);
});