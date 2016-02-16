angular.module('dayplanner.list', [])

.controller('ListController', function ($scope, $rootScope, Count) {
  $scope.venues = Count.getList();
  $rootScope.$on('addList', function() {
    $scope.venues = Count.getList();
    console.log('$scope.venues: ', $scope.venues);
  });

  $scope.removeFromList = function(index) {
    console.log('index:', index);
    console.log('$scope.venues b4:', $scope.venues);
    $scope.venues.splice(index, 1);
    console.log('$scope.venues after:', $scope.venues);
  };

});

