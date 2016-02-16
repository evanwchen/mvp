angular.module('dayplanner', [
  'dayplanner.home',
  'dayplanner.explore',
  'dayplanner.list',
  'ui.router',
  'ngMaterial'
])
.config(function ($httpProvider, $stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('main', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController'
    })
    .state('main.home', {
      url: '/home',
      templateUrl: 'app/main/home/home.html',
      controller: 'HomeController'
    })
    .state('main.explore', {
      url: '/explore',
      templateUrl: 'app/main/explore/explore.html',
      controller: 'ExploreController'
    })
    .state('main.list', {
      url: '/list',
      templateUrl: 'app/main/list/list.html',
      controller: 'ListController'
    });

})
.controller('MainController', function ($scope) {
  // $scope.count = $scope.list.length;
  $scope.count=0;
  // $scope.list = [];
})
.factory('List', function($scope) {
  $scope.list.push('test');
})