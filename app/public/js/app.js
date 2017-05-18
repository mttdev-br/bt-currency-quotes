'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'myApp.quote',
  'myApp.newsletter',
  'myApp.currency-quotes',
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/currency-quotes'});
}]);
