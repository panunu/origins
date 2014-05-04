'use strict';

/* global _ */
angular.module('origins').controller('MapCtrl', function ($scope, $resource) {
    $scope.markers = [];

    $resource('/data/countries.json').get().$promise.then(
        function (response) {
            var countries = _.indexBy(
                _.map(response.data, function (row) {
                    return {
                        country: row[8],
                        position: [parseFloat(row[12]), parseFloat(row[13])]
                    };
                }),
                'country'
            );

            // TODO: Separate JSON.
            $scope.markers = [
                {
                    brand: 'Tiger of Sweden',
                    collection: {
                        name: 'men\'s jeans',
                        price: 150
                    },
                    location: countries.Italy
                },
                {
                    brand: 'J. Lindeberg',
                    collection: {
                        name: 'men\'s trench',
                        price: 250
                    },
                    location: countries.Turkey
                },
                {
                    brand: 'Sir Oliver',
                    collection: {
                        name: 'men\'s blazer',
                        price: 160
                    },
                    location: countries.Turkey
                }
            ];
        }
    );
});
