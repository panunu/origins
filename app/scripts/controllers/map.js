'use strict';

/* global _ */
angular.module('origins').controller('MapCtrl', function ($scope, $resource, $q) {
    $scope.collections = {};

    // TODO: Move to Service.
    $q.all([
        $resource('/data/countries.json').get().$promise,
        $resource('/data/collections.json').get().$promise
    ]).then(function (response) {
        // TODO: Transform the data itself to avoid this ugly part.
        var countries = response[0].data[0];

        $scope.collections.onMap = _.map(response[1].data, function (x) {
            x.location = offset(countries[x.location]);
            return x;
        });

        $scope.collections.perCountry = _.countBy($scope.collections.onMap, function (x) {
            return x.location.country;
        });

        function offset (location) {
            var position = [
                (location.position[0] + _.random(-0.75, 0.75)),
                (location.position[1] + _.random(-0.75, 0.75))
            ];

            return {
                country: location.country,
                'position': position
            };
        }
    });
});
