angular.module('dayplanner.explore', [])

.controller('ExploreController', function ($scope, $http) {
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
        url: '/someUrl'
      }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
      $scope.text='';
    }
  }

});

