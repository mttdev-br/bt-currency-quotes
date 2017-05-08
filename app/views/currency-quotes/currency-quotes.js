'use strict';

angular.module('myApp.currency-quotes', ['ngRoute', 'myApp.quote', 'myApp.newsletter'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/currency-quotes', {
    templateUrl: 'views/currency-quotes/currency-quotes.html',
    controller: 'currency-quotesCtrl as ctrl'
  });
}])

.controller('currency-quotesCtrl',
  ['$scope', 'quoteService', 'newsletterService',
  function($scope, quoteService, newsletterService) {

  console.log("[DEBUG] currency-quotesCtrl");

  //ng-repeat list
  $scope.listQuotes = [ ];

  this.user = { nome : "", email : ""};

  this.msgNewsletter = "";

  //10s refresh interval


  this.refreshQuotes = function() {

    quoteService.getQuotes().then(function() {
      $scope.listQuotes = quoteService.quotes();
      console.log("refreshing..." + $scope.listQuotes.length);
      $scope.$apply();
    });
  };

  setTimeout(this.refreshQuotes, 100);
  this.refreshInterval = setInterval(this.refreshQuotes, 10 * 1000);

  this.register = function () {
    var self = this;

    console.log("[DEBUG] register");

    var res = newsletterService.registerNewsletter(user.nome, user.email);
    switch (res.code) {
      case 200:
          console.log("Registro de newsletter efetuado com sucesso.");
          msgNewsletter = res.message;
        break;
      default:
          console.log("Houve um erro no registro de newsletter.")
          msgNewsletter = res.message;
        break;
    }
  };

}])
