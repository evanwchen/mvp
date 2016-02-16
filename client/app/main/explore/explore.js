angular.module('dayplanner.explore', [])

.controller('ExploreController', function ($scope) {
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

});

