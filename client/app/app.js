angular.module('dayplanner', [
  'ui.router',
  'ngMaterial'
])
.config(function ($httpProvider, $stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/main');

  $stateProvider
    .state('main', {
      url: '/index',
      templateUrl: 'app/index.html',
      // controller: 'AuthController'
    });

})