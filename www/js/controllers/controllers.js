var BoilerPlate = angular.module('BoilerPlate.controllers',[])

//Angular design pattern follows a Model View Controller (MVC) architecture.
//The Model stores data, while the controller manipulates said data. The View displays
//the data to the user.  Keeping functionality modularized in this manner makes single
//page web app code more readable and scalable.

//As per MVC architecture, the Controller should not store data, but rather manipulate it
//to be properly displayed in the View.

//Controllers are instantiated each time a template is loaded. If using the recommended method
//of one controller per template, $scope variables in the controller are available while 
//on that template, but not on other templates.  If a variable is needed between controllers,
//store that data in a service. Services are persistent during the entire life of the app, and 
//will not be re-instantiated each time the View is changed.

//Add as many controllers as you see fit. Typically one per view is sufficient.
.controller('HomeCtrl',function($scope, $http, $route, $location, $mdDialog, $mdMedia) {

    //$scope variables make use of two way data binding, meaning they can be
    //accessed in the View (the template), and vice-versa.
    $scope.users = [];

    //similarly, $scope functions can be called from the View.
    $scope.testGetUsers_http = function() {
        $http.get('/users').then(successCallback, errorCallback);          
    };

    //callback function for success from server
    function successCallback(serverResponse) {
        console.log("The request to the server succeeded.");
        $scope.users = serverResponse.data;
    }

    //callback function for failure from server
    function errorCallback(serverResponse) {
        console.log("The request to the server failed.");
    }

});

