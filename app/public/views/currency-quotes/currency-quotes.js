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

  $scope.user = { nome : "", email : ""};

  $scope.msgNewsletter = "";

  //10s refresh interval


  this.refreshQuotes = function() {

    quoteService.getQuotes().then(function() {
      $scope.listQuotes = quoteService.quotes();
      console.log("refreshing..." + $scope.listQuotes.length);
      $scope.$apply();
    });
  };

  setTimeout(this.refreshQuotes, 100);
  //this.refreshInterval = setInterval(this.refreshQuotes, 10 * 1000);

  this.register = function () {
    var self = this;
    
    if (!$scope.form.$valid)
      return;

    console.log("[DEBUG] register");

    var promise = newsletterService.registerNewsletter($scope.user.nome, $scope.user.email).then(function(data){ 
      //var res = newsletterService.getResponse();
        
      console.log("Registro de newsletter efetuado com sucesso.");
      $scope.msgNewsletter = data.msg;
      
    });
    
  };

  this.formatCurrency = function(number) {
    var num = this.formatNumber(number.toString());
    return parseFloat(num).toFixed(2).toString().replace(".", ",");
  }

  this.formatInt = function(number) {
    var num = this.formatNumber(number.toString());
    return num.split(".")[0].replace(",", ".");;
  }

  this.formatNumber = function (nStr) {
      nStr += '';
      var x = nStr.split('.');
      var x1 = x[0];
      var x2 = x.length > 1 ? '.' + x[1] : '';
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
              x1 = x1.replace(rgx, '$1' + ',' + '$2');
      }
      return x1 + x2;
  }

}])
