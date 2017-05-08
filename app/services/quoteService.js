'use strict';

//TODO implementar service de consulta de quotes
angular.module("myApp.quote", [])
.service("quoteService", ['$http', '$q', function($http, $q) {
    var deffered = $q.defer();
    var data = [];

    this.getQuotes = async function() {
      // $http returns a promise, which has a then function, which also returns a promise
      $http.get("http://demo3643409.mockable.io/quotations")
      .success(function (response) {
          console.log(response);
          data = response.result;
          deffered.resolve();
      });
      return deffered.promise;
    }

    this.quotes = function() {
      return data;
    }
}]);
