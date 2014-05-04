'use strict';

angular
    .module('origins', ['ngRoute', 'ngResource', 'ngMap'])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/map.html',
            controller: 'MapCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    });
