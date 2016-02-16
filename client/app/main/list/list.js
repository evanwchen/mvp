angular.module('dayplanner.list', [])

.controller('ListController', function ($scope, $rootScope, Count) {
  $scope.venues = Count.getList();
  $rootScope.$on('addList', function() {
    $scope.venues = Count.getList();
    console.log('$scope.venues: ', $scope.venues);
  });

});

