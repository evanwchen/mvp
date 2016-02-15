angular.module('dayplanner', [
  'dayplanner.home',
  'ui.router',
  'ngMaterial'
])
.config(function ($httpProvider, $stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('main', {
      templateUrl: 'app/main/main.html'
    })
    .state('main.home', {
      url: '/home',
      templateUrl: 'app/main/home/home.html',
      controller: 'HomeController'
    })
    .state('main.explore', {
      url: '/explore',
      templateUrl: 'app/main/explore/explore.html',
      controller: 'HomeController' // update
    })
    .state('main.list', {
      url: '/list',
      templateUrl: 'app/main/list/list.html',
      controller: 'HomeController' // update
    });

})