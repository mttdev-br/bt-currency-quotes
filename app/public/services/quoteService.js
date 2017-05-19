'use strict';

//TODO implementar service de consulta de quotes
angular.module("myApp.quote", [])
.service("quoteService", ['$http', '$q', function($http, $q) {
    var deffered = $q.defer();
    

    this.getQuotes = async function() {
      // $http returns a promise, which has a then function, which also returns a promise
      $http.get("http://demo3643409.mockable.io/quotations")
      .then(function (response) {
          //console.log(response);
          deffered.resolve(response.data);
      });
      return deffered.promise;
    }

}]);
