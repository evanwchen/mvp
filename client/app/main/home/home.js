angular.module('dayplanner.home', [])

.controller('HomeController', function ($scope) {
  $scope.name = "Venue Name";
  $scope.category = "Venue Category";
  $scope.url = "www.example.com";
  $scope.location = "Venue Location";
  $scope.rating = "Venue Rating";

});

