'use strict';

angular.module('myApp.currency-quotes', ['ngRoute', 'myApp.quote', 'myApp.newsletter'])
//routes an config
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/currency-quotes', {
    templateUrl: 'views/currency-quotes/currency-quotes.html',
    controller: 'currency-quotesCtrl as ctrl'
  });
}])
//controller
.controller('currency-quotesCtrl',
  ['$scope', 'quoteService', 'newsletterService',
  function($scope, quoteService, newsletterService) {

  console.log("[DEBUG] currency-quotesCtrl");

  //ng-repeat list
  $scope.listQuotes = [ ];
  $scope.user = { nome : "", email : ""};
  $scope.buttonText = "Cadastrar";
  
  //quotes section
  this.refreshQuotes = function() {

    quoteService.getQuotes().then(function() {
      $scope.listQuotes = quoteService.quotes();
      console.log("Refreshing quotes");
      $scope.$apply();
    });
  };

  //first search
  setTimeout(this.refreshQuotes, 100);
    
  //10s refresh interval
  this.refreshInterval = setInterval(this.refreshQuotes, 10 * 1000);
  
   //newsletter section
  this.register = function () {
    var self = this;
    
    if (!$scope.form.$valid)
      return;

    var promise = newsletterService.registerNewsletter($scope.user.nome, $scope.user.email).then(function(data){ 
      //var res = newsletterService.getResponse();
        
      console.log("Registro de newsletter efetuado com sucesso.");
      $scope.success = data.msg;
      $scope.buttonText = "Sucesso";
      
    });
    
  };
  
  //should move these to UtilsService
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
