'use strict';

angular
    .module('origins', ['ngRoute', 'ngResource', 'google-maps'])
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
