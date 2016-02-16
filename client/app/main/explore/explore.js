angular.module('dayplanner.explore', [])

.controller('ExploreController', function ($scope, $http, $location) {
  $scope.venues;

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
        $scope.venues = {};
        for (var i = 0; i < response.data.response.venues.length; i++) {
          var id = response.data.response.venues[i].id;
          $scope.venues[id] = response.data.response.venues[i];

          $http({
            method: 'GET',
            url: '/api/explore/photos',
            params: {id: id},
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(function successCallback(response) {
            var venueID = response.config.params.id;
            $scope.venues[venueID].photos = [];
            for (var j = 0; j < response.data.response.photos.items.length; j++) {
              var prefix = response.data.response.photos.items[j].prefix;
              var suffix = response.data.response.photos.items[j].suffix;
              var width = response.data.response.photos.items[j].width;
              var height = response.data.response.photos.items[j].height;
              var photoUrl = prefix+width+'x'+height+suffix;
              $scope.venues[venueID].photos.push(photoUrl);
            }
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

