//TODO: create seperate js files for routes, controllers, directives

// MODULE
var uiTest = angular.module('uiTest', ['ngRoute', 'ngResource']);

// ROUTES
uiTest.config(function ($routeProvider) {
   
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })
    
    .when('/settings', {
        templateUrl: 'pages/settings.htm',
        controller: 'settingsController'
    })
    
    .when('/statistics', {
        templateUrl: 'pages/statistics.htm',
        controller: 'statisticsController'
    })
    
    .when('/calendar', {
        templateUrl: 'pages/calendar.htm',
        controller: 'calendarController'
    })
    
    .when('/users', {
        templateUrl: 'pages/users.htm',
        controller: 'usersController'
    })
    
    .when('/workflow', {
        templateUrl: 'pages/workflow.htm',
        controller: 'workflowController'
    })
    
});


// CONTROLLERS
uiTest.controller('mainController', ['$scope', function($scope) {
    
}]);
uiTest.controller('homeController', ['$scope', function($scope) {
    
}]);

uiTest.controller('settingsController', ['$scope', function($scope) {
    
}]);

uiTest.controller('statisticsController', ['$scope', function($scope) {
    
}]);

uiTest.controller('calendarController', ['$scope', function($scope) {
    
}]);

uiTest.controller('usersController', ['$scope', function($scope) {
    
}]);

uiTest.controller('workflowController', ['$scope', function($scope) {
    
}]);

//DIRECTIVES

uiTest.directive("dTopnav", function() {
   return {
       restrict: 'E',
       templateUrl: 'directives/topnav.html',
       replace: true
       /*TODO: create seperate scope*/
   }
});

uiTest.directive("dSidenavHeader", function() {
   return {
       restrict: 'E',
       templateUrl: 'directives/sidenav-header.html',
       replace: true
       /*TODO: create seperate scope*/
   }
});

uiTest.directive("dSidenav", function() {
   return {
       restrict: 'E',
       templateUrl: 'directives/sidenav.html',
       replace: true
       /*TODO: create seperate scope*/
   }
});

