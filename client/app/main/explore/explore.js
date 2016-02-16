angular.module('dayplanner.explore', [])

.controller('ExploreController', function ($scope, $http, $location) {
  $scope.venues = [];

  $scope.text='';

  $scope.explore = function() {
    if ($scope.text) {
      $http({
        method: 'GET',
        url: '/api/explore/venue',
        params: {search: $scope.text},
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function successCallback(response) {
        $scope.venues = [];
        console.log(response.data.response.venues);
        for (var i = 0; i < response.data.response.venues.length; i++) {
          $scope.venues[i] = response.data.response.venues[i];
          $http({
            method: 'GET',
            url: '/api/explore/photos',
            params: {id: $scope.venues[i].id},
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(function successCallback(response) {

          }, function errorCallback(response) {
            console.log('error');
          });
        }
      }, function errorCallback(response) {
        console.log('error');
      })
    }
    $scope.text='';
  }

});

