'use strict';

angular.module('myApp.newsletter', [])
.service('newsletterService',['$http', '$q', function($http, $q)  {
    var deffered = $q.defer();
    
  
    this.registerNewsletter = async function(name, email) {
      //TODO implenentar chamada na api
      
      // $http returns a promise, which has a then function, which also returns a promise
       $http.defaults.headers.common['Authorization'] = 'desafiobeetech';
      $http.post("http://demo3643409.mockable.io/newsletter")
      .success(function(data, status, headers, config){
        
           
          console.log(data);
        
          if(status != 200) {
            deffered.reject(data);
          }
          
          deffered.resolve(data);
      }).error(function(errorResponse){
          deffered.reject(errorResponse);
      });
      return deffered.promise;
    }
  
   
}]);
