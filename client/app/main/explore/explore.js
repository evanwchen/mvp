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
      $location.path('/api/explore')
      // }).then(function successCallback(response) {
      //   console.log('res: ',response);
      // }, function errorCallback(response) {
      //   // called asynchronously if an error occurs
      //   // or server returns response with an error status.
      //   console.log('res: ',response);
      // });
    }
    $scope.text='';
  }

});

