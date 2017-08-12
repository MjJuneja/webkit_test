'use strict';

/**
 * @ngdoc overview
 * @name publicApp
 * @description
 * # publicApp
 *
 * Main module of the application.
 */
angular
  .module('publicApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngCookies'
  ])
  



  .config(function ($routeProvider,$locationProvider) {
  //  $urlRouterProvider.deferIntercept();
    $locationProvider.hashPrefix('');
      $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
       .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
       .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
      .when('/logout', {
        templateUrl: 'views/main.html',
        controller: 'LogoutCtrl',
        controllerAs: 'logout'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
//  .run(function($urlRouter, myservice) {
//   myservice.promise.then(function() {
//     $urlRouter.listen();
//     $urlRouter.sync();  // not sure if this is necessary
//   });
// });