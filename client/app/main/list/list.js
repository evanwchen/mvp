angular.module('dayplanner.list', [])

.controller('ListController', function ($scope$rootScope, Count) {
  $scope.venues = Count.getList();
  $rootScope.$on('addList', function() {
    $scope.count = Count.getList();
  });

});

