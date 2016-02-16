angular.module('dayplanner.explore', [])

.controller('ExploreController', function ($scope, $http, $location) {
  $scope.venues = [
    {  
      name: "Venue Name",
      category: "Venue Category",
      url: "www.example.com",
      location: "Venue Location",
      rating: "Venue Rating"
    },
    {
      name: "Venue Name 2",
      category: "Venue Category 2",
      url: "www.example.com 2",
      location: "Venue Location 2",
      rating: "Venue Rating 2"
    }
  ];

  $scope.text='';

  $scope.explore = function() {
    if ($scope.text) {
      $http({
        method: 'GET',
        url: '/api/explore'
      }).then(function successCallback(response) {
        $scope.venues = [];
        console.log(response);
        for (var i = 0; i < response.data.response.venues.length; i++) {
          $scope.venues[i] = response.data.response.venues[i];
        }
      }, function errorCallback(response) {
        console.log('error');
      })
    }
    $scope.text='';
  }

});

