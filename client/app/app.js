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
.controller('MainController', function ($scope, $rootScope, Count) {
  $scope.count = Count.getCount();
  $rootScope.$on('addList', function() {
    $scope.count = Count.getCount();
  });
})
.factory('Count', function($rootScope) {
  var list = [];
  var count = 0;
  var countObj = {
    getCount: function(){
      return count;
    },
    addList: function(venue){
      list.push(venue);
      count++;
      $rootScope.$emit('addList');
    }, 
    getList: function(){
      return list;
    }
  };

  return countObj;
});