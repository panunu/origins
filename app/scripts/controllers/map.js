'use strict';

/* global _ */
angular.module('origins').controller('MapCtrl', function ($scope, $resource) {
    $scope.map = {
        zoom: 2,
        center: {
            latitude: 20,
            longitude: 0
        },
        draggable: true,
        markers: []
    };

    $resource('/data/countries.json').get().$promise.then(
        function (response) {
            var countries = _.map(response.data, function (row) {
                return {
                    latitute: row[12],
                    longitude: row[13],
                    title: row[8]
                };
            });

            $scope.map.markers = countries;
            /*
            $scope.markers = [
                {
                    brand: 'Tiger of Sweden',
                    country: 'Italy',
                    collection: 'Jeans'
                }
            ];*/
        }
    );
});
